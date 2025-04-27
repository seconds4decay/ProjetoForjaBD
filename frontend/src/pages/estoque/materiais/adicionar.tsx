import AdicionarFormularioUniversal from "@/components/Formularios/AdicionarFormularioUniversal";
import { Material } from "@/models/Material";
import Page from "@/components/Templates/Page";

export default function Adicionar() {
    return (
        <Page>
            <div>
                <AdicionarFormularioUniversal entidade={Material}/>
            </div>
        </Page>
    );
}