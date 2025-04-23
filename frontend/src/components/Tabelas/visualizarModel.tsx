import { Atributo, Props } from "@/components/Interfaces";
import { capitalize } from "@/functions/Capitalize";

export default function VisualizarModel({ entidade }: Props) {

    return (
        <table>
            <th>
                {entidade.atributos.map((atributo: Atributo) => (
                    <tr key={atributo.nome}>
                        {capitalize(atributo.nome)}
                    </tr>
                ))}
            </th>
            <tbody>
                
                
            </tbody>
        </table>
    )
}