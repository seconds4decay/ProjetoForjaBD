export default async function ModelPut(id: string, data: any, route: string) {
    try {
        const res = await fetch(`http://localhost:8080/${route}/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
  
        if (!res.ok) throw new Error("Erro na atualização");
        alert("Atualizado com sucesso!");
      } catch (error) {
        console.error(error);
        alert("Erro ao atualizar");
    }
};