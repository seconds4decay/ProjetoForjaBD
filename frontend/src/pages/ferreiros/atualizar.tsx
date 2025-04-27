import AtualizarFormularioUniversal from "@/components/Formularios/AtualizarFormularioUniversal";
import { Ferreiro } from "@/models/Ferreiro";
import Page from "@/components/Templates/Page";
        
export default function Adicionar() {
    return (
        <Page>
            <div>
                <AtualizarFormularioUniversal entidade={Ferreiro}/>
            </div>
        </Page>
    );
}