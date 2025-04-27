import ModelPage from "@/components/Templates/ModelPage";
import { Ferreiro } from "@/models/Ferreiro";

export default function Home() {
    return (
        <ModelPage title="Ferreiros" href="ferreiros" model={Ferreiro}/>
    );
}