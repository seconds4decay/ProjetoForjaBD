import { capitalize } from "./Capitalize";

export default async function ModelPut(id: string, data: any, route: string) {
    try {
        const res = await fetch(`http://localhost:8080/${route}/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
  
        if (!res.ok) {
          if (res.status === 404) {
            alert(`${capitalize(route)} não encontrado.`)
          } else if (res.status === 500) {
            alert(`Erro ao atualizar ${capitalize(route)}.`)
          } else {
            alert(`Erro desconhecido ao atualizar ${capitalize(route)}. Código: ${res.status}`)
          }
          return null;
        }

        return await res.json()
        
      } catch (error) {
        console.error(error)
        alert("Erro ao atualizar")
    }
};