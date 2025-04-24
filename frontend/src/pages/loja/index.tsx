import VisualizarModel from "@/components/Tabelas/visualizarModel";
import { Loja } from "@/models/Loja";
import Link from "next/link"

export default function Home() {
    return (
        <div>
            <h1>Loja</h1>
            <Link href="/loja/adicionar">Adicionar Loja</Link>
            
            <Link href="/loja/remover">Remover Loja</Link>

            <Link href="/loja/atualizar">Atualizar Loja</Link>

            <Link href="/loja/buscar">Visualizar Loja</Link>

            <VisualizarModel entidade={Loja}/>
        
        </div>
    );
}