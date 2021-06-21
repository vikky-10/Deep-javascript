const jokes = document.querySelector('#joke');
const jokeBtn = document.querySelector('#jokebtn');

// const generateJokes = () => {
//   const setHeader = {
//     headers: {
//       Accept: 'application/json',
//     },
//   };
//   fetch('https://icanhazdadjoke.com/', setHeader)
//     .then(response => response.json())
//     .then(data => {
//       jokes.innerHTML = data.joke;
//     })
//     .catch(error => console.log(error));
// };

//with the help of async await

const generateJokes = async () => {
  try {
    const setHeader = {
      headers: {
        Accept: 'application/json',
      },
    };
    const res = await fetch('https://icanhazdadjoke.com/', setHeader);
    const data = await res.json();
    jokes.innerHTML = data.joke;
  } catch (e) {
    console.log(err);
  }
};

jokeBtn.addEventListener('click', generateJokes);
generateJokes();
