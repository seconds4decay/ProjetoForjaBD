import { useEffect, useState } from "react";
import { Atributo, Props } from "@/components/Interfaces";
import { capitalize } from "@/functions/Capitalize";

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

export default function VisualizarModel({ entidade }: Props) {
    const [dados, setDados] = useState<any[]>([]);

    useEffect(() => {
        async function fetchData() {
            const data = await getModelAll(entidade.nome);
            setDados(data);
            console.log(data);
        }

        fetchData();
    }, [entidade.nome]);

    return (
        <div className="overflow-x-auto rounded-xl shadow">
            <table className="min-w-full divide-y divide-black-200" style={{ backgroundColor: "var(--elementcolor)" }}>
                <thead className="text-white-700 uppercase text-xs" > 
                    <tr>
                        {entidade.nome != "venda" && <th key={0}>ID</th>}
                        {entidade.atributos.map((atributo: Atributo) => (
                            <th className="px-6 py-3 text-left" key={atributo.nome}>{capitalize(atributo.nome)}</th>
                        ))}
                    </tr>
                </thead>
                <tbody className="divide-y divide-black-200">
                    {dados && dados.map((item, index) => (
                        <tr key={index} className="hover:bg-gray-50 transition-colors duration-200">
                            <td className="px-6 py-4" key={0}>
                                {item.id}
                            </td>
                            {entidade.atributos.map((atributo: Atributo) => (
                                <td className="px-6 py-4" key={atributo.nome}>
                                    {renderCellValue(item[atributo.nome])}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
