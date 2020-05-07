import styled from 'styled-components'

export interface TileWrapperProps {
  readonly col: number
  readonly row: number
}

export const TileWrapper = styled.div<TileWrapperProps>`
  width: 25%;
  height: 25%;
  position: absolute;
  padding: 0.5vmin;
  box-sizing: border-box;
  top: ${(props) => props.col * 25}%;
  left: ${(props) => props.row * 25}%;
  transition-duration: 0.3s;
  transition-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
  transition-property: top, left;
  z-index: 1;

  .board-shadow & {
    z-index: 0;
  }
`
