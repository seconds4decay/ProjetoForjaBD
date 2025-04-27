import RemoverFormularioUniversal from "@/components/Formularios/RemoverFormularioUniversal";
import { Ferreiro } from "@/models/Ferreiro";
import Page from "@/components/Templates/Page";
        
export default function Adicionar() {
    return (
        <Page>
            <div>
                <RemoverFormularioUniversal entidade={Ferreiro} />
            </div>
        </Page>
    );
}