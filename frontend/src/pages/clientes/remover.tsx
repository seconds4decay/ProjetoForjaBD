import RemoverFormularioUniversal from "@/components/Formularios/RemoverFormularioUniversal";
import { Cliente } from "@/models/Cliente";
import Page from "@/components/Templates/Page";
        
export default function Adicionar() {
    return (
        <Page>
            <div>
                <RemoverFormularioUniversal entidade={Cliente} />
            </div>
        </Page>
    );
}