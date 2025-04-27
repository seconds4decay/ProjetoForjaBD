import { useState } from "react";
import { Props } from "@/components/Interfaces";
import ModelGet from "@/functions/ModelGet";
import { capitalize } from "@/functions/Capitalize";

export default function FormularioBuscaUniversal({ entidade }: Props) {
  const [resultado, setResultado] = useState<any>(null);

  const [id, setId] = useState(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await ModelGet(id.toString(), entidade.nome.toLowerCase());
      if(response.status === 404) {
          return;
      }

      setResultado(response);

    } catch (error) {
        alert("Erro ao buscar " + entidade.nome.toLowerCase() + ".");
      
    }
  };

  function renderResultado(resultado: any) {
    return (
      <div className="bg-gray-100 p-4 rounded text-sm space-y-2">
        <strong>Resultado:</strong>

        {Object.entries(resultado).map(([chave, valor]) => {
          if (valor && typeof valor === 'object') {
            return (
              <p key={chave}>
                <strong>{chave.toUpperCase()}:</strong>{' '}
                {valor.nome ? valor.nome : '[objeto]'}
                {valor.id !== undefined && ` (ID: ${valor.id})`}
              </p>
            );
          }

          return (
            <p key={chave}>
              <strong>{chave.toUpperCase()}:</strong> {valor?.toString()}
            </p>
          );
        })}
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4 border rounded  min-w-[50vh] max-w-[50vh]">
      <h2 className="text-xl font-bold">Buscar {capitalize(entidade.nome)}</h2>

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

    {resultado && renderResultado(resultado)}
    </div>
  );
}