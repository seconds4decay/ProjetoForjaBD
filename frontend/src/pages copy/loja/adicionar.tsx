import AdicionarFormularioUniversal from "@/components/Formularios/AdicionarFormularioUniversal";
import { Loja } from "@/models/Loja";

export default function Adicionar() {
    return (
        <div>
            <h1>Adicionar Loja</h1>
            <AdicionarFormularioUniversal entidade={Loja}/>
        </div>
    );
}