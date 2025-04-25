import RemoverFormularioUniversal from "@/components/Formularios/RemoverFormularioUniversal";
import { Item } from "@/models/Item";

export default function Remover() {
    return (
        <div>
            <h1>Remover Item</h1>
            <RemoverFormularioUniversal entidade={Item} />
        </div>
    );
}