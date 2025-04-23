import { Item } from "@/models/Item";
import BuscarFomularioUniversal from "@/components/Formularios/BuscarFormularioUniversal";

export default function Buscar() {
    return (
        <div>
            <h1>Buscar Item</h1>
            <BuscarFomularioUniversal entidade={Item} />
        </div>
    );
}