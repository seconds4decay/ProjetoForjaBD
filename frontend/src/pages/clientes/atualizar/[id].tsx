import AtualizarFormularioUniversal from "@/components/Formularios/AtualizarFormularioUniversal";
import { Cliente } from "@/models/Cliente";
import Page from "@/components/Templates/Page";
import { useRouter } from 'next/router';
        
export default function Adicionar() {
    const id = useRouter().query.id;

    return (
        <Page>
            <div>
                <AtualizarFormularioUniversal entidade={Cliente} id={id?.toString()} />
            </div>
        </Page>
    );
}