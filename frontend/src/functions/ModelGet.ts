import { capitalize } from "./Capitalize";

export default async function ModelGet(query: string, route: string) {
    try {
        const response = await fetch(`http://localhost:8080/${route}/${query}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            if(response.status === 404) {
                alert(`${capitalize(route)} não encontrado.`);
            }
          }
      
        return await response.json()

    } catch(error) {
        console.error("Erro ao enviar dados:", error);
    }
}