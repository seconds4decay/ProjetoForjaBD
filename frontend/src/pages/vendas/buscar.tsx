import { Venda } from "@/models/Venda";
import BuscarFomularioVenda from "@/components/Formularios/BuscarFormularioVenda";
import Page from "@/components/Templates/Page";
        
export default function Adicionar() {
    return (
        <Page>
            <div>
                <BuscarFomularioVenda entidade={Venda} />
            </div>
        </Page>
    );
}