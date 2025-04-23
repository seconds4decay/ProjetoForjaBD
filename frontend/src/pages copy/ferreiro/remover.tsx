import RemoverFormularioUniversal from "@/components/Formularios/RemoverFormularioUniversal";
import { Ferreiro } from "@/models/Ferreiro";

export default function Remover() {
    return (
        <div>
            <h1>Remover Ferreiro</h1>
            <RemoverFormularioUniversal entidade={Ferreiro} />
        </div>
    );
}