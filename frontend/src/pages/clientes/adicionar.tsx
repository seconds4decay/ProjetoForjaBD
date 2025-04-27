import AdicionarFormularioUniversal from "@/components/Formularios/AdicionarFormularioUniversal";
import Page from "@/components/Templates/Page";
import { Cliente } from "@/models/Cliente";


export default function Adicionar() {
    return (
        <Page>
            <div>
                <AdicionarFormularioUniversal entidade={Cliente}/>
            </div>
        </Page>
    );
}