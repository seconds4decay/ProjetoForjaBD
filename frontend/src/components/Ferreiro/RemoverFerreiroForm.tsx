import { useState } from "react";
import ModelDelete from "@/functions/ModelDelete";

export default function RemoverFerreiroForm() {
    const [id, setId] = useState(0);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        try {
            const response = await ModelDelete(id, "ferreiro");
            if (!response) {
                alert("Erro ao remover ferreiro.");
                return;
            }
            setId(0); 
            alert("Ferreiro removido com sucesso!");
        } catch (error) {
            console.error("Erro ao remover ferreiro:", error);
            alert("Erro ao remover ferreiro.");
        }
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="id"
                placeholder="ID do Ferreiro"
                value={id}
                onChange={(e) => setId(Number(e.target.value))}
                required
            />
            <button type="submit">Remover</button>
        </form>
    );
    
}