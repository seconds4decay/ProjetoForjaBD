import FormularioBuscaUniversal from "@/components/Formularios/BuscarFormularioUniversal";
import Page from "@/components/Templates/Page";
import { Pedido } from "@/models/Pedido";
        
export default function Adicionar() {
    return (
        <Page>
            <div>
                <FormularioBuscaUniversal entidade={Pedido} />
            </div>
        </Page>
    );
}