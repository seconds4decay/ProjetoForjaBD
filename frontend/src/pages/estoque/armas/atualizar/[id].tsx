import AtualizarFormularioUniversal from "@/components/Formularios/AtualizarFormularioUniversal";
import Page from "@/components/Templates/Page";
import { useRouter } from 'next/router';
import { Arma } from "@/models/Arma";
        
export default function Adicionar() {
    const id = useRouter().query.id;

    return (
        <Page>
            <div>
                <AtualizarFormularioUniversal entidade={Arma} id={id?.toString()} />
            </div>
        </Page>
    );
}