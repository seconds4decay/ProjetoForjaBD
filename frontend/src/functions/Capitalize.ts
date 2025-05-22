export function capitalize(string: string) { 
    string.replace("_"," ")

    if(string === "tipo_material") {
        return "Tipo de Material"
    }

    if(string === "dataAlteracao") {
        return "Data de Alteração"
    }

    if(string === "dataTransacao") {
        return "Data de Transação"
    }
    
    return string.charAt(0).toUpperCase() + string.slice(1);
}