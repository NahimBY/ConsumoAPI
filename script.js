// Espera a que el contenido del DOM se haya cargado completamente
document.addEventListener('DOMContentLoaded', () => {
  // Base URL de la API de Pokémon
  const baseURL = 'https://pokeapi.co/api/v2/pokemon/';
  // Genera un número aleatorio entre 1 y 898 para seleccionar un Pokémon al azar
  const randomID = Math.floor(Math.random() * 898) + 1;

  // Hace una solicitud fetch a la API con el ID del Pokémon aleatorio
  fetch(`${baseURL}${randomID}`)
    .then(response => response.json()) // Convierte la respuesta a formato JSON
    .then(data => {
      // Muestra los datos recibidos en la consola para depuración
      console.log(data);

      // Extrae la información relevante del Pokémon
      const pokemonName = data.name;
      const pokemonHeight = data.height;
      const pokemonWeight = data.weight;
      const pokemonTypes = data.types.map(type => type.type.name).join(', ');
      const pokemonImage = data.sprites.other['official-artwork'].front_default;

      // Actualiza el contenido del DOM con la información del Pokémon
      document.getElementById('pokemon-name').textContent = pokemonName.toUpperCase();
      document.getElementById('pokemon-height').textContent = pokemonHeight;
      document.getElementById('pokemon-weight').textContent = pokemonWeight;
      document.getElementById('pokemon-types').textContent = pokemonTypes;
      document.getElementById('pokemon-image').src = pokemonImage;
    })
    .catch(error => {
      // Muestra un mensaje de error en caso de que la solicitud falle
      console.log('Error fetching data:', error);
    });
});

