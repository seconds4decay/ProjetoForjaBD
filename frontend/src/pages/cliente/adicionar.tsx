import AdicionarFormularioUniversal from "@/components/Formularios/AdicionarFormularioUniversal";
import { Cliente } from "@/models/Cliente";

export default function Adicionar() {
    return (
        <div>
            <h1>Adicionar Cliente</h1>
            <AdicionarFormularioUniversal entidade={Cliente}/>
        </div>
    );
}