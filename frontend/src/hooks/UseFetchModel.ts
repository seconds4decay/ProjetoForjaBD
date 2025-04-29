import { useEffect, useState } from "react";
import { Atributo } from "@/components/Interfaces";

export function useFetchModels(entidadeNome: string, atributos: Atributo[]) {
  const [data, setData] = useState<{
    principais: any[];
    referencias: { [key: string]: any[] };
  }>({
    principais: [],
    referencias: {},
  });

  useEffect(() => {
    async function fetchData() {
      const dadosPrincipais = await getModelAll(entidadeNome);

      const foreigns = atributos
        .filter(attr => attr.tipo === "foreign" && attr.referencia)
        .map(async attr => {
          const dadosRef = await getModelAll(attr.referencia);
          return { [attr.nome]: dadosRef };
        });

      const referenciasArray = await Promise.all(foreigns);
      const referenciasObj = Object.assign({}, ...referenciasArray);

      setData({
        principais: dadosPrincipais,
        referencias: referenciasObj,
      });
    }

    fetchData();
  }, [entidadeNome, atributos]);

  return data;
}

async function getModelAll(route: string) {
  const response = await fetch(`http://localhost:8080/${route}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.status === 200) {
    return response.json();
  } else {
    console.error(`Erro ao buscar ${route}: ${response.status}`);
    return [];
  }
}
