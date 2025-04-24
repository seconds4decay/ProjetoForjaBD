import VisualizarModel from "@/components/Tabelas/visualizarModel";
import { Item } from "@/models/Item";
import Link from "next/link"

export default function Home() {
    return (
        <div>
            <h1>Item</h1>
            <Link href="/item/adicionar">Adicionar Item</Link>
            
            <Link href="/item/remover">Remover Item</Link>

            <Link href="/item/atualizar">Atualizar Item</Link>

            <Link href="/item/buscar">Buscar Item</Link>

            <VisualizarModel entidade={Item}/>
        </div>
    );
}