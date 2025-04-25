import AtualizarFormularioUniversal from "@/components/Formularios/AtualizarFormularioUniversal";
import { Fornecedor } from "@/models/Fornecedor";


export default function Atualizar() {
    return (
        <div>
            <h1>Atualizar Fornecedor</h1>
            <AtualizarFormularioUniversal entidade={Fornecedor}/>
        </div>
    );
}