export default async function getModelAll(route: string) {
        const response = await fetch(`http://localhost:8080/${route}/`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })

        return response.json()
    }