import React from 'react';
import './Board.css';
import Square from './Square';
class Board extends React.Component{
    render(){
        let {board, highlights, isWin} = this.props;
        return (
            <div className="board">
                {
                    board.map((item, index) => <Square key={index} pos={index} disable={isWin} isHighlight={highlights && highlights.indexOf(index) >=0 ? true : false} value={item} handleClick={this.props.handleClick}/>)
                }
            </div>
        );
    }
}

export default Board;