import ModelPage from "@/components/Templates/ModelPage";
import { Arma } from "@/models/Arma";

export default function Home() {
    return (
        <ModelPage title="Armas" href="armas" model={Arma}/>
    );
}