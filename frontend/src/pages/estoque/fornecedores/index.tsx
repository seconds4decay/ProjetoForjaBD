import ModelPage from "@/components/Templates/ModelPage";
import { Fornecedor } from "@/models/Fornecedor";

export default function Home() {
    return (
        <ModelPage title="Fornecedores" href="/estoque/fornecedores" model={Fornecedor}/>
    );
}