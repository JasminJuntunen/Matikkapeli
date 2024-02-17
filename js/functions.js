var num1 = getRandomIntNumberInRange(1, 10);
var num2 = getRandomIntNumberInRange(1, 10);

var oikeatVastaukset = 0;
var vaaratVastaukset = 0;

var num1Element = document.getElementById('num1');
var num2Element = document.getElementById('num2');
var inputElement = document.querySelector('input');

num1Element.textContent = num1;
num2Element.textContent = num2;

var calculateButton = document.getElementById('calculate');
calculateButton.addEventListener('click', laskeTulos);

function getRandomIntNumberInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function laskeTulos() {
  var vastaus = parseInt(inputElement.value);

  if (vastaus === num1 + num2) {
    oikeatVastaukset++;
  } else {
    vaaratVastaukset++;
  }

  num1 = getRandomIntNumberInRange(1, 10);
  num2 = getRandomIntNumberInRange(1, 10);
  num1Element.textContent = num1;
  num2Element.textContent = num2;

  inputElement.value = '';

  document.getElementById('oikeatVastaukset').textContent = oikeatVastaukset;
  document.getElementById('vaaratVastaukset').textContent = vaaratVastaukset;
}