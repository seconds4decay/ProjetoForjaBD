import ModelPost from "@/functions/ModelPost";
import { useEffect, useState } from "react";
import { Atributo, Props } from "@/components/Interfaces";
import { capitalize } from "@/functions/Capitalize";
import { useRouter } from "next/router";
import AutoCompleteInput from "./AutocompleteInput";
import { useFetchModels } from "@/hooks/UseFetchModel";

export default function AdicionarFormularioUniversal({ entidade }: Props) {
  const [formData, setFormData] = useState<{ [key: string]: any }>({});
  const router = useRouter();
  const data = useFetchModels(entidade.nome, entidade.atributos);

  // FUNCTIONS

  function renderCampo(atributo: Atributo, required: boolean = false) {
    const { nome, tipo } = atributo;

    switch (tipo) {
      case "string":
        return <input type="text" name={nome} onChange={handleChange}  className="border p-1" />;
      case "number":
        return <input type="number" name={nome} onChange={handleChange} className="border p-1" />;
      case "foreign":
        return (
          <AutoCompleteInput data={data.referencias?.[nome] || []} onSelect={(item) => handleNomeSelecionado(nome, item)} required={required}/>
        );
      case "date":
        return <></>
      default:
        return <input type="text" name={nome} onChange={handleChange} className="border p-1" />;
    }
  };

  // HANDLERS 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "number" ? Number(value) : value,
    }));
  };

  const handleNomeSelecionado = (atributoNome: string, item: any) => {
    setFormData((prev) => ({ ...prev, [atributoNome]: item.id }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

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

    console.log(payload)

    try {
        const response = await ModelPost(payload, entidade.nome.toLowerCase())
        console.log(response)

        alert(capitalize(entidade.nome) + " adicionado com sucesso!")
        router.back()
    } catch (error) {
        console.error("Erro ao adicionar " + entidade.nome.toLowerCase() + ":", error)
        alert("Erro ao adicionar " + entidade.nome.toLowerCase() + ".")
    }
  };

  return (
    <form onSubmit={handleSubmit} className="shadow-lg shadow-gray-500/50 flex flex-col gap-4 p-4 border border-[var(--bordercolor)] rounded  min-w-[50vh] max-w-[50vh] overflow-y-auto">
      <h2 className="text-xl font-bold">Adicionar {capitalize(entidade.nome)}</h2>

      {entidade.atributos.map((attr) => (
        <label key={attr.nome} className="flex flex-col gap-1">
          {!(attr.nome.includes("data")) && capitalize(attr.nome)}
          {!(attr.nome.includes("data")) && renderCampo(attr)}
        </label>
      ))}

      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Enviar
      </button>
    </form>
  );
}
