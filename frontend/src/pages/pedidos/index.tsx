import ModelPage from "@/components/Templates/ModelPage";
import { Pedido } from "@/models/Pedido";

export default function Home() {
    return (
        <ModelPage title="Pedidos" href="pedidos" model={Pedido} />
    );
}