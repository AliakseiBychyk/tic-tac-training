import React, { Component } from 'react'
import { Stage } from 'react-konva'
import { Board, Squares } from '../styled/TicTacToe'
import { access } from 'fs';

class TicTacToe extends Component {

  constructor(props) {
    super(props)
    this.combos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
  }

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

  move = (index, marker) => {
    console.log('Move me!', index, marker)
  }

  makeAiMove = (gameState) => { 
    const otherMark = this.state.otherMark
    const openSquares = gameState.reduce((acc, square, i) => {
      return !square ? acc.push(i) : acc
    }, [])
    const aiMove = openSquares[this.random(0, openSquares.length)]
    this.move(aiMove, otherMark)
  }

  random = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
  }

  /**
   * checks if the marked fields match to winning combos
   * @param {Array} array of booleans 
   */
  winChecker = (gameState) => {
    const combos = this.combos
    return combos.find(combo => {
      const [a, b, c] = combo
      return (
        gameState[a] === gameState[b] && gameState[a] === gameState[c] && gameState[a])
    })
  }
  
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