export default async function ModelDelete(id: number, route: string) {
    try {
        const response = await fetch("http://localhost:8080/" + route + "/" + id, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error('Erro ao enviar formulário')
          }
        
        return true;
    } catch(error) {
        console.error("Erro ao enviar dados:", error);
        throw error;
    }
}