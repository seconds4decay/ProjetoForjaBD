import { URLSearchParams } from "url";

export default async function ModelGet(id: string, route: string) {
    try {
        const response = await fetch(`http://localhost:8080/${route}/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status} ${response.statusText}`);
          }
      
        return await response.json()

    } catch(error) {
        console.error("Erro ao enviar dados:", error);
        throw error;
    }
}