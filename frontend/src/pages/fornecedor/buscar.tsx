import { Fornecedor } from "@/models/Fornecedor";
import BuscarFomularioUniversal from "@/components/Formularios/BuscarFormularioUniversal";

export default function Buscar() {
    return (
        <div>
            <h1>Buscar Fornecedor</h1>
            <BuscarFomularioUniversal entidade={Fornecedor} />
        </div>
    );
}