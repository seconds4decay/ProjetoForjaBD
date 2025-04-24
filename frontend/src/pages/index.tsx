import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>

      <ul>
        <li><Link href="/ferreiro/">Ferreiro</Link></li>
        <li><Link href="/loja/">Loja</Link></li>
        <li><Link href="/cliente/">Cliente</Link></li>
        <li><Link href="/item/">Item</Link></li>
        <li><Link href="/venda/">Venda</Link></li>
        <li><Link href="/fornecedor/">Fornecedor</Link></li>
        <li><Link href="/material/">Material</Link></li>
      </ul>
    </div>
  );
}
