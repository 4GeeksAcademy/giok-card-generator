import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


const newCard = () => {
  console.log('genero una nueva carta');
  let suits = ['♦', '♥', '♠', '♣']
  let numbers = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']

  const indexSuit = Math.floor(Math.random() * suits.length);
  const indexNumber = Math.floor(Math.random() * numbers.length);
  console.log(indexSuit)


  // 2.a Mostrar el palo en los div#arriba y div#abajo el palo
  const divArriba = document.querySelector('.text-start');
  const divAbajo = document.querySelector('.text-end');
  const divNumber = document.querySelector('.display-1')
  // 2.b Renderizar el número en el div#number
  divArriba.textContent = suits[indexSuit];
  divAbajo.textContent = suits[indexSuit];
  divNumber.textContent = numbers[indexNumber];
  // condicional u operador ternario: si es corazon o diamante cambiar el color a rojo
  // si es hoja o trebol entocnes el color es negro 
  if (suits[indexSuit] === '♥' || suits[indexSuit] === '♦') {
    divArriba.style.color = 'red';
    divAbajo.style.color = 'red';
  }
  else {
    divArriba.style.color = 'black'
    divAbajo.style.color = 'black'
  }
}


window.onload = function () {

  const divAbajo = document.querySelector('#abajo');
  divAbajo.classList.add('rotate-180');
  newCard()
  
};

setInterval(newCard, 10000);



