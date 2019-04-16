const possibleWinPlays = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

export default function play(actualState, id) {
  actualState.info = "";
  if (checkWin(actualState) === "") {
    //No existe ganador
    if (!checkIfAllSlotsAreSet(actualState.slots)) {
      //No todas las celdas están llenas
      if (actualState.slots[id].content === "") {
        //Celda vacía
        actualState.slots[id].content = actualState.turn;
        actualState.turn = actualState.turn === "x" ? "o" : "x";
        let winner = checkWin(actualState);
        if (winner !== "") {
          //existe un nuevo ganador
          actualState.winner = winner;
        } else if (winner === "" && checkIfAllSlotsAreSet(actualState.slots)) {
          actualState.full = true;
          actualState.info =
            "Todas las celdas están ocupadas. Inicie un nuevo juego.";
        }
      } else {
        //Celda ya tiene valor;
        actualState.info = "Esa celda está ocupada.";
      }
    } else {
      actualState.info =
        "Todas las celdas están ocupadas. Inicie un nuevo juego.";
    }
  } else {
    //Ya existe un ganador
    actualState.info = "Ya existe un ganador. Inicie nuevamente el juego.";
  }
  return actualState;
}

function checkWin(actualState) {
  let winner = "";
  for (let index = 0; index < possibleWinPlays.length; index++) {
    let result = checkSingleRowForWin(
      actualState.slots[possibleWinPlays[index][0]].content,
      actualState.slots[possibleWinPlays[index][1]].content,
      actualState.slots[possibleWinPlays[index][2]].content
    );
    if (result === "x") {
      winner = result;
      break;
    } else if (result === "o") {
      winner = result;
      break;
    }
  }
  return winner;
}

function checkSingleRowForWin(slotContent0, slotContent1, slotContent2) {
  let winner = "";
  if (slotContent0 !== "" && slotContent1 !== "" && slotContent2 !== "") {
    if (slotContent0 === "x" && slotContent1 === "x" && slotContent2 === "x") {
      winner = "x";
    } else if (
      slotContent0 === "o" &&
      slotContent1 === "o" &&
      slotContent2 === "o"
    ) {
      winner = "o";
    }
  }
  return winner;
}

function checkIfAllSlotsAreSet(slots) {
  let allSet = true;
  for (let index = 0; index < slots.length; index++) {
    if (slots[index].content === "") {
      allSet = false;
      break;
    }
  }
  return allSet;
}
