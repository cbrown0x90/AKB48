import React from "react"

class Place extends React.Component {
  constructor(props) {
    super(props);
    this.width = props.width;
    this.height = props.height;
    this.filler = props.filler;
  }
  render() {
    var divStyle = {
      width: this.width,
      height: this.height,
      outline: "thin solid #000000"
    };
    return <div style={divStyle}>{this.filler}</div>;
  }
}

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.name = props.name;
  }
  render() {
    var divStyle = {
      width: 125,
      height: 175,
      outline: "thin solid #000000"
    };
    return <div style={divStyle}>{this.name}</div>;
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
