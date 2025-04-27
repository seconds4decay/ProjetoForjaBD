import AtualizarFormularioUniversal from "@/components/Formularios/AtualizarFormularioUniversal";
import Page from "@/components/Templates/Page";
import { useRouter } from 'next/router';
import { Loja } from "@/models/Loja";
        
export default function Adicionar() {
    const id = useRouter().query.id;

    return (
        <Page>
            <div>
                <AtualizarFormularioUniversal entidade={Loja} id={id?.toString()} />
            </div>
        </Page>
    );
}