import VisualizarModel from "@/components/Tabelas/visualizarModel";
import { Ferreiro } from "@/models/Ferreiro";
import Link from "next/link"
import Topbar from "@/components/Pages/topbar";
import Card from "@/components/Pages/Card";

export default function Home() {
    return (
        <div>
            <Topbar/>
            <h1>Ferreiro</h1>
            <div className="flex flex-wrap justify-center">
                <Link href="/ferreiro/adicionar"><Card>Adicionar Ferreiro</Card></Link>
                
                <Link href="/ferreiro/remover"><Card>Remover Ferreiro</Card></Link>

                <Link href="/ferreiro/atualizar"><Card>Atualizar Ferreiro</Card></Link>

                <Link href="/ferreiro/buscar"><Card>Buscar Ferreiro</Card></Link>
            </div>
            
z
            <VisualizarModel entidade={Ferreiro} />
        </div>
    );
}