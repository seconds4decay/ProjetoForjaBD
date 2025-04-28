import { useEffect, useState } from "react";
import { Atributo, Props } from "@/components/Interfaces";
import { capitalize } from "@/functions/Capitalize";
import Image from "next/image";

import styles from "@/styles/table.module.css";
import { NextRouter, useRouter } from "next/router";
import SearchBar from "../Elements/Searchbar";

async function getModelAll(route: string) {
    const response = await fetch(`http://localhost:8080/${route}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    if(response.status === 200 ) {
        return response.json();
    }
}

function renderCellValue(value: any) {
    if (value === null) return "—";
    if (typeof value === "object") {
      return value.nome ?? "[objeto]";
    }
    return String(value);
}

function deleteModel(route: string, id: number, router: NextRouter) {

    fetch(`http://localhost:8080/${route}/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    });

    router.reload();
}


export default function VisualizarModel({ entidade }: Props) {
    const [dados, setDados] = useState<any[]>([]);
    const router = useRouter();
    const [sortConfig, setSortConfig] = useState<{ key: string, direction: "asc" | "desc" } | null>(null);

    function handleSort(columnName: string) {
        if (sortConfig && sortConfig.key === columnName) {
            // Se já estiver ordenando por essa coluna, inverte a direção
            setSortConfig({
                key: columnName,
                direction: sortConfig.direction === "asc" ? "desc" : "asc",
            });
        } else {
            // Se clicar em uma nova coluna, começa ordenando ascendente
            setSortConfig({ key: columnName, direction: "asc" });
        }
    }

    useEffect(() => {
        if (sortConfig !== null) {
            const sortedData = [...dados].sort((a, b) => {
                const aValue = a[sortConfig.key];
                const bValue = b[sortConfig.key];
    
                if (aValue == null) return 1;
                if (bValue == null) return -1;
    
                if (typeof aValue === "string") {
                    return sortConfig.direction === "asc"
                        ? aValue.localeCompare(bValue)
                        : bValue.localeCompare(aValue);
                }
                if (typeof aValue === "number") {
                    return sortConfig.direction === "asc"
                        ? aValue - bValue
                        : bValue - aValue;
                }
                return 0;
            });
            setDados(sortedData);
        }
    }, [sortConfig]);

    useEffect(() => {
        async function fetchData() {
            const data = await getModelAll(entidade.nome);
            setDados(data);
        }
        fetchData();
    }, [entidade.nome]);

    function handleSearch(searchTerm: string) {
        if (searchTerm.length > 3) {
            const filteredData = dados.filter((item) => {
                return Object.values(item).some((value) =>
                    String(value).toLowerCase().includes(searchTerm.toLowerCase())
                );
            });
            setDados(filteredData);
        } else {
            getModelAll(entidade.nome).then((data) => setDados(data));
        }
    }

    const tdClass = "p-2 px-8 text-left border-[var(--bordercolor)] border-b-1 cursor-pointer"

    return (
        <div>
            <SearchBar onSearch={handleSearch}/>

            <table className="w-1/1border-collapse">
                <thead className="bg-[var(--background2)] text-[var(--textcolor)]"> 
                    <tr>
                        {entidade.nome != "venda" && <th key={"id"} className={tdClass} onClick={() => handleSort("id")} >
                            ID{sortConfig?.key === "id" ? (sortConfig.direction === "asc" ? "↓" : "↑") : ""}
                            </th>}
                        {entidade.atributos.map((atributo: Atributo) => (
                            <th key={atributo.nome} onClick={() => handleSort(atributo.nome)} className={tdClass}>{capitalize(atributo.nome)}{sortConfig?.key === atributo.nome ? (sortConfig.direction === "asc" ? "↓" : "↑") : ""}</th>
                        ))}
                        <th className={tdClass}></th>
                        <th className={tdClass}></th>
                    </tr>
                </thead>
                <tbody className="bg-[var(--background2)] text-[var(--textcolor)]">
                    {dados && dados.map((item, index) => (
                        <tr key={index} className="hover:bg-[var(--background)]">
                            {entidade.nome != "venda" && <td key={0} className={tdClass}>
                                {item.id}
                            </td>}
                            {entidade.atributos.map((atributo: Atributo) => (
                                <td key={atributo.nome} className={tdClass}>
                                    {renderCellValue(item[atributo.nome])}
                                </td>
                            ))}
                            <td className={tdClass}>
                                <button>
                                    <a href={`/${entidade.nome}s/atualizar/${item.id}`} className="group flex items-center hover:text-white hover:bg-[var(--elementcolor)] rounded-[var(--borderradius)] p-1 transform hover:scale-110 transition delay-40 w-[130%]">
                                        <Image src={"/icons/update.png"} alt="search" width={20} height={20} className="transition delay-40 group-hover:invert-100"/>Atualizar
                                    </a>
                                </button>
                            </td>
                            <td className={tdClass}>
                                <button onClick={() => deleteModel(entidade.nome, item.id, router)} className="group flex items-center hover:text-white hover:bg-[var(--elementcolor)] rounded-[var(--borderradius)] p-1 transform hover:scale-110 transition delay-40 w-[140%]">
                                    <Image src={"/icons/delete.png"} alt="search" width={20} height={20} className="transition delay-40 group-hover:invert-100"/>Deletar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
