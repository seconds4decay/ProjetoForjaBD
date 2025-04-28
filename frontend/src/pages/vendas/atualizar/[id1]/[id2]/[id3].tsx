import AtualizarFormularioUniversal from "@/components/Formularios/AtualizarFormularioUniversal";
import Page from "@/components/Templates/Page";
import { useRouter } from 'next/router';
import { Venda } from "@/models/Venda";
        
export default function Adicionar() {
    const id = useRouter().query.id1 + "/" + useRouter().query.id2 + "/" + useRouter().query.id3;


    return (
        <Page>
            <div>
                <AtualizarFormularioUniversal entidade={Venda} id={id?.toString()} />
            </div>
        </Page>
    );
}