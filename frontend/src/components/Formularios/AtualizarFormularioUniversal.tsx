import ModelPut from "@/functions/ModelPut";
import { useState } from "react";
import { Props } from "@/components/Interfaces";
import { capitalize } from "@/functions/Capitalize";

export default function FormularioAtualizacaoUniversal({ entidade }: Props) {
  const [id, setId] = useState("");
  const [formData, setFormData] = useState<{ [key: string]: any }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!id) {
      alert("Informe o ID do item a ser atualizado.");
      return;
    }

    const payload: { [key: string]: any } = {};

    entidade.atributos.forEach((attr) => {
      if (attr.tipo === "foreign") {
        if(!formData[attr.nome]) {
          payload[attr.nome] = null;  
        } else {
          payload[attr.nome] = { id: Number(formData[attr.nome]) };
        }
      } else {
        payload[attr.nome] = formData[attr.nome];
      }
    });

    console.log(payload);

    try {
        const response = await ModelPut(id, payload, entidade.nome.toLowerCase())
        console.log(response)

        if (response.status === 200) {
            alert(entidade.nome.toLowerCase() + " atualizado com sucesso.")
        }
    } catch (error) {
        console.error("Erro ao atualizar " + entidade.nome.toLowerCase() + ":", error)
        alert("Erro ao atualizar " + entidade.nome.toLowerCase() + ".")
    }


  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4 border rounded w-full max-w-md">
      <h2 className="text-xl font-bold">Atualizar {capitalize(entidade.nome)}</h2>

      <label className="flex flex-col gap-1">
        ID do item
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} className="border p-1" />
      </label>

      {entidade.atributos.map((attr) => (
        <label key={attr.nome} className="flex flex-col gap-1">
          {attr.nome}
          <input
            type="text"
            name={attr.nome}
            onChange={handleChange}
            className="border p-1"
            placeholder={attr.tipo === "foreign" ? `ID de ${attr.referencia}` : ""}
          />
        </label>
      ))}

      <button type="submit" className="bg-yellow-500 text-white p-2 rounded">
        Atualizar
      </button>
    </form>
  );
}
