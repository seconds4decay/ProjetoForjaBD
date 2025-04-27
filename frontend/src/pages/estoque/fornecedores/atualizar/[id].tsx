import AtualizarFormularioUniversal from "@/components/Formularios/AtualizarFormularioUniversal";
import Page from "@/components/Templates/Page";
import { useRouter } from 'next/router';
import { Fornecedor } from "@/models/Fornecedor";
        
export default function Adicionar() {
    const id = useRouter().query.id;

    return (
        <Page>
            <div>
                <AtualizarFormularioUniversal entidade={Fornecedor} id={id?.toString()} />
            </div>
        </Page>
    );
}