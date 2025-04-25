import { Ferreiro } from "@/models/Ferreiro";
import BuscarFomularioUniversal from "@/components/Formularios/BuscarFormularioUniversal";

export default function Buscar() {
    return (
        <div>
            <h1>Buscar Ferreiro</h1>
            <BuscarFomularioUniversal entidade={Ferreiro} />
        </div>
    );
}