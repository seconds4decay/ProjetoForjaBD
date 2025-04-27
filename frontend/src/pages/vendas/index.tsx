import ModelPage from "@/components/Templates/ModelPage";
import { Venda } from "@/models/Venda";

export default function Home() {
    return (
        <ModelPage title="Vendas" href="vendas" model={Venda} />
    );
}