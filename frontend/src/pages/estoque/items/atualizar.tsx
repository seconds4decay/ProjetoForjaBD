import AtualizarFormularioUniversal from "@/components/Formularios/AtualizarFormularioUniversal";
import { Item } from "@/models/Item";
import Page from "@/components/Templates/Page";
        
export default function Adicionar() {
    return (
        <Page>
            <div>
                <AtualizarFormularioUniversal entidade={Item}/>
            </div>
        </Page>
    );
}