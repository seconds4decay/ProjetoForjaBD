import { Venda } from "@/models/Venda";
import BuscarFomularioVenda from "@/components/Formularios/BuscarFormularioVenda";

export default function Buscar() {
    return (
        <div>
            <h1>Buscar Venda</h1>
            <BuscarFomularioVenda entidade={Venda} />
        </div>
    );
}