import AtualizarFormularioUniversal from "@/components/Formularios/AtualizarFormularioUniversal";
import { Loja } from "@/models/Loja";


export default function Atualizar() {
    return (
        <div>
            <h1>Atualizar Loja</h1>
            <AtualizarFormularioUniversal entidade={Loja}/>
        </div>
    );
}