import Link from "next/link";

export default function Home() {
  return (
    <div>

      <h1>CRUDs</h1>
      <div>
        <Link href="/crud/ferreiro/">Ferreiro</Link>
        <Link href="/crud/fornecedor/">Fornecedor</Link>
        <Link href="/crud/item/">Item</Link>
        <Link href="/crud/loja/">Loja</Link>
        <Link href="/crud/material/">Material</Link>
        <Link href="/crud/cliente/">Cliente</Link>
        <Link href="/crud/venda/">Venda</Link>
    
      </div>
    </div>  
  );
}
