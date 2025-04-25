import RemoverFormularioUniversal from "@/components/Formularios/RemoverFormularioUniversal";
import { Fornecedor } from "@/models/Fornecedor";

export default function Remover() {
    return (
        <div>
            <h1>Remover Fornecedor</h1>
            <RemoverFormularioUniversal entidade={Fornecedor} />
        </div>
    );
}