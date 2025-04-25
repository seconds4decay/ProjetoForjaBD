import AdicionarFormularioUniversal from "@/components/Formularios/AdicionarFormularioUniversal";
import { Venda } from "@/models/Venda";

export default function Adicionar() {
    return (
        <div>
            <h1>Adicionar Venda</h1>
            <AdicionarFormularioUniversal entidade={Venda}/>
        </div>
    );
}