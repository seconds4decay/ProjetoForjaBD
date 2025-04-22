import Link from "next/link"

export default function Ferreiro() {
    return (
        <div>
            <h1>Ferreiro</h1>
            <Link href="/ferreiro/adicionar">Adicionar Ferreiro</Link>
            
            <Link href="/ferreiro/remover">Remover Ferreiro</Link>
        
        </div>
    );
}