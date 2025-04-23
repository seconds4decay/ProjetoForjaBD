import { Cliente } from "@/models/Cliente";
import BuscarFomularioUniversal from "@/components/Formularios/BuscarFormularioUniversal";

export default function Buscar() {
    return (
        <div>
            <h1>Buscar Cliente</h1>
            <BuscarFomularioUniversal entidade={Cliente} />
        </div>
    );
}