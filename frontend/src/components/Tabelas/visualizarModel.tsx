import { useEffect, useState } from "react";
import { Atributo, Props } from "@/components/Interfaces";
import { capitalize } from "@/functions/Capitalize";

async function getModelAll(route: string) {
    const response = await fetch(`http://localhost:8080/${route}/`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    return response.json();
}

export default function VisualizarModel({ entidade }: Props) {
    const [dados, setDados] = useState<any[]>([]);

    useEffect(() => {
        async function fetchData() {
            const data = await getModelAll(entidade.nome);
            setDados(data);
            console.log(entidade.nome);
            console.log(data);
        }

        fetchData();
    }, [entidade.nome]);

    return (
        <table>
            <thead>
                <tr>
                    {entidade.atributos.map((atributo: Atributo) => (
                        <th key={atributo.nome}>{capitalize(atributo.nome)}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {/*dados.map((item, index) => (
                    <tr key={index}>
                        {entidade.atributos.map((atributo: Atributo) => (
                            <td key={atributo.nome}>{item[atributo.nome]}</td>
                        ))}
                    </tr>
                ))*/}
            </tbody>
        </table>
    );
}
