import RemoverFormularioUniversal from "@/components/Formularios/RemoverFormularioUniversal";
import { Arma } from "@/models/Arma";
import Page from "@/components/Templates/Page";
        
export default function Adicionar() {
    return (
        <Page>
            <div>
                <RemoverFormularioUniversal entidade={Arma} />
            </div>
        </Page>
    );
}