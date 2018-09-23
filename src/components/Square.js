import React from 'react';
import './Square.css';
class Square extends React.Component{
    render(){
        let { isHighlight, pos , disable, value } = this.props;
        let _className = isHighlight ? 'square-highlight' : 'square-normal';
        return (
            <div className={_className} onClick={() => {
                if (!disable) this.props.handleClick(pos)
                else return
            }}>
                {value}
            </div>
        )
    }
}

export default Square;