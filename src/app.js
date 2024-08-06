/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  //console.log("Hello Rigo from the console!");
  function aleatorio(lista) {
    let numAleatorio = Math.floor(Math.random() * lista.length);
    return lista[numAleatorio];
  }

  let pica = ["♦", "♣", "♥", "♠"];
  let numero = ["1", "2", "3", "4", "5", "6", "8", "9", "10", "J", "Q", "K"];

  let elementPicaArriba = document.querySelector("#picaArriba");
  let elementNumeCarta = document.querySelector("#numeCarta");
  let elementPicaAbajo = document.querySelector("#picaAbajo");
  elementPicaAbajo.computedStyleMap.transform = "rotate(180deg)";

  const renderNewRandomCard = () => {
    let picaArriba = aleatorio(pica);
    let numeCarta = aleatorio(numero);

    elementPicaArriba.innerHTML = picaArriba;
    elementNumeCarta.innerHTML = numeCarta;
    elementPicaAbajo.innerHTML = picaArriba;

    if (picaArriba == "♦" || picaArriba == "♥") {
      elementPicaAbajo.style.color = "red";
      elementPicaArriba.style.color = "red";
    } else {
      elementPicaAbajo.style.color = "black";
      elementPicaArriba.style.color = "black";
    }
  };
  renderNewRandomCard();

  let generateRandonBtn = document.querySelector("#generate-button");

  generateRandonBtn.addEventListener("click", renderNewRandomCard);

  let inputElement = document.querySelector("#input-name");
  let elementCardAleatoria = document.querySelector("#title");

  inputElement.addEventListener("change", evento => {
    let texto = evento.target.value;
    elementCardAleatoria.innerText = texto;

    if (texto.length > 6) {
      elementCardAleatoria.style.fontSize = "30px";
    } else {
      elementCardAleatoria.style.fontSize = "44px";
    }
  });

  let cardAleatoria = document.querySelector("#card");

  setInterval(renderNewRandomCard, 10000);
};
