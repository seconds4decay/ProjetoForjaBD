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
        <table>
            <thead>
                <tr>
                    {entidade.nome != "venda" && <th key={0}>ID</th>}
                    {entidade.atributos.map((atributo: Atributo) => (
                        <th key={atributo.nome}>{capitalize(atributo.nome)}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {dados && dados.map((item, index) => (
                    <tr key={index}>
                        <td key={0}>{item.id}</td>
                        {entidade.atributos.map((atributo: Atributo) => (
                            <td key={atributo.nome}>
                                {renderCellValue(item[atributo.nome])}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
