import AdicionarFormularioUniversal from "@/components/Formularios/AdicionarFormularioUniversal";
import { Venda } from "@/models/Venda";
import Page from "@/components/Templates/Page";

export default function Adicionar() {
    return (
        <Page>
            <div>
                <AdicionarFormularioUniversal entidade={Venda}/>
            </div>
        </Page>
    );
}