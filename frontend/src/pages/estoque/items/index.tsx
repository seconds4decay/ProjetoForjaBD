import ModelPage from "@/components/Templates/ModelPage";
import { Item } from "@/models/Item";


export default function Home() {
    return (
        <ModelPage title="Estoque de Items" href="/estoque/items" model={Item}/>
    );
}