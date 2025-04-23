import RemoverFormularioUniversal from "@/components/Formularios/RemoverFormularioUniversal";
import { Venda } from "@/models/Venda";

export default function Remover() {
    return (
        <div>
            <h1>Remover Venda</h1>
            <RemoverFormularioUniversal entidade={Venda} />
        </div>
    );
}