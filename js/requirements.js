export const getSalesCoffee = async () => {
    try {
        const response = await fetch('https://raw.githubusercontent.com/DATA-DAWM/Datos/refs/heads/main/Coffee/Coffe_sales.xml');
        if (!response.ok) {
            throw new Error('Error en la petición de red');
        }
        
        // Como es XML, lo descargamos como texto plano primero
        const str = await response.text();
        
        // Usamos DOMParser para convertir ese texto en un objeto XML navegable
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(str, "application/xml");
        
        return xmlDoc;
    } catch (error) {
        console.error("Error al obtener los datos:", error);
        return null;
    }
};