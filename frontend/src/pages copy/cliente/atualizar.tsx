import AtualizarFormularioUniversal from "@/components/Formularios/AtualizarFormularioUniversal";
import { Cliente } from "@/models/Cliente";


export default function Atualizar() {
    return (
        <div>
            <h1>Atualizar Cliente</h1>
            <AtualizarFormularioUniversal entidade={Cliente}/>
        </div>
    );
}