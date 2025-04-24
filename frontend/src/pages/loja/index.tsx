import VisualizarModel from "@/components/Tabelas/visualizarModel";
import { Loja } from "@/models/Loja";
import Link from "next/link"
import Topbar from "@/components/Pages/topbar";

export default function Home() {
    return (
        <div>
            <Topbar/>
            <h1>Loja</h1>
            <Link href="/loja/adicionar">Adicionar Loja</Link>
            
            <Link href="/loja/remover">Remover Loja</Link>

            <Link href="/loja/atualizar">Atualizar Loja</Link>

            <Link href="/loja/buscar">Visualizar Loja</Link>

            <VisualizarModel entidade={Loja}/>
        
        </div>
    );
}