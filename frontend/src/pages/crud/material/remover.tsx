import RemoverFormularioUniversal from "@/components/Formularios/RemoverFormularioUniversal";
import { Material } from "@/models/Material";

export default function Remover() {
    return (
        <div>
            <h1>Remover Material</h1>
            <RemoverFormularioUniversal entidade={Material} />
        </div>
    );
}