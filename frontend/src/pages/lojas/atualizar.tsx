import AtualizarFormularioUniversal from "@/components/Formularios/AtualizarFormularioUniversal";
import { Loja } from "@/models/Loja";
import Page from "@/components/Templates/Page";
        
export default function Adicionar() {
    return (
        <Page>
            <div>
                <AtualizarFormularioUniversal entidade={Loja}/>
            </div>
        </Page>
    );
}