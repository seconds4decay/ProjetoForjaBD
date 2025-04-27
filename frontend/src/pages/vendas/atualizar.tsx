import AtualizarFormularioUniversal from "@/components/Formularios/AtualizarFormularioUniversal";
import { Venda } from "@/models/Venda";
import Page from "@/components/Templates/Page";
        
export default function Adicionar() {
    return (
        <Page>
            <div>
                <AtualizarFormularioUniversal entidade={Venda}/>
            </div>
        </Page>
    );
}