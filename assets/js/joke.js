window.addEventListener('load', () => {
  document.body.classList.remove("clean__transition");
})

let jokes = document.querySelector('.joke_box');
let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');
// Inputs
let dark = document.getElementById('dark');
let prog = document.getElementById('prog');
let misc = document.getElementById('misc');
let Pun = document.getElementById('Pun');
let spooky = document.getElementById('spooky');
let christmas = document.getElementById('christmas');

let darkCat = dark.checked;
let progCat = prog.checked;
let miscCat = misc.checked;
let PunCat = Pun.checked;
let spookyCat = spooky.checked;
let christmasCat = christmas.checked;

let jokeUrl = ('/Any');

if (darkCat) {
  jokeUrl = '/Custom,Dark';
} if (progCat) {
  jokeUrl = '/Custom,Programming';
} if (miscCat) {
  jokeUrl = '/Custom,Misc';
} if (PunCat) {
  jokeUrl = '/Custom,Pun';
} if (spookyCat) {
  jokeUrl = '/Custom,Spooky';
} if (christmasCat) {
  jokeUrl = '/Custom,Christmas';
}









function getJoke() {

  fetch(` https://v2.jokeapi.dev/joke${jokeUrl}`)
    .then(response => response.json()
      .then(response => {

        console.log(response);
        // let joke=document.createElement('div');
        jokes.innerHTML = `<p>${response.setup}</p>`;

        btn1.addEventListener('click', () => {

          jokes.innerHTML += `<p>${response.delivery}</p>`;
        })

      }))
}

btn2.addEventListener('click', () => {

  getJoke();
})
