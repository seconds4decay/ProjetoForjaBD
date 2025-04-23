import { capitalize } from "./Capitalize";

export default async function ModelDelete(id: string, route: string) {
    try {
        const response = await fetch("http://localhost:8080/" + route + "/" + id, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            if(response.status === 404) {
                alert(`${capitalize(route)} não encontrado.`);
            } else if (response.status === 500) {
                alert(`Erro ao deletar ${capitalize(route)}. Verifique se o item não está vinculado a outros.`);
            } else {
                alert(`Erro desconhecido ao deletar ${capitalize(route)}. Código: ${response.status}`);
            }
            return false
          }
        
        return true;
    } catch(error) {
        console.error("Erro ao enviar dados:", error);
    }
}