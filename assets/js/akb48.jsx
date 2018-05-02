import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'reactstrap';

import { Place, Card } from './card.jsx';

export default function game_init(root) {
  ReactDOM.render(<AKB48Game />, root);
}

class AKB48Game extends React.Component {
  constructor(props) {
    super(props);

    this.selectCard = this.selectCard.bind(this);
    this.selected = null;

    this.state = {
      deck: [],
      stage: [null, null, null, null, null],
      event: null,
      hand: ["test1", "test2", "test3", "test4", "test5"]
    };
  }

  selectCard(e) {
    if (this.selected == e) {
      this.selected = null;
    } else {
      this.selected = e;
    }
  }

  moveCard(e) {
    if (this.selected != null) {
      this.setState(function(prevState, props) {
        //TODO make copies
        prevState.stage[e] = this.state.hand[this.selected];
        prevState.hand.splice(this.selected, 1);
        this.selected = null;
        return {
          stage: prevState.stage,
          hand: prevState.hand
        }
      });
    } else {
      console.log("hie...");
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
          <div className="col-auto mr-3">
            <Place filler="" />
          </div>
          <div className="col-auto mr-3">
            <Place filler="" />
          </div>
          <div className="col-auto mr-3">
            <Place filler="" />
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

/*
  <div className="row no-gutters">
    <div className="col-auto">
      <Place filler="Outside Area" />
    </div>
  </div>
 */
