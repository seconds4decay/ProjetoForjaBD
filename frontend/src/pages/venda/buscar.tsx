import { Venda } from "@/models/Venda";
import BuscarFomularioUniversal from "@/components/Formularios/BuscarFormularioUniversal";

export default function Buscar() {
    return (
        <div>
            <h1>Buscar Venda</h1>
            <BuscarFomularioUniversal entidade={Venda} />
        </div>
    );
}