import AtualizarFormularioUniversal from "@/components/Formularios/AtualizarFormularioUniversal";
import Page from "@/components/Templates/Page";
import { useRouter } from 'next/router';
import { Pedido } from "@/models/Pedido";
        
export default function Adicionar() {
    const id = useRouter().query.id

    return (
        <Page>
            <div>
                <AtualizarFormularioUniversal entidade={Pedido} id={id?.toString()} />
            </div>
        </Page>
    );
}