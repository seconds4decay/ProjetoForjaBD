import VisualizarModel from "@/components/Tabelas/visualizarModel";
import { Ferreiro } from "@/models/Ferreiro";
import Link from "next/link"

export default function Home() {
    return (
        <div>
            <h1>Ferreiro</h1>
            <div>
                <Link href="/crud/ferreiro/adicionar">Adicionar Ferreiro</Link>
                
                <Link href="/crud/ferreiro/remover">Remover Ferreiro</Link>

                <Link href="/crud/ferreiro/atualizar">Atualizar Ferreiro</Link>

                <Link href="/crud/ferreiro/buscar">Buscar Ferreiro</Link>
            </div>

            <VisualizarModel entidade={Ferreiro} />
        </div>
    );
}