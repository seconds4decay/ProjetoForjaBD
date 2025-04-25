import { Material } from "@/models/Material";
import BuscarFomularioUniversal from "@/components/Formularios/BuscarFormularioUniversal";

export default function Buscar() {
    return (
        <div>
            <h1>Buscar Material</h1>
            <BuscarFomularioUniversal entidade={Material} />
        </div>
    );
}