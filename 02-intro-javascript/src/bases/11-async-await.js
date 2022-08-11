// const getImagenPromesa = () => {
//   return new Promise((resolve, reject) => resolve("url"));
// };
// getImagenPromesa().then(console.log);
// == ASYNC
// async function getCursos() {
//     isLoading = true
//     const request = async () => "URL";
//     request().then(res => {
//         isLoading = false
//         console.log(res);
//     });
// }
// PROMESA MULTIPLE FER ROMO
// const getData = async () => {
//     const [ courses, profile ] = Promise.all([
//         await getCurso(),
//         await getProfile()
//     ])
// }

const getImage = async () => {
  try {
    const apiKey = "l1d0QVNGoswzLXjb359sS0FCUeHcyBEh";
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await response.json();
    const { url } = data.images.original;
    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);
  } catch (error) {
    console.error(error);
  }
};
getImage();
