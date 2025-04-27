import RemoverFormularioUniversal from "@/components/Formularios/RemoverFormularioUniversal";
import { Armadura } from "@/models/Armadura";
import Page from "@/components/Templates/Page";
        
export default function Adicionar() {
    return (
        <Page>
            <div>
                <RemoverFormularioUniversal entidade={Armadura} />
            </div>
        </Page>
    );
}