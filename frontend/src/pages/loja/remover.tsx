import RemoverFormularioUniversal from "@/components/Formularios/RemoverFormularioUniversal";
import { Loja } from "@/models/Loja";

export default function Remover() {
    return (
        <div>
            <h1>Remover Loja</h1>
            <RemoverFormularioUniversal entidade={Loja} />
        </div>
    );
}