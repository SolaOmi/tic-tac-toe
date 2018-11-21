import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
  const square = "square";
  const highlight = "highlight";

  return (
    <button className={props.isHighlighted ? square + " " + highlight : square}
      onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  renderSquare(i) {
    const winner = this.props.winner;
    return (
      <Square
        value={this.props.squares[i]}
        isHighlighted={winner && winner.winningPositions.includes(i)}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  createBoard() {
    let count = 0;
    let board = [];

    for (let i = 0; i < 3; i++) {
      let row = [];
      for (let j = 0; j < 3; j++) {
        row.push(this.renderSquare(count));
        count++;
      }
      board.push(<div className="board-row">{row}</div>)
    }

    return board;
  }

  render() {
    return (
      <div>
        {this.createBoard()}
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null)
        }
      ],
      stepNumber: 0,
      xIsNext: true,
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([
        {
          squares: squares,
          position: getPosition(i),
        }
      ]),
      xIsNext: !this.state.xIsNext,
      stepNumber: history.length,
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map( (step, move) => {
      const desc = move ?
        'Go to move #' + move + " at position " + step.position :
        'Go to game start';
      const btnClass = move === this.state.stepNumber ?
        'moves-btn bold' : 'moves-btn';

      return (
        <li key={move}>
          <button className={btnClass} onClick={() => this.jumpTo(move)}>
            {desc}
          </button>
        </li>
      )
    });

    let status;
    if (winner) {
      status = 'Winner: ' + winner.winner;
    } else if (this.state.stepNumber === current.squares.length) {
      console.log(this.state.stepNumber);
      status = 'Draw';
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            winner={winner}
            onClick={ (i) => this.handleClick(i) }
          />
          <br />
          <button onClick={() => sortList()}>Sort moves</button>
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol id="moves-list">{moves}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b ,c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return {
        winner: squares[a],
        winningPositions: lines[i]
      }
    }
  }
  return null;
}

function getPosition(i) {
  const positions = ["(1, 1)", "(1, 2)", "(1, 3)",
                     "(2, 1)", "(2, 2)", "(2, 3)",
                     "(3, 1)", "(3, 2)", "(3, 3)"];
  return positions[i];
}

function sortList() {
  const list = document.getElementById('moves-list');
  list.classList.toggle('reverse-list');
}
