import AdicionarFormularioUniversal from "@/components/Formularios/AdicionarFormularioUniversal";
import { Fornecedor } from "@/models/Fornecedor";
import Page from "@/components/Templates/Page";

export default function Adicionar() {
    return (
        <Page>
            <div>
                <AdicionarFormularioUniversal entidade={Fornecedor}/>
            </div>
        </Page>
    );
}