// Este código JavaScript se ejecuta cuando el DOM (Document Object Model) 
// ha sido completamente cargado. 
// Hace una solicitud GET a un servidor para obtener una lista de películas, 
// y luego crea y añade elementos de tabla para cada película al cuerpo de una tabla.

// Este código se ejecuta cuando el DOM ha sido completamente cargado y analizado,
// pero antes de que se hayan cargado completamente las hojas de estilo, las imágenes y los subframes.
document.addEventListener('DOMContentLoaded', async () => {

    // realizamos una peticion fetch a esta api para obtener todas las peliculas de la base:
    // El método GET se usa para recuperar datos, y se especifica que el contenido será JSON.
    // configuracion de options, es un get y no necesita body
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    // Hacer una solicitud fetch y esperar la respuesta:
    // Esta línea hace una solicitud HTTP GET a la URL especificada y espera la respuesta del servidor.
    const response = await fetch('http://localhost:8080/webapp/usuarios', options);

    // Convertir la respuesta a JSON:
    const data = await response.json();

    // Imprimir los datos en la consola:
    //console.log(data);
    //{idPelicula: 2, titulo: 'Transformers 2', genero: 'Accion', duracion: '3h 2m', imagen: 'transformers.jpg'}
    // Extraemos las películas de la respuesta
    const usuarios = data;
    // tenemos que insertar todas las peliculas en la tabla con id tablePeliculas, pero en tbody con la siguiente estructura de ejemplo:
    /*<!--este es solo un ejemplo porque se va a llenar desde js-->
                    <tr>
                        <td>The Super Mario Bros. Movie (2023)</td>
                        <td>3h 22m</td>
                        <td>Animation, Family, Adventure, Fantasy, Comedy</td>
                        <td><img width="150px" src="../assets/img/mario.jpg" alt="mario pelicula 2023"></td>
                        
                    </tr> 
    */
  
    //obtenemos el tbody de la tabla
    const tbody = document.getElementById('bodyTableUsuarios');

    // recorremos todos los usuarios
    usuarios.forEach(usuario => {
        // creamos un tr
        const tr = document.createElement('tr');
        // creamos un td con el nombre de usuario
        const tdNombre = document.createElement('td');
        tdNombre.textContent = usuario.nombre;
        // creamos un td con el apellido del usuario
        const tdApellido = document.createElement('td');
        tdApellido.textContent = usuario.apellido;
        // creamos un td con el email del usuario
        const tdEmail = document.createElement('td');
        tdEmail.textContent = usuario.email;
        // creamos un td con la pass del usuarios, ya sé, no es ético, pero no sé de qué otra forma ponerlo
        const tdPass = document.createElement('td');
        tdPass.textContent = usuario.pass;
         // creamos un td con la fecha de nacimmiento
        const tdFechaNac = document.createElement('td');
        tdFechaNac.textContent = usuario.fechaNac;
        // creamos un td con el país del usuario
        const tdPais = document.createElement('td');
        tdPais.textContent = usuario.pais;
        // -- Comenté lode la imagen, no sé si van a querer que le demos la opción se subir
        // creamos un td con la imagen de la pelicula
        // const tdImage = document.createElement('td');
        // const img = document.createElement('img');
        // img.src = "../assets/img/" + movie.imagen;
        // img.width = '150';
        // img.alt = movie.titulo;
        // tdImage.appendChild(img);
        //agrego la clase a la imagen para que se vea mejor de bootstrap fluid y thumbnail
        // img.classList.add('img-fluid');
        // img.classList.add('img-thumbnail');
        
        // añadimos los td al tr
        tr.appendChild(tdNombre);
        tr.appendChild(tdApellido);
        tr.appendChild(tdEmail);
        tr.appendChild(tdPass);
        tr.appendChild(tdFechaNac);
        tr.appendChild(tdPais);
        // añadimos el tr a al body
        tbody.appendChild(tr);

    });

/*
       movies.forEach( movie => {

      const tr = document.createElement('tr');

      tr.innerHTML = `
            <td>${movie.titulo}</td>
            <td>${movie.genero}</td>
            <td>${movie.duracion}</td>
            <td>
               <img width="150px" src="../assets/img/${movie.imagen}" alt="${movie.titulo}">
            </td>
            </tr>
      `
     tbody.appendChild(tr); 

   });
*/
});