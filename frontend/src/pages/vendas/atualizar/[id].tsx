import AtualizarFormularioUniversal from "@/components/Formularios/AtualizarFormularioUniversal";
import Page from "@/components/Templates/Page";
import { useRouter } from 'next/router';
import { Venda } from "@/models/Venda";
        
export default function Adicionar() {
    const id = useRouter().query.id;

    return (
        <Page>
            <div>
                <AtualizarFormularioUniversal entidade={Venda} id={id?.toString()} />
            </div>
        </Page>
    );
}