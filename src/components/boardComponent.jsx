import React, { Component } from "react";
import Square from "./squareComponent";
import play from "../logic/logic.js";
class Board extends Component {
  state = {
    slots: [
      { id: 0, content: "" },
      { id: 1, content: "" },
      { id: 2, content: "" },
      { id: 3, content: "" },
      { id: 4, content: "" },
      { id: 5, content: "" },
      { id: 6, content: "" },
      { id: 7, content: "" },
      { id: 8, content: "" }
    ],
    turn: "x",
    full: false,
    winner: "",
    info: ""
  };

  styles = {
    width: "300px",
    height: "300px",
    border: "1px solid"
  };
  handleClick = id => {
    this.setState(play(this.state, id));
  };

  restartGame = () => {
    let initialState = {
      slots: [
        { id: 0, content: "" },
        { id: 1, content: "" },
        { id: 2, content: "" },
        { id: 3, content: "" },
        { id: 4, content: "" },
        { id: 5, content: "" },
        { id: 6, content: "" },
        { id: 7, content: "" },
        { id: 8, content: "" }
      ],
      turn: "x",
      full: false,
      winner: "",
      info: ""
    };
    this.setState(initialState);
  };

  render() {
    return (
      <div>
        <h1>¡Bienvenido a un nuevo juego de Gato!</h1>
        {this.renderTurnOrWinner()}
        {this.renderInfo()}
        <table style={this.styles}>
          <tbody>
            <tr>
              <Square
                onClick={this.handleClick}
                id={this.state.slots[0].id}
                content={this.state.slots[0].content}
                key={this.state.slots[0].id}
              />
              <Square
                onClick={this.handleClick}
                id={this.state.slots[1].id}
                content={this.state.slots[1].content}
                key={this.state.slots[1].id}
              />
              <Square
                onClick={this.handleClick}
                id={this.state.slots[2].id}
                content={this.state.slots[2].content}
                key={this.state.slots[2].id}
              />
            </tr>
            <tr>
              <Square
                onClick={this.handleClick}
                id={this.state.slots[3].id}
                content={this.state.slots[3].content}
                key={this.state.slots[3].id}
              />
              <Square
                onClick={this.handleClick}
                id={this.state.slots[4].id}
                content={this.state.slots[4].content}
                key={this.state.slots[4].id}
              />
              <Square
                onClick={this.handleClick}
                id={this.state.slots[5].id}
                content={this.state.slots[5].content}
                key={this.state.slots[5].id}
              />
            </tr>
            <tr>
              <Square
                onClick={this.handleClick}
                id={this.state.slots[6].id}
                content={this.state.slots[6].content}
                key={this.state.slots[6].id}
              />
              <Square
                onClick={this.handleClick}
                id={this.state.slots[7].id}
                content={this.state.slots[7].content}
                key={this.state.slots[7].id}
              />
              <Square
                onClick={this.handleClick}
                id={this.state.slots[8].id}
                content={this.state.slots[8].content}
                key={this.state.slots[8].id}
              />
            </tr>
          </tbody>
        </table>
        <br />
        <br />
        <button onClick={() => this.restartGame()}>Volver a jugar</button>
      </div>
    );
  }

  renderTurnOrWinner() {
    if (this.state.winner === "" && this.state.full) {
      return <h4>Tablero lleno.</h4>;
    } else if (this.state.winner === "") {
      return <h4>Es el turno de '{this.state.turn}'</h4>;
    } else if (this.state.winner !== "") {
      return <h2>Ha ganado '{this.state.winner}'</h2>;
    }
  }
  renderInfo() {
    if (this.state.info !== "") {
      return <p>Información: {this.state.info}</p>;
    } else {
      return <br />;
    }
  }
}
export default Board;
