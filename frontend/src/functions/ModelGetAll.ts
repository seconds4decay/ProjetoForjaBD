export async function getModelAll(route: string) {
    const response = await fetch(`http://localhost:8080/${route}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    if(response.status === 200 ) {
        return response.json();
    }
}