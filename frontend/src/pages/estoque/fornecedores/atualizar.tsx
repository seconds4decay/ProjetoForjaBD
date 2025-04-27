import AtualizarFormularioUniversal from "@/components/Formularios/AtualizarFormularioUniversal";
import { Fornecedor } from "@/models/Fornecedor";
import Page from "@/components/Templates/Page";
        
export default function Adicionar() {
    return (
        <Page>
            <div>
                <AtualizarFormularioUniversal entidade={Fornecedor}/>
            </div>
        </Page>
    );
}