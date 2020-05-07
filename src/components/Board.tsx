import React from 'react'
import { NumberTile } from '../utils/game'
import { BoardWrapper } from '../elements/BoardWrapper'
import Tile from './Tile'

export interface BoardProps {
  onClick: () => void
  tiles: NumberTile[]
}

const Board: React.FC<BoardProps> = ({ tiles, onClick }) => {
  return (
    <BoardWrapper>
      {tiles.map((tile) => (
        <Tile
          index={tile.index}
          col={tile.col}
          row={tile.row}
          value={tile.value}
          onClick={onClick}
          key={tile.value}
        />
      ))}
    </BoardWrapper>
  )
}

export default Board
