import React, { Component } from "react";
class Square extends Component {
  state = {
    content: this.props.content
  };
  styles = {
    border: "1px solid",
    width: "100px",
    height: "100px",
    textAlign: "center"
  };
  render() {
    return (
      <td onClick={() => this.props.onClick(this.props.id)} style={this.styles}>
        {this.props.content}
      </td>
    );
  }
}

export default Square;
