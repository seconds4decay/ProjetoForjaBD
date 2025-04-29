import BuscarFomularioVenda from "@/components/Formularios/BuscarFormularioVenda";
import Page from "@/components/Templates/Page";
import { Pedido } from "@/models/Pedido";
        
export default function Adicionar() {
    return (
        <Page>
            <div>
                <BuscarFomularioVenda entidade={Pedido} />
            </div>
        </Page>
    );
}