import AdicionarFormularioUniversal from "@/components/Formularios/AdicionarFormularioUniversal";
import { Item } from "@/models/Item";

export default function Adicionar() {
    return (
        <div>
            <h1>Adicionar Item</h1>
            <AdicionarFormularioUniversal entidade={Item}/>
        </div>
    );
}