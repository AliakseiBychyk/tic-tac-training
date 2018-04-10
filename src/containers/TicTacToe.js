import React, { Component } from 'react'
import { Stage } from 'react-konva'
import { Board, Squares } from '../styled/TicTacToe'
import { access } from 'fs';

class TicTacToe extends Component {
  state = {
    rows: 3,
    gameState: new Array(9).fill(false),
    ownMark: 'X',
    otherMark: 'O',
    gameOver: false,
    yourTurn: true,
    winner: false,
    win: false,
    size: 0,
    unit: 0,
    coordinates: []
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const height = window.innerHeight
    const width = window.innerWidth
    const size = (height < width) ? height * .8 : width * .8
    const rows = prevState.rows
    const unit = size / rows
    const rowsArray = [...Array(rows).keys()]
    const coordinates = rowsArray.reduce((acc, y) => {
      rowsArray.forEach(x => {
        acc.push([x * unit, y * unit])
      })
      return acc
    }, [])

    return {
      size,
      rows,
      unit,
      coordinates,
    }
  }

  move = (marker, index) => {
    console.log('Move me!', marker, index)
  }

  makeAiMove = () => { }
  
  turingTest = () => { }
  
  recordGame = () => { }

  
  render() {
    let {
      size,
      unit,
      rows,
      coordinates,
      gameState,
      win,
      gameOver,
      yourTurn,
      ownMark
    } = this.state

    return (
      <div>
        <Stage
          width={size}
          height={size}
        >  
          <Board
            unit={unit}
            rows={rows}
            size={size}
          />
          <Squares
            unit={unit}
            coordinates={coordinates}
            gameState={gameState}
            win={win}
            gameOver={gameOver}
            yourTurn={yourTurn}
            ownMark={ownMark}
            move={this.move}
          />
        </Stage>  
      </div>
    )
  }    
}
export default TicTacToe