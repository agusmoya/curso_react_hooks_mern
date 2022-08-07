const apiKey = "l1d0QVNGoswzLXjb359sS0FCUeHcyBEh";

const peticion = fetch(
  `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
);

peticion
  .then((response) => response.json())
  .then(({data}) => {
    console.log(data.images.original.url);
  })
  .catch(console.warn)
