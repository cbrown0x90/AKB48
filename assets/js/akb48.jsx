import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'reactstrap';

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
      hand: []
    };
  }

  render() {
    return (
      <h1>hie...</h1>
    );
  }
}
