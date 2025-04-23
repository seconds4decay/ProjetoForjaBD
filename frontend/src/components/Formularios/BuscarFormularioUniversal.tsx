import { useState } from "react";
import { Props } from "@/components/Interfaces";
import ModelGet from "@/functions/ModelGet";

export default function FormularioBuscaUniversal({ entidade }: Props) {
  const [resultado, setResultado] = useState<any>(null);

  const [id, setId] = useState(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
        const response = await ModelGet(id.toString(), entidade.nome.toLowerCase());
        setResultado(response);

    } catch (error) {
        alert("Erro ao buscar " + entidade.nome.toLowerCase() + ".");
      
    }
  };

  return (
    <div className="flex flex-col gap-4 p-4 border rounded w-full max-w-md">
      <form onSubmit={handleSubmit}>
      <h2 className="text-xl font-bold">Deletar {entidade.nome}</h2>

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

      <button type="submit" className="bg-green-500 text-white p-2 rounded">
        Buscar
      </button>
    </form>

    {resultado && (
  <div className="bg-gray-100 p-4 rounded text-sm space-y-2">
    <p><strong>ID:</strong> {resultado.id}</p>
    <p><strong>Nome:</strong> {resultado.nome}</p>
    <p><strong>Especialização:</strong> {resultado.especializacao}</p>

    {resultado.gerente && (
      <p><strong>Gerente:</strong> {resultado.gerente.nome} (ID: {resultado.gerente.id})</p>
    )}

    {resultado.loja && (
      <p><strong>Loja:</strong> {resultado.loja.nome} (ID: {resultado.loja.id})</p>
    )}
  </div>
)}
    </div>
  );
}
