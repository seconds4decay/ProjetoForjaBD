import { useState } from "react";
import ModelPost from "@/functions/ModelPost";

export default function AdicionarLojaForm() {

    const [formData, setFormData] = useState({
        nome: '',
        cidade: '',
        rua: ''
    });

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
            const { name, value } = e.target
            setFormData((prev) => ({ ...prev, [name]: value }))
        }
    
    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        try {
            const response = await ModelPost(formData, "loja")
            console.log(response)
            
            setFormData({
                nome: '',  
                cidade: '',
                rua: ''
            })

            alert("Loja adicionada com sucesso!")
        } catch (error) {
            console.error("Erro ao adicionar loja:", error)
            alert("Erro ao adicionar loja.")
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
                name="cidade"
                placeholder="Cidade"
                value={formData.cidade}
                onChange={handleChange}
                required
            />
            <input 
                type="text"
                name="rua"
                placeholder="Rua"
                value={formData.rua}
                onChange={handleChange}
                required
            />
            <button type="submit">Adicionar</button>
        </form>
    );
}