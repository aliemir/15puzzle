import styled from 'styled-components'

export const TileInnerWrapper = styled.button`
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
  background: orange;

  .board-shadow & {
    background: darkblue;
  }
`
