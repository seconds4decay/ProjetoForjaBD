import VisualizarModel from "@/components/Tabelas/visualizarModel";
import { Venda } from "@/models/Venda";
import Link from "next/link"
import Topbar from "@/components/Pages/topbar";

export default function Home() {
    return (
        <div>
            <Topbar/>
            <h1>Venda</h1>
            <Link href="/venda/adicionar">Adicionar Venda</Link>
            
            <Link href="/venda/remover">Remover Venda</Link>

            <Link href="/venda/atualizar">Atualizar Venda</Link>

            <Link href="/venda/buscar">Buscar Venda</Link>

            <VisualizarModel entidade={Venda}/>
        </div>
    );
}