window.addEventListener('load', () => {
  document.body.classList.remove("clean__transition");
})

// const card = document.querySelector('.card');
let cardContainer = document.querySelector('.cards_container');
let card = document.createElement('div');
card.classList.add('.card');
// const cardImg = document.querySelector('.card_img');
// const cardBody = document.querySelector('.card');
const btn3 = document.getElementById('btn3');

let codeInput = document.getElementById('code');
let code;

btn3.addEventListener('click', () => {
  code = codeInput.value
  checkProduct()
})


function checkProduct() {

  fetch(`https://world.openfoodfacts.org/api/v0/product/${code}.json`)
    .then(response => response.json())
    .then(response => {

      console.log(response);

      cardContainer.appendChild(card);
      card.innerHTML += `<img src='${response.product.image_front_url} '>`;

      card.innerHTML += `<p>Code produit :  <span>${response.code}</span></p>`;

      card.innerHTML += `<p>Type de produit : <span>${response.product.generic_name}</span></p>`;

      card.innerHTML += `<p>Marque du produit : <span>${response.product.brands}</span></p>`;

      card.innerHTML += `<p>Valeur nutritive gras : <span>${response.product.nutrient_levels.fat}</span></p>`;
    })
    .catch(err => console.error(err));

}
