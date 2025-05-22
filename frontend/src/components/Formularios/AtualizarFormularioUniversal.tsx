import ModelPut from "@/functions/ModelPut";
import { useEffect, useState } from "react";
import { capitalize } from "@/functions/Capitalize";
import { useRouter } from "next/router";
import { Atributo, Entidade } from "../Interfaces";
import ModelGet from "@/functions/ModelGet";
import AutoCompleteInput from "./AutocompleteInput";
import { useFetchModels } from "@/hooks/UseFetchModel";

interface Props {
  entidade: Entidade;
  id?: string
}

export default function FormularioAtualizacaoUniversal(props: Props) {
  const [id, setId] = useState("");
  const [formData, setFormData] = useState<{ [key: string]: any }>({});

  const data = useFetchModels(props.entidade.nome, props.entidade.atributos);
  const router = useRouter();
  const entidade = props.entidade;

  // EFFECTS

  useEffect(() => {
    if (props.id) {
      setId(props.id)
      loadData(props.id)
    }
  }, [props.id])

  // FUNCTIONS

  function renderCampo(atributo: Atributo) {
    var { nome, tipo, required } = atributo;

    if(required === undefined) {
      required = true
    }

    switch (tipo) {
      case "string":
        return <input type="text" name={nome} required={required} onChange={handleChange} value={formData[nome] ?? ""} className="border p-1" />;
      case "number":
        return <input type="number" name={nome} required={required} onChange={handleChange} value={formData[nome] ?? ""} className="border p-1" />;
      case "foreign":

        return (
          <div>
          <AutoCompleteInput data={data.referencias?.[nome] || []} onSelect={(item) => handleNomeSelecionado(nome, item)} required={required} value={formData[nome] ?? ""} />
          {(entidade.nome == "arma" || entidade.nome == "armadura" || entidade.nome == "item" || entidade.nome == "material" || entidade.nome == "fornecedor") ?  
          <button className="cursor-pointer" onClick={() => router.push(`/${atributo.nome}s/adicionar`, )}>Criar {atributo.nome}</button>
           : <button className="cursor-pointer" onClick={() => router.push(`/estoque/${atributo.nome}s/adicionar`, )}>Criar {atributo.nome}</button>}
          </div>
        );
      case "date":
        return <></>
      default:
        return <input type="text" name={nome} onChange={handleChange} className="border p-1" />;
    }
  };

  // ASYNC FUNCTIONS

  async function loadData(id: string) {
    try {
      var response = await ModelGet(id, entidade.nome.toLowerCase());

      if (response) {
        entidade.atributos.forEach((attr) => {
          if (attr.tipo === "foreign" && response[attr.nome]) {
            setFormData((prev) => ({ ...prev, [attr.nome]: response[attr.nome].nome }));
          } else {
            setFormData((prev) => ({ ...prev, [attr.nome]: response[attr.nome] }));
          }
        })


      } else {
        alert("Erro ao carregar dados do " + entidade.nome.toLowerCase() + ".");
      }
    } catch (error) {
      console.error("Erro ao carregar dados:", error);
      alert("Erro ao carregar dados.");
    }
  }

  // HANDLERS

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  const handleNomeSelecionado = (atributoNome: string, item: any) => {
    setFormData((prev) => ({ ...prev, [atributoNome]: item.id }));
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

        if(!response) {
            return
        }

        
        alert(capitalize(entidade.nome) + " atualizado com sucesso.")
        router.back()
        
    } catch (error) {
        console.error("Erro ao atualizar " + entidade.nome.toLowerCase() + ":", error)
        alert("Erro ao atualizar " + entidade.nome.toLowerCase() + ".")
    }
  };

  return (
    <form onSubmit={handleSubmit} className="shadow-lg shadow-gray-500/50 flex flex-col gap-4 p-4 border border-[var(--bordercolor)] rounded  min-w-[50vh] max-w-[50vh] overflow-y-auto">
      
      <h2 className="text-xl font-bold">Atualizar {capitalize(entidade.nome)}</h2>

      {entidade.nome != "venda" && <label className="flex flex-col gap-1">
        ID
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} className="border p-1" />
      </label>}

      {entidade.atributos.map((attr) => (
        <label key={attr.nome} className="flex flex-col gap-1">
          {capitalize(attr.nome)}
          {renderCampo(attr)}
        </label>
      ))}

      <button type="submit" className="bg-yellow-500 text-white p-2 rounded">
        Atualizar
      </button>
    </form>
  );
}
