import ModelPost from "@/functions/ModelPost";
import { useState } from "react";

interface Atributo {
  nome: string;
  tipo: string;
}

interface Entidade {
  nome: string;
  atributos: Atributo[];
}

interface Props {
  entidade: Entidade;
}

export default function AdicionarFormularioUniversal({ entidade }: Props) {
  const [formData, setFormData] = useState<{ [key: string]: any }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
        const response = await ModelPost(formData, entidade.nome.toLowerCase())
        console.log(response)
        
        setFormData({
            nome: '',  
            especializacao: '',
        })

        alert(entidade.nome.toLowerCase() + " adicionado com sucesso!")
    } catch (error) {
        console.error("Erro ao adicionar " + entidade.nome.toLowerCase() + ":", error)
        alert("Erro ao adicionar " + entidade.nome.toLowerCase() + ".")
    }
  };

  const renderCampo = (atributo: Atributo) => {
    const { nome, tipo } = atributo;

    switch (tipo) {
      case "string":
        return <input type="text" name={nome} onChange={handleChange} className="border p-1" />;
      case "number":
        return <input type="number" name={nome} onChange={handleChange} className="border p-1" />;
      case "boolean":
        return (
          <select name={nome} onChange={handleChange} className="border p-1">
            <option value="">Selecione</option>
            <option value="true">Verdadeiro</option>
            <option value="false">Falso</option>
          </select>
        );
      default:
        return <input type="text" name={nome} onChange={handleChange} className="border p-1" />;
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4 border rounded w-full max-w-md">
      <h2 className="text-xl font-bold">Formulário: {entidade.nome}</h2>

      {entidade.atributos.map((attr) => (
        <label key={attr.nome} className="flex flex-col gap-1">
          {attr.nome}
          {renderCampo(attr)}
        </label>
      ))}

      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Enviar
      </button>
    </form>
  );
}
