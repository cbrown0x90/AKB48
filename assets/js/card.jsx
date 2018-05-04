import React from "react"

export class Place extends React.Component {
  render() {
    var divStyle = {
      width: this.props.width,
      height: this.props.height,
      outline: "thin solid #000000"
    };
    return <div style={divStyle}>{this.props.filler}</div>;
  }
}

export class Card extends React.Component {
  render() {
    var divStyle = {
      width: 125,
      height: 175,
      outline: "thin solid #000000"
    };
    return <div style={divStyle}>{this.props.name}</div>;
  }
}

export class Backup extends React.Component {
  render() {
    var divStyle = {
      width: 125,
      outline: `thin solid ${this.props.color}`
    };
    return (
      <div style={divStyle}>
        {this.props.backup[6] || "MAX"}<br />
        {this.props.backup[5] || "6th"}<br />
        {this.props.backup[4] || "5th"}<br />
        {this.props.backup[3] || "4th"}<br />
        {this.props.backup[2] || "3rd"}<br />
        {this.props.backup[1] || "2nd"}<br />
        {this.props.backup[0] || "1st"}
      </div>
    );
  }
}

Place.defaultProps = {
  width: 125,
  height: 175,
}
