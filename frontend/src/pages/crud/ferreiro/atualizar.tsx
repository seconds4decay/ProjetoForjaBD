import AtualizarFormularioUniversal from "@/components/Formularios/AtualizarFormularioUniversal";
import { Ferreiro } from "@/models/Ferreiro";


export default function Atualizar() {
    return (
        <div>
            <h1>Atualizar Ferreiro</h1>
            <AtualizarFormularioUniversal entidade={Ferreiro}/>
        </div>
    );
}