import VisualizarModel from "@/components/Tabelas/visualizarModel";
import { Venda } from "@/models/Venda";
import Link from "next/link"

export default function Home() {
    return (
        <div>
            <h1>Venda</h1>
            <Link href="/crud/venda/adicionar">Adicionar Venda</Link>
            
            <Link href="/crud/venda/remover">Remover Venda</Link>

            <Link href="/crud/venda/atualizar">Atualizar Venda</Link>

            <Link href="/crud/venda/buscar">Buscar Venda</Link>

            <VisualizarModel entidade={Venda}/>
        </div>
    );
}