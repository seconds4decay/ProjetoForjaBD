import AdicionarFormularioUniversal from "@/components/Formularios/AdicionarFormularioUniversal";
import { Armadura } from "@/models/Armadura";
import Page from "@/components/Templates/Page";

export default function Adicionar() {
    return (
        <Page>
            <div>
                <AdicionarFormularioUniversal entidade={Armadura}/>
            </div>
        </Page>
    );
}