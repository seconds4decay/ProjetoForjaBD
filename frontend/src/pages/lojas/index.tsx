import ModelPage from "@/components/Templates/ModelPage";
import { Loja } from "@/models/Loja";

export default function Home() {
    return (
        <ModelPage title="Lojas" href="lojas" model={Loja} />
    );
}