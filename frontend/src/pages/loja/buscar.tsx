import { Loja } from "@/models/Loja";
import BuscarFomularioUniversal from "@/components/Formularios/BuscarFormularioUniversal";

export default function Buscar() {
    return (
        <div>
            <h1>Buscar Loja</h1>
            <BuscarFomularioUniversal entidade={Loja} />
        </div>
    );
}