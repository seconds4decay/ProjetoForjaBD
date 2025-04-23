import RemoverFormularioVenda from "@/components/Formularios/RemoverFormularioVenda";
import { Venda } from "@/models/Venda";

export default function Remover() {
    return (
        <div>
            <h1>Remover Venda</h1>
            <RemoverFormularioVenda entidade={Venda} />
        </div>
    );
}