import ModelPut from "@/functions/ModelPut";
import { useEffect, useState } from "react";
import { capitalize } from "@/functions/Capitalize";
import { useRouter } from "next/router";
import { Entidade } from "../Interfaces";
import ModelGet from "@/functions/ModelGet";

interface Props {
  entidade: Entidade;
  id?: string
}

export default function FormularioAtualizacaoUniversal(props: Props) {
  const [id, setId] = useState("");
  const [formData, setFormData] = useState<{ [key: string]: any }>({});

  const router = useRouter();
  const entidade = props.entidade;

  useEffect(() => {
    if (props.id) {
      setId(props.id);
      loadData(props.id);
    }
  }, [props.id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const loadData = async (id: string) => {
    try {
      var response = await ModelGet(id, entidade.nome.toLowerCase());

      if (response) {
        entidade.atributos.forEach((attr) => {
          if (attr.tipo === "foreign") {
            setFormData((prev) => ({ ...prev, [attr.nome]: response[attr.nome].nome }));
          } else {
            console.log(attr.nome, response[attr.nome])
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

        if (response.status === 200) {
            alert(entidade.nome.toLowerCase() + " atualizado com sucesso.")
            router.back()
        } 
    } catch (error) {
        console.error("Erro ao atualizar " + entidade.nome.toLowerCase() + ":", error)
        alert("Erro ao atualizar " + entidade.nome.toLowerCase() + ".")
    }


  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4 border rounded  min-w-[50vh] max-w-[50vh]">
      
      <h2 className="text-xl font-bold">Atualizar {capitalize(entidade.nome)}</h2>

      <label className="flex flex-col gap-1">
        ID do item
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} className="border p-1" />
      </label>

      {entidade.atributos.map((attr) => (
        <label key={attr.nome} className="flex flex-col gap-1">
          {capitalize(attr.nome)}
          <input
            type="text"
            name={attr.nome}
            onChange={handleChange}
            className="border p-1"
            placeholder={attr.tipo === "foreign" ? `ID de ${attr.referencia}` : ""}
            value={formData[attr.nome] ?? ""}

          />
        </label>
      ))}

      <button type="submit" className="bg-yellow-500 text-white p-2 rounded">
        Atualizar
      </button>
    </form>
  );
}
