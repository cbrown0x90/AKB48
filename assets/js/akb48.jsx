import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'reactstrap';

import { Place, Card } from './card.jsx';

export default function game_init(root) {
  ReactDOM.render(<AKB48Game />, root);
}

// App state for Hangman is:
// {
//    word: String    // the word to be guessed
//    guesses: String // letters guessed so far
// }
//
// A TodoItem is:
//   { name: String, done: Bool }


class AKB48Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deck: [],
      stage: [null, null, null, null, null, null],
      event: null,
      hand: ["test1", "test2", "test3", "test4", "test5"]
    };
  }

  render() {
    let hand_render = this.state.hand.map((card, i) =>
      <div key={"hand_" + i} className={"col-auto" + (i !== 0 && " ml-3")}>
        <Card name={this.state.hand[i]} />
      </div>
    );
    return (
      <div>
        <div className="row no-gutters mb-3 justify-content-center">
          <div className="col-auto mr-3">
            <Place filler="Stage" />
          </div>
          <div className="col-auto mr-3">
            <Place filler="Stage" />
          </div>
          <div className="col-auto mr-3">
            <Place filler="Stage" />
          </div>
          <div className="col-auto mr-3">
            <Place filler="Stage" />
          </div>
          <div className="col-auto">
            <Place filler="Stage" />
          </div>
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
