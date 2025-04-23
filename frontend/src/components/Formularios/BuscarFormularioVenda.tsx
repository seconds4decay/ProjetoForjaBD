import { useState } from "react";
import { Props } from "@/components/Interfaces";
import ModelGet from "@/functions/ModelGet";

export default function BuscarFomularioVenda({ entidade }: Props) {
  const [resultado, setResultado] = useState<any>(null);
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


        const response = await ModelGet(query, entidade.nome.toLowerCase());
        
        if(response.status === 404) {
          alert("Venda não encontrada."); 
          return;
        }

        setResultado(response);

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
    <div className="flex flex-col gap-4 p-4 border rounded w-full max-w-md">
      <form onSubmit={handleSubmit}>
      <h2 className="text-xl font-bold">Buscar {entidade.nome.toUpperCase()}</h2>

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

      <button type="submit" className="bg-green-500 text-white p-2 rounded">
        Buscar
      </button>
    </form>

    {resultado && renderResultado(resultado)}
    </div>
  );
}