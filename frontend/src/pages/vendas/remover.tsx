import RemoverFormularioVenda from "@/components/Formularios/RemoverFormularioVenda";
import { Venda } from "@/models/Venda";
import Page from "@/components/Templates/Page";
        
export default function Adicionar() {
    return (
        <Page>
            <div>
                <RemoverFormularioVenda entidade={Venda} />
            </div>
        </Page>
    );
}