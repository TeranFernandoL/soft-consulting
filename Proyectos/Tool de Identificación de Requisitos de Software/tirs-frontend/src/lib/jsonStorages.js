export async function setJsonStorage(nombre_Storage, valor_Storage) {
    localStorage.setItem(nombre_Storage, JSON.stringify(valor_Storage));  
};


export function getJsonStorage(nombre_Storage) {
    const json = JSON.parse(localStorage.getItem(nombre_Storage));
    return json;
};