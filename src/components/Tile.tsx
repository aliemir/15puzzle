import React from 'react'
import { TileWrapper } from '../elements/TileWrapper'
import { TileInnerWrapper } from '../elements/TileInnerWrapper'
import { NumberTile } from '../utils/game'

export interface TileProps extends NumberTile {
  onClick: (index: number) => void
}

const Tile: React.FC<TileProps> = ({ col, row, value, index, onClick }) => {
  return (
    <>
      <TileWrapper row={row} col={col}>
        <TileInnerWrapper
          inplace={index + 1 === value}
          onClick={() => onClick(index)}
        >
          {value}
        </TileInnerWrapper>
      </TileWrapper>
    </>
  )
}

export default React.memo(Tile)
