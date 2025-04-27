import RemoverFormularioUniversal from "@/components/Formularios/RemoverFormularioUniversal";
import { Fornecedor } from "@/models/Fornecedor";
import Page from "@/components/Templates/Page";
        
export default function Adicionar() {
    return (
        <Page>
            <div>
                <RemoverFormularioUniversal entidade={Fornecedor} />
            </div>
        </Page>
    );
}