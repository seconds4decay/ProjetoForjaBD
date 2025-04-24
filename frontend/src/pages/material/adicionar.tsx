import AdicionarFormularioUniversal from "@/components/Formularios/AdicionarFormularioUniversal";
import { Material } from "@/models/Material";

export default function Adicionar() {
    return (
        <div>
            <h1>Adicionar Material</h1>
            <AdicionarFormularioUniversal entidade={Material}/>
        </div>
    );
}