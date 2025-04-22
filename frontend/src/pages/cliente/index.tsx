import Link from "next/link"

export default function Cliente() {
    return (
        <div>
            <h1>Cliente</h1>
            <Link href="/loja/adicionar">Adicionar Cliente</Link>
            
            <Link href="/loja/remover">Remover Cliente</Link>
        
        </div>
    );
}