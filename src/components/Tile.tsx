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
          className='number-tile'
          name={`tile ${row}-${col} value ${value}`}
          inplace={index + 1 === value}
          onClick={() => onClick(index)}
        >
          {value}
        </TileInnerWrapper>
      </TileWrapper>
    </>
  )
}

export const ShadowTile: React.FC<{ col: number; row: number }> = ({
  col,
  row,
}) => {
  return (
    <>
      <TileWrapper row={row} col={col}>
        <TileInnerWrapper
          shadow
          aria-hidden='true'
          role='none/presentation'
          name='shadow tile'
        ></TileInnerWrapper>
      </TileWrapper>
    </>
  )
}

export default React.memo(Tile)
