import { useState } from "react";
import ModelPost from "@/functions/ModelPost";

export default function AdicionarFerreiroForm() {

    const [formData, setFormData] = useState({
        nome: '',
        especializacao: '',
    });

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
            const { name, value } = e.target
            setFormData((prev) => ({ ...prev, [name]: value }))
        }
    
    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        try {
            const response = await ModelPost(formData, "ferreiro")
            console.log(response)
            
            setFormData({
                nome: '',  
                especializacao: '',
            })

            alert("Ferreiro adicionado com sucesso!")
        } catch (error) {
            console.error("Erro ao adicionar ferreiro:", error)
            alert("Erro ao adicionar ferreiro.")
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                name="nome"
                placeholder="Nome"
                value={formData.nome}
                onChange={handleChange}
                required
            />
            <input 
                type="text"
                name="especializacao"
                placeholder="Especialização"
                value={formData.especializacao}
                onChange={handleChange}
                required
            />
            <button type="submit">Enviar</button>
        </form>
    );
}