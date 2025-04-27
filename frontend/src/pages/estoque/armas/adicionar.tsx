import AdicionarFormularioUniversal from "@/components/Formularios/AdicionarFormularioUniversal";
import { Arma } from "@/models/Arma";
import Page from "@/components/Templates/Page";

export default function Adicionar() {
    return (
        <Page>
            <div>
                <AdicionarFormularioUniversal entidade={Arma}/>
            </div>
        </Page>
    );
}