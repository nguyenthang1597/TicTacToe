import React from 'react';
import Board from '../components/Board';
import History from '../components/History';
import './Game.css';
class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            board: Array(9).fill(null),
            isXNext: true,
            history: [],
            reverseHistory: [],
            cur: null,
            isAsc: true
        }
        this.handleClick = this.handleClick.bind(this);
        this.changeSort = this.changeSort.bind(this);
    }
    handleClick(pos) {
        let { board, isXNext, history, reverseHistory } = this.state;
        if (board[pos])
            return;
        let value = isXNext ? "X" : "O";
        let _board = [...board];
        _board[pos] = value;
        this.setState({
            isXNext: !isXNext,
            board: _board,
            history: [...history, { value: value, pos: pos }],
            reverseHistory: [{ value: value, pos: pos }, ...reverseHistory],
            cur: pos
        })
    }
    changeSort() {
        this.setState({
            isAsc: !this.state.isAsc
        })
    }
    render() {
        let highlights = calculateWinner(this.state.board);
        let draw = isDraw(this.state.board);
        return (
            <div>
                <div>
                    <div className="container">
                        <Board isWin={highlights ? true : false} handleClick={this.handleClick} board={this.state.board} highlights={highlights} />
                        <History changeSort={this.changeSort} history={this.state.isAsc ? this.state.history : this.state.reverseHistory} cur={this.state.cur} />
                    </div>

                </div>
                <div style={{ textAlign: "center", height: '100px', lineHeight: '100px', width: '600px', fontSize: 40 }}>
                    {highlights && <div>Người thắng là {this.state.isXNext ? "O" : "X"}</div>}
                    {(!highlights && draw) && <div>Game Hoà</div>}
                </div>
            </div>

        );
    }
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return lines[i];
        }
    }
    return null;
}

function isDraw(squares){
    return squares.indexOf(null) === -1;
}


export default Game;