import React from 'react';

import './History.css'
class History extends React.Component {
    render() {
        let { history, cur } = this.props;
        return (
            <div className="historyContainer">
                <h1>Lịch sử</h1>
                <div style={{height: 200, marginLeft: 20}}>
                    {
                        history.map((item, index) => <li key={index} className={cur === item.pos ? "highlightItem" : ''}>{item.value} - ({Math.floor(item.pos / 3) + 1},{(item.pos % 3) + 1})</li>)
                    }
                </div>
                <div onClick={this.props.changeSort} style={{fontSize: 20, backgroundColor: 'green', height: '30px', lineHeight: '30px', marginLeft: 20}}>
                    <div>Thay Doi</div>
                </div>
            </div>
        )
    }
}

export default History;