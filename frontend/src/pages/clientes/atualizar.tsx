import AtualizarFormularioUniversal from "@/components/Formularios/AtualizarFormularioUniversal";
import { Cliente } from "@/models/Cliente";
import Page from "@/components/Templates/Page";
        
export default function Adicionar() {
    return (
        <Page>
            <div>
                <AtualizarFormularioUniversal entidade={Cliente}/>
            </div>
        </Page>
    );
}