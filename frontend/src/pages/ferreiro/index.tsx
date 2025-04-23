import VisualizarModel from "@/components/Tabelas/visualizarModel";
import { Ferreiro } from "@/models/Ferreiro";
import Link from "next/link"

export default function Home() {
    return (
        <div>
            <h1>Ferreiro</h1>
            <Link href="/ferreiro/adicionar">Adicionar Ferreiro</Link>
            
            <Link href="/ferreiro/remover">Remover Ferreiro</Link>

            <Link href="/ferreiro/atualizar">Atualizar Ferreiro</Link>

            <Link href="/ferreiro/buscar">Buscar Ferreiro</Link>

            <VisualizarModel entidade={Ferreiro} />
        </div>
    );
}