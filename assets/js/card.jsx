import React from "react"

class Place extends React.Component {
  render() {
    var divStyle = {
      width: this.props.width,
      height: this.props.height,
      outline: "thin solid #000000"
    };
    return <div style={divStyle}>{this.props.filler}</div>;
  }
}

class Card extends React.Component {
  render() {
    var divStyle = {
      width: 125,
      height: 175,
      outline: "thin solid #000000"
    };
    return <div style={divStyle}>{this.props.name}</div>;
  }
}

Place.defaultProps = {
  width: 125,
  height: 175,
}

export {
    Place,
    Card
};
