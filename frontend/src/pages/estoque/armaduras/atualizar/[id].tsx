import AtualizarFormularioUniversal from "@/components/Formularios/AtualizarFormularioUniversal";
import { Armadura } from "@/models/Armadura";
import Page from "@/components/Templates/Page";
import { useRouter } from 'next/router';
        
export default function Adicionar() {
    const id = useRouter().query.id;

    return (
        <Page>
            <div>
                <AtualizarFormularioUniversal entidade={Armadura} id={id?.toString()} />
            </div>
        </Page>
    );
}