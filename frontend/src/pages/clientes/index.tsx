import ModelPage from "@/components/Templates/ModelPage";
import { Cliente } from "@/models/Cliente";

export default function Home() {
    return (
        <ModelPage title="Clientes" href="clientes" model={Cliente}/>
    );
}