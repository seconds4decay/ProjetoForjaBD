import { useState } from "react";
import { Props } from "@/components/Interfaces";
import ModelDelete from "@/functions/ModelDelete";

export default function RemoverFormularioVenda({ entidade }: Props) {
  const [formData, setFormData] = useState({
    loja: 0,
    item: 0,
    cliente: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: Number(value) }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const query = `${formData.loja}/${formData.item}/${formData.cliente}`

    try {
        const response = await ModelDelete(query, entidade.nome.toLowerCase());
        
        if (!response) {
            return;
        }
        
        alert(entidade.nome.toLowerCase() + " removido com sucesso!");
        
        setFormData({
            loja: 0,
            item: 0,
            cliente: 0,
        });

    } catch (error) {
        alert("Erro ao buscar " + entidade.nome.toLowerCase() + ".");
      
    }
  };

  return (
    <div className="flex flex-col gap-4 p-4 border rounded w-full max-w-md">
      <form onSubmit={handleSubmit}>
      <h2 className="text-xl font-bold">Deletar {entidade.nome.toUpperCase()}</h2>

      <label className="flex flex-col gap-1">
        ID Loja
        <input
          type="number"
          name="loja"
          value={formData.loja}
          onChange={handleChange}
          className="border p-1"
          placeholder="Digite o ID"
        />
      </label>

      <label className="flex flex-col gap-1">
        ID Item
        <input
          type="number"
          name="item"
          value={formData.item}
          onChange={handleChange}
          className="border p-1"
          placeholder="Digite o ID "
        />
      </label>

      <label className="flex flex-col gap-1">
        ID Cliente
        <input 
          type="number"
          name="cliente"
          value={formData.cliente}
          onChange={handleChange}
          className="border p-1"
          placeholder="Digite o ID"
        />
      </label>

      <button type="submit" className="bg-red-500 text-white p-2 rounded">
        Deletar
      </button>
    </form>

    </div>
  );
}