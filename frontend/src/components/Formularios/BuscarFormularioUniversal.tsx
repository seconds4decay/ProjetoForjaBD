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
    <div className="p-6 shadow-md text-sm space-y-4 border-[var(--bordercolor)] border-[1px] rounded-[var(--borderradius)] mt-5">
      <div className="flex items-center gap-2 mb-4">
        <strong className="text-lg">Resultado</strong>
      </div>

      {Object.entries(resultado).map(([chave, valor]) => {
        const isObjeto = valor && typeof valor === 'object';

        return (
          <div
            key={chave}
            className="flex flex-col sm:flex-row sm:items-center justify-between bg-[var(--background2)]-50 border border-[var(--bordercolor)]-200 rounded-lg px-4 py-3 hover:shadow-sm transition-shadow"
          >
            <span className="text-gray-500 font-medium">{capitalize(chave)}</span>

            <span className="text-gray-800 font-semibold mt-1 sm:mt-0 text-right">
              {isObjeto
                ? valor.nome
                  ? `${valor.nome}${valor.id !== undefined ? ` (ID: ${valor.id})` : ''}`
                  : '[objeto]'
                : valor?.toString()}
            </span>
          </div>
        );
      })}
    </div>
  );
}


  return (
    <div className="flex flex-col">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4 bg-[var(--background2)] border-[var(--bordercolor)] border-[1px] rounded-[var(--borderradius)]  min-w-[50vh] max-w-[50vh]">
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