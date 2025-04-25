import VisualizarModel from "@/components/Tabelas/visualizarModel";
import { Fornecedor } from "@/models/Fornecedor";
import Link from "next/link"

export default function Home() {
    return (
        <div>
            <h1>Fornecedor</h1>
            <Link href="/crud/fornecedor/adicionar">Adicionar Fornecedor</Link>
            
            <Link href="/crud/fornecedor/remover">Remover Fornecedor</Link>

            <Link href="/crud/fornecedor/atualizar">Atualizar Fornecedor</Link>

            <Link href="/crud/fornecedor/buscar">Buscar Fornecedor</Link>

            <VisualizarModel entidade={Fornecedor}/>
        </div>
    );
}