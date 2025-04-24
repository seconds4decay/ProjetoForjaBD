import VisualizarModel from "@/components/Tabelas/visualizarModel";
import { Fornecedor } from "@/models/Fornecedor";
import Link from "next/link"

export default function Home() {
    return (
        <div>
            <h1>Fornecedor</h1>
            <Link href="/fornecedor/adicionar">Adicionar Fornecedor</Link>
            
            <Link href="/fornecedor/remover">Remover Fornecedor</Link>

            <Link href="/fornecedor/atualizar">Atualizar Fornecedor</Link>

            <Link href="/fornecedor/buscar">Buscar Fornecedor</Link>

            <VisualizarModel entidade={Fornecedor}/>
        </div>
    );
}