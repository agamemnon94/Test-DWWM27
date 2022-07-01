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

/**
 * Fonction qui fait apparaître les pays dont la langue officielle est le français.
 */
// Version par Pierre

// function countriesLanguages() {
//   fetch('https://restcountries.com/v3.1/all')
//     .then(response => response.json())
//     .then(response => {
//       response.forEach(element => {
//         if (element.languages.fra === 'French') {
//           let box = document.createElement('div');
//           box.className = 'box';
//           let flags = element.flags.png;
//           let langue = element.languages.fra;
//           let pays = element.name.common;
//           box.style.backgroundImage = `url("${flags}")`
//           countryBox.appendChild(box);
//           box.innerHTML += `<h3>${pays}</h3>`;
//           box.innerHTML += `<h4>${langue}</h4>`;
//         }
//       })
//     })
//     .catch(err => console.error(err));
// };
// countriesLanguages();



// Ma version
function countriesLanguages() {

  fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(response => {
      response.forEach(element => {
        if (element.hasOwnProperty('languages')) {
          if (element.languages.hasOwnProperty('fra')) {
            let box = document.createElement('div');
            box.className = 'box';
            let langue = element.languages.fra;
            let pays = element.name.common;
            let flags = element.flags.png;
            countryBox.appendChild(box);
            box.style.backgroundImage = `url("${flags}")`
            box.innerHTML += `<h3>${pays}</h3>`;
            box.innerHTML += `<h4>${langue}</h4>`;
          }
        }
      })
    })
    .catch(err => console.error(err));

}
countriesLanguages()

