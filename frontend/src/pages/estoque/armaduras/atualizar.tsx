import AtualizarFormularioUniversal from "@/components/Formularios/AtualizarFormularioUniversal";
import { Armadura } from "@/models/Armadura";
import Page from "@/components/Templates/Page";
        
export default function Adicionar() {
    return (
        <Page>
            <div>
                <AtualizarFormularioUniversal entidade={Armadura}/>
            </div>
        </Page>
    );
}