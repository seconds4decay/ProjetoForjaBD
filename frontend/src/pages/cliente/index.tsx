import VisualizarModel from "@/components/Tabelas/visualizarModel";
import { Cliente } from "@/models/Cliente";
import Link from "next/link"
import Topbar from "@/components/Pages/topbar";

export default function Home() {
    return (
        <div>
            <Topbar/>
            <h1>Cliente</h1>
            <Link href="/cliente/adicionar">Adicionar Cliente</Link>
            
            <Link href="/cliente/remover">Remover Cliente</Link>

            <Link href="/cliente/atualizar">Atualizar Cliente</Link>

            <Link href="/cliente/buscar">Buscar Cliente</Link>

             <VisualizarModel entidade={Cliente} />
        </div>
    );
}