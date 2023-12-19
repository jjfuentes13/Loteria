let getNewBoard = document.getElementById("random_bt");

// add event listener to the button to create a new board 
getNewBoard.addEventListener("click", function() {
  newBoard(traditonalDeck);
}) 

let traditonalDeck = [
  "LoteriaCards/Alacran.jpeg",
  "LoteriaCards/Apache.jpeg",
  "LoteriaCards/Arana.jpeg",
  "LoteriaCards/Arbol.jpeg",
  "LoteriaCards/Arpa.jpeg",
  "LoteriaCards/Bandera.jpeg",
  "LoteriaCards/Bandolon.jpeg",
  "LoteriaCards/Barril.jpeg",
  "LoteriaCards/Borracho.jpeg",
  "LoteriaCards/Bota.jpeg",
  "LoteriaCards/Botella.jpeg",
  "LoteriaCards/Calavera.jpeg",
  "LoteriaCards/Camaron.jpeg",
  "LoteriaCards/Campana.jpeg",
  "LoteriaCards/Cantarito.jpeg",
  "LoteriaCards/Catrin.jpeg",
  "LoteriaCards/Cazo.jpeg",
  "LoteriaCards/Chalupa.jpeg",
  "LoteriaCards/Corazon.jpeg",
  "LoteriaCards/Corona.jpeg",
  "LoteriaCards/Cotorro.jpg",
  "LoteriaCards/Dama.jpeg",
  "LoteriaCards/Diablito.jpg",
  "LoteriaCards/Escalera.jpeg",
  "LoteriaCards/Estrella.jpeg",
  "LoteriaCards/Gallo.jpeg",
  "LoteriaCards/Garza.jpeg",
  "LoteriaCards/Gorrito.jpeg",
  "LoteriaCards/Jaras.jpg",
  "LoteriaCards/Luna.jpeg",
  "LoteriaCards/Maceta.jpeg",
  "LoteriaCards/Mano.jpeg",
  "LoteriaCards/Melon.jpeg",
  "LoteriaCards/Muerte.jpeg",
  "LoteriaCards/Mundo.jpeg",
  "LoteriaCards/Musico.jpeg",
  "LoteriaCards/Negrito.jpeg",
  "LoteriaCards/Nopal.jpeg",
  "LoteriaCards/Pajaro.jpeg",
  "LoteriaCards/Palma.jpeg",
  "LoteriaCards/Paraguas.jpeg",
  "LoteriaCards/Pera.jpeg",
  "LoteriaCards/Pescado.jpeg",
  "LoteriaCards/Pino.jpeg",
  "LoteriaCards/Rana.jpeg",
  "LoteriaCards/Rosa.jpeg",
  "LoteriaCards/Sandia.jpeg",
  "LoteriaCards/Sirena.jpeg",
  "LoteriaCards/Sol.jpeg",
  "LoteriaCards/Soldado.jpeg",
  "LoteriaCards/Tambor.jpeg",
  "LoteriaCards/Valiente.jpeg",
  "LoteriaCards/Venado.jpeg",
  "LoteriaCards/Violoncello.jpeg"
];

function shuffleArray(array) {
  let currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;

  }

  return array;
}

function boardElements(array) {
  let board = [];

  shuffleArray(array);

  for (let i = 0; i < array.length; i++) {
    // change the elements from end of array index to beginning to push into board array  (array.length - 1) - i
    board.push(array[i]);
  }
  return board;
} 

function newBoard(array) { 
// removing elements from the board in html 
  let getBoard = document.getElementById("board");
  let getBoard2 = document.getElementById("board2");

  while (getBoard.firstChild) {
    getBoard.removeChild(getBoard.firstChild);
  }

  while (getBoard2.firstChild) {
    getBoard2.removeChild(getBoard2.firstChild);
  }

  boardElements(array);

// create new img elements for the board in a loop to add 4 images from the array to the board
  for (let i = 0; i < 16; i++) {
    let square = document.createElement("img");
    square.setAttribute("src", array[i]);
    square.setAttribute("class", "square");
    getBoard.appendChild(square);
  }

// create new img elements for board 2 in a loop from setting from end of array to beginning
  for (let i = 16; i < 32; i++) {
    let square = document.createElement("img");
    square.setAttribute("src", array[i]);
    square.setAttribute("class", "square");
    getBoard2.appendChild(square);
  }
}



