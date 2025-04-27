import ModelPage from "@/components/Templates/ModelPage";
import { Material } from "@/models/Material";

export default function Home() {
    return (
        <ModelPage title="Estoque de Material" href="/estoque/materiais" model={Material} />
    );
}