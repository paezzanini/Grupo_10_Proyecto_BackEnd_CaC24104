let datos = [];
let datosInner = "";
let contenedor = document.getElementById("contenedor");

//Funcion flecha para obtener datos del pokemon y generar la card.
const obtenerDatos = async (pokemon) => {
    try {
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=10`);
        let result = await response.json();
        data = result.results;
        datos = data;
        crearCards(datos);
        return result;
    } catch (error) {
        console.log(error);
        console.log(new Error("No se encontro a ese Pokemon"));
    }
};

//Funcion flecha que se encarga de obtener la imagen del pokemon por otro fetch
const obtenerImagen = async (url) => {
    try {
        let response = await fetch(url);
        let result = await response.json();
        data = result;
        return data.sprites.front_default;
    } catch (error) {
        console.log(error);
        console.log(new Error("No se encontro a ese Pokemon"));
    }
};

//Creo las cards obteniendo las imagenes y mapeo la lista de pokemones para generar los html.
const crearCards = async (listaPokemones) => {
    const promises = listaPokemones.map(async (pokemon) => {
        const imagen = await obtenerImagen(pokemon.url);
        return `
            <div class="card">
                <img src="${imagen}" class="imgPoke">
                <p>${pokemon.name}</p>
                <p><a href="${pokemon.url}">Más info</a></p>
            </div>
        `;
    });

    const cards = await Promise.all(promises); //Promise.all lo utilizo para generar un array de promesas que se devuelve solo cuando todas son resueltas.
    datosInner = cards.join("");
    contenedor.innerHTML = datosInner;
};

obtenerDatos();
