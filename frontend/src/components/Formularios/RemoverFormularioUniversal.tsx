import ModelDelete from "@/functions/ModelDelete";
import { useState } from "react";
import { Props } from "@/components/Interfaces";
import { capitalize } from "@/functions/Capitalize";
import { useRouter } from "next/router";

export default function FormularioDeleteUniversal({ entidade }: Props) {
  const [id, setId] = useState(0);

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
        const response = await ModelDelete(id, entidade.nome.toLowerCase());
        if (!response) {
            return;
        }
        setId(0); 
        alert(entidade.nome.toLowerCase() + " removido com sucesso!");
        router.back(); // Volta para a página anterior após a remoção
    } catch (error) {
        console.error("Erro ao remover " + entidade.nome.toLowerCase() + ":", error);
        alert("Erro ao remover" + entidade.nome.toLowerCase() + ".");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4 border rounded w-full max-w-md">
      <h2 className="text-xl font-bold">Deletar {capitalize(entidade.nome)}</h2>

      <label className="flex flex-col gap-1">
        ID
        <input
          type="text"
          name="id"
          value={id}
          onChange={(e) => setId(Number(e.target.value))}
          className="border p-1"
          placeholder="Digite o ID a deletar"
        />
      </label>

      <button type="submit" className="bg-red-500 text-white p-2 rounded">
        Deletar
      </button>
    </form>
  );
}
