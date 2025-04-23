import RemoverFormularioUniversal from "@/components/Formularios/RemoverFormularioUniversal";
import { Cliente } from "@/models/Cliente";

export default function Remover() {
    return (
        <div>
            <h1>Remover Cliente</h1>
            <RemoverFormularioUniversal entidade={Cliente} />
        </div>
    );
}