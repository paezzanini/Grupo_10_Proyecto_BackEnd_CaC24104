document.getElementById('usuarioForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

    const formData = new FormData(event.target);
    const usuario = {};
    formData.forEach((value, key) => {
        usuario[key] = value;
    });

    fetch('http://localhost:8080/webapp/usuarios', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuario)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Error en la solicitud: ' + response.status);
        }
        return response.json();
    })
    .then(data => {
        console.log('Usuario registrado con ID:', data);
        alert('Usuario registrado con éxito.');
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error al registrar el usuario.');
    });
});
