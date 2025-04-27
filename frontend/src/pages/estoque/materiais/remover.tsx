import RemoverFormularioUniversal from "@/components/Formularios/RemoverFormularioUniversal";
import { Material } from "@/models/Material";
import Page from "@/components/Templates/Page";
        
export default function Adicionar() {
    return (
        <Page>
            <div>
                <RemoverFormularioUniversal entidade={Material} />
            </div>
        </Page>
    );
}