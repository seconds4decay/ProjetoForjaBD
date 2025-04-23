import AtualizarFormularioUniversal from "@/components/Formularios/AtualizarFormularioUniversal";
import { Venda } from "@/models/Venda";


export default function Atualizar() {
    return (
        <div>
            <h1>Atualizar Venda</h1>
            <AtualizarFormularioUniversal entidade={Venda}/>
        </div>
    );
}