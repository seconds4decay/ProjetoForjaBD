import { useState } from "react";
import ModelDelete from "@/functions/ModelDelete";

export default function RemoverLojaForm() {
    const [id, setId] = useState(0);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        try {
            const response = await ModelDelete(id, "loja");
            if (!response) {
                alert("Erro ao remover loja.");
                return;
            }
            setId(0); 
            alert("Loja removida com sucesso!");
        } catch (error) {
            console.error("Erro ao remover loja:", error);
            alert("Erro ao remover loja.");
        }
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="id"
                placeholder="ID da Loja"
                value={id}
                onChange={(e) => setId(Number(e.target.value))}
                required
            />
            <button type="submit">Remover</button>
        </form>
    );
    
}