import Card from "@/components/Elements/Card";
import Page from "@/components/Templates/Page";

export default function Home() {
    return (
        <Page title="Estoque">
            <Card href="/estoque/armas">Armas</Card>
            <Card href="/estoque/armaduras">Armaduras</Card>
            <Card href="/estoque/materiais">Materiais</Card>
            <Card href="/estoque/fornecedores">Fornecedores</Card>
        </Page>
    );
}