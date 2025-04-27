import AdicionarFormularioUniversal from "@/components/Formularios/AdicionarFormularioUniversal";
import { Loja } from "@/models/Loja";
import Page from "@/components/Templates/Page";

export default function Adicionar() {
    return (
        <Page>
            <div>
                <AdicionarFormularioUniversal entidade={Loja}/>
            </div>
        </Page>
    );
}