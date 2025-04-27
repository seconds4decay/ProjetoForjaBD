import AdicionarFormularioUniversal from "@/components/Formularios/AdicionarFormularioUniversal";
import { Ferreiro } from "@/models/Ferreiro";
import Page from "@/components/Templates/Page";

export default function Adicionar() {
    return (
        <Page>
            <div>
                <AdicionarFormularioUniversal entidade={Ferreiro}/>
            </div>
        </Page>
    );
}