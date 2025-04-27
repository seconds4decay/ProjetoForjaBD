export function capitalize(string: string) { 
    string.replace("_"," ")

    return string.charAt(0).toUpperCase() + string.slice(1);
}