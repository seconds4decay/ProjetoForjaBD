import { useEffect, useState } from "react";
import { Atributo, Props } from "@/components/Interfaces";
import { capitalize } from "@/functions/Capitalize";
import Image from "next/image";

import styles from "@/styles/table.module.css";
import { NextRouter, useRouter } from "next/router";

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

    useEffect(() => {
        async function fetchData() {
            const data = await getModelAll(entidade.nome);
            setDados(data);
            console.log(data);
        }

        fetchData();
    }, [entidade.nome]);

    return (
        <div>
            <table className={styles.table}>
                <thead> 
                    <tr>
                        {entidade.nome != "venda" && <th key={0}>ID</th>}
                        {entidade.atributos.map((atributo: Atributo) => (
                            <th key={atributo.nome}>{capitalize(atributo.nome)}</th>
                        ))}
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {dados && dados.map((item, index) => (
                        <tr key={index}>
                            {entidade.nome != "venda" && <td key={0}>
                                {item.id}
                            </td>}
                            {entidade.atributos.map((atributo: Atributo) => (
                                <td key={atributo.nome}>
                                    {renderCellValue(item[atributo.nome])}
                                </td>
                            ))}
                            <td>
                                <button>
                                    <a href={`/${entidade.nome}s/atualizar/${item.id}`} className="group flex items-center hover:text-white hover:bg-[var(--elementcolor)] rounded-[var(--borderradius)] p-1 transform hover:scale-110 transition delay-40">
                                        <Image src={"/icons/update.png"} alt="search" width={20} height={20} className="transition delay-40 group-hover:invert-100"/>Atualizar
                                    </a>
                                </button>
                            </td>
                            <td>
                                <button onClick={() => deleteModel(entidade.nome, item.id, router)} className="group flex items-center hover:text-white hover:bg-[var(--elementcolor)] rounded-[var(--borderradius)] p-1 transform hover:scale-110 transition delay-40">
                                    <Image src={"/icons/delete.png"} alt="search" width={20} height={20} className="transition delay-40 group-hover:invert-100"/>Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
