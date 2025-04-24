import Card from "@/components/Pages/Card";
import Topbar from "@/components/Pages/topbar";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Topbar/>

      <h1>CRUDs</h1>
      <div className="flex flex-wrap justify-center">
        <Link href="/ferreiro/"><Card>Ferreiro</Card></Link>
        <Link href="/fornecedor/"><Card>Fornecedor</Card></Link>
        <Link href="/item/"><Card>Item</Card></Link>
        <Link href="/loja/"><Card>Loja</Card></Link>
        <Link href="/material/"><Card>Material</Card></Link>
        <Link href="/cliente/"><Card>Cliente</Card></Link>
        <Link href="/venda/"><Card>Venda</Card></Link>

      </div>
    </div>
  );
}
