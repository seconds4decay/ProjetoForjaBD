import AtualizarFormularioUniversal from "@/components/Formularios/AtualizarFormularioUniversal";
import { Material } from "@/models/Material";
import Page from "@/components/Templates/Page";
        
export default function Adicionar() {
    return (
        <Page>
            <div>
                <AtualizarFormularioUniversal entidade={Material}/>
            </div>
        </Page>
    );
}