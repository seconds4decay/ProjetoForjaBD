import { Loja } from "@/models/Loja";
import BuscarFomularioUniversal from "@/components/Formularios/BuscarFormularioUniversal";
import Page from "@/components/Templates/Page";
        
export default function Adicionar() {
    return (
        <Page>
            <div>
                <BuscarFomularioUniversal entidade={Loja} />
            </div>
        </Page>
    );
}