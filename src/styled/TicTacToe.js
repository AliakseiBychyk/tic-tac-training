import React from 'react'
import { Layer, Line, Text } from 'react-konva'

export const Board = ({ unit, size, rows }) => {
  let stroke = 'grey'
  let strokeWidth = 10

  const grid = [...new Array(rows - 1).keys()]
    .reduce((acc, el) => {
      const position = unit * (el + 1)
      acc.push(
        <Line
          points={[position, 0, position, size]}
          stroke={stroke}
          strokeWidth={strokeWidth}
          key={el+'v'}
        />
      )
      acc.push(
        <Line
          points={[0, position, size, position]}
          stroke={stroke}
          strokeWidth={strokeWidth}
          key={el+'h'}
        />
      )
      return acc
    }, [])

  return (
    <Layer>
      {grid}
    </Layer>
  )
}

export const Squares = ({
  unit,
  coordinates,
  gameState,
  win,
  gameOver,
  yourTurn,
  ownMark,
  move,
}) => {
  const squares = coordinates.map((position, index) => {
    const makeMove = ( gameOver || !yourTurn || mark )
      ? () => console.log('nope!')
      : move
    const mark = gameState[index]
    const fill = win && win.includes(index) ? 'lightgreen' : 'black'
    
    return (
      <Text
        key={index}
        index={index}
        x={position[0]}
        y={position[1]}
        fontSize={unit}
        width={unit}
        text={mark}
        fill={fill}
        fontFamily={'Helvetica'}
        align={'center'}
        onClick={(event) => {
          let index = event.target.index
          makeMove(index, ownMark)
        }}
      />
    )
  })
  
  return (
    <Layer>
      {squares}
    </Layer>
  )
}