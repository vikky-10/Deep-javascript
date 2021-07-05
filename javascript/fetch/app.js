const charactersList = document.getElementById('charactersList');
const searchBar = document.getElementById('searchBar');

let hpCharacters = [];
searchBar.addEventListener('keyup', e => {
  let searchString = e.target.value.toLowerCase();
  const filters = hpCharacters.filter(character => {
    return (
      character.name.toLowerCase().includes(searchString) ||
      character.house.toLowerCase().includes(searchString)
    );
  });
  displayCharacters(filters);
});

const loadCharacters = async () => {
  try {
    const res = await fetch('https://hp-api.herokuapp.com/api/characters');
    hpCharacters = await res.json();
    displayCharacters(hpCharacters);
  } catch (err) {
    console.error(err);
  }
};

const displayCharacters = characters => {
  const htmlString = characters
    .map(character => {
      return `
            <li class="character">
                <h2>${character.name}</h2>
                <p>House: ${character.house}</p>
                <img src="${character.image}"></img>
            </li>
        `;
    })
    .join(''); //The join() method creates and returns a new string by concatenating all of the elements in an array

  //allseparated by commas or a specified separator string
  //   console.log(htmlString);
  charactersList.innerHTML = htmlString;
};

loadCharacters();
