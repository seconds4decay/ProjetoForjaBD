import AdicionarFormularioUniversal from "@/components/Formularios/AdicionarFormularioUniversal";
import { Fornecedor } from "@/models/Fornecedor";

export default function Adicionar() {
    return (
        <div>
            <h1>Adicionar Fornecedor</h1>
            <AdicionarFormularioUniversal entidade={Fornecedor}/>
        </div>
    );
}