import AtualizarFormularioUniversal from "@/components/Formularios/AtualizarFormularioUniversal";
import { Material } from "@/models/Material";


export default function Atualizar() {
    return (
        <div>
            <h1>Atualizar Material</h1>
            <AtualizarFormularioUniversal entidade={Material}/>
        </div>
    );
}