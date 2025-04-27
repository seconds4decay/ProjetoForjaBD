import { Material } from "@/models/Material";
import BuscarFomularioUniversal from "@/components/Formularios/BuscarFormularioUniversal";
import Page from "@/components/Templates/Page";
        
export default function Adicionar() {
    return (
        <Page>
            <div>
                <BuscarFomularioUniversal entidade={Material} />
            </div>
        </Page>
    );
}