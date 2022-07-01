window.addEventListener('load', () => {
  document.body.classList.remove("clean__transition");
})

const card = document.querySelector('.card');
const cardImg = document.querySelector('.card_img');
const cardBody = document.querySelector('.card_body');
const btn3 = document.getElementById('btn3');

let codeInput = document.getElementById('code');
let code;

btn3.addEventListener('click', () => {
  code = codeInput.value
  console.log(code);

  checkProduct()
})


function checkProduct() {

  fetch(`https://world.openfoodfacts.org/api/v0/product/${code}.json`)
    .then(response => response.json())
    .then(response => {

      console.log(response);
      cardBody.innerHTML = `<p>${response.code}</p>`;


    })
    .catch(err => console.error(err));

}
