import AtualizarFormularioUniversal from "@/components/Formularios/AtualizarFormularioUniversal";
import { Item } from "@/models/Item";


export default function Atualizar() {
    return (
        <div>
            <h1>Atualizar Item</h1>
            <AtualizarFormularioUniversal entidade={Item}/>
        </div>
    );
}