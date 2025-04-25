import VisualizarModel from "@/components/Tabelas/visualizarModel";
import { Material } from "@/models/Material";
import Link from "next/link"

export default function Home() {
    return (
        <div>
            <h1>Material</h1>
            <Link href="/crud/material/adicionar">Adicionar Material</Link>
            
            <Link href="/crud/material/remover">Remover Material</Link>

            <Link href="/crud/material/atualizar">Atualizar Material</Link>

            <Link href="/crud/material/buscar">Buscar Material</Link>

            <VisualizarModel entidade={Material}/>
        </div>
    );
}