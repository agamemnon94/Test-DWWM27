window.addEventListener('load', () => {
  document.body.classList.remove("clean__transition");
})

// function compterMot() {
//   var mots = document.getElementById("textarea").value;
//   var nombre = 0;
//   var split = mots.split(' ');
//   for (var i = 0; i < split.length; i++) {
//     if (split[i] != "") {
//       nombre += 1;
//     }
//   }
//   document.getElementById("afficher").innerHTML = nombre;
// } 
let countryBox = document.querySelector('.country_box');
let box = document.createElement('div');
box.className = 'boxe';

function countriesLanguages() {

  fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(response => {

      // console.log(response);

      response.forEach(element => {

        if (element.hasOwnProperty('languages')) {

          if (element.languages.hasOwnProperty('fra')) {
            let langue = element.languages.fra;
            let pays = element.name.common;
            let flags = element.flags.png;

            countryBox.appendChild(box);

            box.innerHTML += `<h3>${pays}</h3>`;
            box.innerHTML += `<h4>${langue}</h4>`;
            box.innerHTML += `<img src="${flags}" >`

          }
        }
      })
    })
    .catch(err => console.error(err));

}
countriesLanguages()




// let arr = Object.keys(element).map(function (key) {
//   return [Number(key), element[key]];
// })
// console.log(arr);