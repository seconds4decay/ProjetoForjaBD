import RemoverFormularioUniversal from "@/components/Formularios/RemoverFormularioUniversal";
import { Item } from "@/models/Item";
import Page from "@/components/Templates/Page";
        
export default function Adicionar() {
    return (
        <Page>
            <div>
                <RemoverFormularioUniversal entidade={Item} />
            </div>
        </Page>
    );
}