import styled from 'styled-components'

interface TileInnerWrapperProps {
  readonly inplace: boolean
}

export const TileInnerWrapper = styled.button<TileInnerWrapperProps>`
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  border: none;
  user-select: none;
  outline: none;
  cursor: pointer;
  font-size: 11vmin;
  font-family: sans-serif;
  background: ${(props) => (props.inplace ? 'blue' : 'orange')};
  transition-duration: 0.3s;
  transition-delay: 0.2s;
  transition-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
  transition-property: background-color;

  .board-shadow & {
    background: darkblue;
  }
`
