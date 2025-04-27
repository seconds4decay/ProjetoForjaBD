import RemoverFormularioUniversal from "@/components/Formularios/RemoverFormularioUniversal";
import { Loja } from "@/models/Loja";
import Page from "@/components/Templates/Page";
        
export default function Adicionar() {
    return (
        <Page>
            <div>
                <RemoverFormularioUniversal entidade={Loja} />
            </div>
        </Page>
    );
}