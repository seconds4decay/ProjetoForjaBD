import VisualizarModel from "@/components/Tabelas/visualizarModel";
import { Material } from "@/models/Material";
import Link from "next/link"
import Topbar from "@/components/Pages/topbar";

export default function Home() {
    return (
        <div>
            <Topbar/>
            <h1>Material</h1>
            <Link href="/material/adicionar">Adicionar Material</Link>
            
            <Link href="/material/remover">Remover Material</Link>

            <Link href="/material/atualizar">Atualizar Material</Link>

            <Link href="/material/buscar">Buscar Material</Link>

            <VisualizarModel entidade={Material}/>
        </div>
    );
}