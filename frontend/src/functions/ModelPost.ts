import { capitalize } from "./Capitalize";

export default async function ModelPOST(data: any, route: string) {
    try {
        const response = await fetch("http://localhost:8080/" + route, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            if(response.status === 404) {
                alert(`${capitalize(route)} não encontrado.`);
            } else if (response.status === 500) {
                alert(`Erro ao criar ${capitalize(route)}.`);
            } else {
                alert(`Erro desconhecido ao criar ${capitalize(route)}. Código: ${response.status}`);
            }
          }
      
        return await response.json()
    } catch(error) {
        console.error("Erro ao enviar dados:", error);
        throw error;
    }
}