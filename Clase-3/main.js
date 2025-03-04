// Seleccionar elementos del DOM
const songForm = document.getElementById('song-form');
const playlist = document.getElementById('playlist');

// Función para agregar una canción a la lista
function addSongToList(songName, artistName, songUrl) {
    // Crear un nuevo elemento de lista
    const listItem = document.createElement('li');

    // Crear el contenido de la canción
    listItem.innerHTML = `
                <strong>${songName}</strong> - ${artistName}
                <a href="${songUrl}" target="_blank">Escuchar</a>
                <button class="delete-btn">Eliminar</button>
            `;

    // Agregar el elemento a la lista
    playlist.appendChild(listItem);

    // Agregar evento al botón de eliminar
    const deleteButton = listItem.querySelector('.delete-btn');
    deleteButton.addEventListener('click', () => {
        listItem.remove(); // Eliminar la canción de la lista
    });
}

// Manejar el envío del formulario
songForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Evitar que el formulario se envíe

    // Obtener los valores del formulario
    const songName = document.getElementById('song-name').value;
    const artistName = document.getElementById('artist-name').value;
    const songUrl = document.getElementById('song-url').value;

    // Agregar la canción a la lista
    addSongToList(songName, artistName, songUrl);

    // Limpiar el formulario
    songForm.reset();
});