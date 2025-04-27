import ModelPage from "@/components/Templates/ModelPage";
import { Armadura } from "@/models/Armadura";

export default function Home() {
    return (
        <ModelPage title="Armaduras" href="armaduras" model={Armadura}/>
    );
}