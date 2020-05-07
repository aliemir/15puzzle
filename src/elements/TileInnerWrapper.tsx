import styled from 'styled-components'

interface TileInnerWrapperProps {
  readonly inplace?: boolean
  readonly shadow?: boolean
}

export const TileInnerWrapper = styled.button<TileInnerWrapperProps>`
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  border-radius: 6px;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 700;
  border: none;
  user-select: none;
  outline: none;
  cursor: pointer;
  font-size: min(11.5vmin, 105px);
  line-height: min(12vmin, 105px);
  font-family: 'Baloo 2', sans-serif;
  background: ${(props) =>
    props.inplace
      ? props.theme.colors.secondary
      : props.shadow
      ? props.theme.colors.backgroundDark
      : props.theme.colors.primary};
  transition-duration: 0.3s;
  transition-delay: 0.2s;
  transition-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
  transition-property: background-color;
`
