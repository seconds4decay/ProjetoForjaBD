import AtualizarFormularioUniversal from "@/components/Formularios/AtualizarFormularioUniversal";
import { Arma } from "@/models/Arma";
import Page from "@/components/Templates/Page";
        
export default function Adicionar() {
    return (
        <Page>
            <div>
                <AtualizarFormularioUniversal entidade={Arma}/>
            </div>
        </Page>
    );
}