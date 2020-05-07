import React from 'react'
import { NumberTile, MATRIX_SIZE } from '../utils/game'
import { BoardWrapper } from '../elements/BoardWrapper'
import Tile, { ShadowTile } from './Tile'

export interface BoardProps {
  onClickHandler: (index: number) => void
  tiles: NumberTile[]
}

const shadowArray = Array.from(
  { length: MATRIX_SIZE * MATRIX_SIZE },
  (_, i) => ({
    value: 'shadow' + (i + 1),
    row: i % MATRIX_SIZE,
    col: Math.floor(i / MATRIX_SIZE),
  })
)

const Board: React.FC<BoardProps> = ({ tiles, onClickHandler }) => {
  return (
    <BoardWrapper>
      {shadowArray.map((st) => (
        <ShadowTile key={st.value} col={st.col} row={st.row} />
      ))}
      {tiles.map((tile) => (
        <Tile
          index={tile.index}
          col={tile.col}
          row={tile.row}
          value={tile.value}
          onClick={onClickHandler}
          key={tile.value}
        />
      ))}
    </BoardWrapper>
  )
}

export default Board
