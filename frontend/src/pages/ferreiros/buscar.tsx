import { Ferreiro } from "@/models/Ferreiro";
import BuscarFomularioUniversal from "@/components/Formularios/BuscarFormularioUniversal";
import Page from "@/components/Templates/Page";
        
export default function Adicionar() {
    return (
        <Page>
            <div>
                <BuscarFomularioUniversal entidade={Ferreiro} />
            </div>
        </Page>
    );
}