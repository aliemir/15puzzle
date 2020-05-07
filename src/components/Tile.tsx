import React from 'react'
import { TileWrapper } from '../elements/TileWrapper'
import { TileInnerWrapper } from '../elements/TileInnerWrapper'
import { NumberTile } from '../utils/game'

export interface TileProps extends NumberTile {
  onClick: () => void
}

const Tile: React.FC<TileProps> = ({ col, row, value, onClick }) => {
  return (
    <>
      <TileWrapper row={row} col={col}>
        <TileInnerWrapper onClick={onClick}>{value}</TileInnerWrapper>
      </TileWrapper>
    </>
  )
}

export default React.memo(Tile)
