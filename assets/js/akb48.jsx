import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'reactstrap';

import { Place, Card, Backup } from './card.jsx';

export default function game_init(root) {
  ReactDOM.render(<AKB48Game />, root);
}

class AKB48Game extends React.Component {
  constructor(props) {
    super(props);

    this.selectCard = this.selectCard.bind(this);
    this.moveCard = this.moveCard.bind(this);
    this.moveToBackup = this.moveToBackup.bind(this);

    this.state = {
      selected: null,
      deck: [],
      stage: [null, null, null, null, null],
      event: null,
      hand: ["test1", "test2", "test3", "test4", "test5"],
      backup_blue: [],
      backup_red: [],
      backup_green: []
    };
  }

  selectCard(e) {
    if (this.state.selected == e) {
      this.setState({selected: null})
    } else {
      this.setState({selected: e})
    }
  }

  moveCard(e) {
    if (this.state.selected != null) {
      this.setState(function(prevState, props) {
        //TODO make copies
        prevState.stage[e] = this.state.hand[this.state.selected];
        prevState.hand.splice(this.state.selected, 1);
        return {
          stage: prevState.stage,
          hand: prevState.hand,
          selected: null
        }
      });
    } else {
      console.log("hie...");
    }
  }

  moveToBackup(e) {
    if (this.state.selected != null) {
      this.setState(function(prevState, props) {
        var newState = {}
        newState[e] = [...prevState[e], this.state.hand[this.state.selected]];
        newState.selected = null;
        prevState.hand.splice(this.state.selected, 1);
        newState.hand = prevState.hand;
        return newState;
      });
    }
  }

  render() {
    let hand_render = this.state.hand.map((card, i) =>
      <div onClick={() => this.selectCard(i)} key={"hand_" + i} className={"col-auto" + (i !== 0 && " ml-3")}>
        <Card name={this.state.hand[i]} />
      </div>
    );
    let stage_render = this.state.stage.map((spot, i) =>
      <div onClick={() => this.moveCard(i)} key={"stage_" + i} className={"col-auto" + (i !== 0 && " ml-3")}>
        <Place filler={this.state.stage[i] || "Stage"} />
      </div>
    );
    return (
      <div>
        <div className="row no-gutters mb-3 justify-content-center">
          {stage_render}
        </div>
        <div className="row no-gutters mb-3 justify-content-center">
          <div className="col-auto mr-3" style={{marginLeft: -50}}>
            <Place width={175} height={125} filler="Event Area" />
          </div>
          <div onClick={() => this.moveToBackup("backup_red")} className="col-auto mr-3">
            <Backup backup={this.state.backup_red} color="#FF0000"/>
          </div>
          <div onClick={() => this.moveToBackup("backup_green")} className="col-auto mr-3">
            <Backup backup={this.state.backup_green} color="#00FF00"/>
          </div>
          <div onClick={() => this.moveToBackup("backup_blue")} className="col-auto mr-3">
            <Backup backup={this.state.backup_blue} color="#0000FF"/>
          </div>
          <div className="col-auto">
            <Place filler="Deck Area" />
          </div>
        </div>
        <div className="row no-gutters justify-content-center">
          {hand_render}
        </div>
      </div>
    );
  }
}
