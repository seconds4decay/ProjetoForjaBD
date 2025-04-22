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
            throw new Error('Erro ao enviar formulário')
          }
      
        return await response.json()
    } catch(error) {
        console.error("Erro ao enviar dados:", error);
        throw error;
    }
}