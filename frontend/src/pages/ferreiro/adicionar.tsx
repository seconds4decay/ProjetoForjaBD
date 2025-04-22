//import AdicionarFerreiroForm from "@/components/Ferreiro/AdicionarFerreiroForm";
//<AdicionarFerreiroForm />

import AdicionarFormularioUniversal from "@/components/Formularios/AdicionarFormularioUniversal";
import { Ferreiro } from "@/models/Ferreiro";

export default function AdicionarFerreiro() {
    return (
        <div>
            <h1>Adicionar Ferreiro</h1>
            <AdicionarFormularioUniversal entidade={Ferreiro}/>
        </div>
    );
}