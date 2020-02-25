import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css'

class Board extends Component {
    render() {
        return (
            <div className="board">
                {this.props.board.map((box, index) => {
                    return (<div onClick={() => this.props.boxClicked(index)} className="box"> <h3 className="piece"> {box} </h3></div>)
                })}
            </div>
        )
    }
}

const mapState = state => ({
    player_piece: state.board.player_piece,
    board: state.board.board,
})

const mapDispatch = dispatch => ({
    boxClicked: (index) => dispatch.board.boxClicked(index)
})

export default connect(mapState,mapDispatch)(Board);
