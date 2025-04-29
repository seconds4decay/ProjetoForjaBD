import AdicionarFormularioUniversal from "@/components/Formularios/AdicionarFormularioUniversal";
import Page from "@/components/Templates/Page";
import { Pedido } from "@/models/Pedido";

export default function Adicionar() {
    return (
        <Page>
            <div>
                <AdicionarFormularioUniversal entidade={Pedido}/>
            </div>
        </Page>
    );
}