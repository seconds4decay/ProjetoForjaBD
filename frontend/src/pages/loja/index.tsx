import Link from "next/link"

export default function Loja() {
    return (
        <div>
            <h1>Loja</h1>
            <Link href="/loja/adicionar">Adicionar Loja</Link>
            
            <Link href="/loja/remover">Remover Loja</Link>
        
        </div>
    );
}