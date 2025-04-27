import AdicionarFormularioUniversal from "@/components/Formularios/AdicionarFormularioUniversal";
import { Item } from "@/models/Item";
import Page from "@/components/Templates/Page";

export default function Adicionar() {
    return (
        <Page>
            <div>
                <AdicionarFormularioUniversal entidade={Item}/>
            </div>
        </Page>
    );
}