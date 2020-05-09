import styled from 'styled-components'

export const BoardWrapper = styled.div`
  width: 100%;
  position: relative;
  padding-bottom: 100%;
  position: relative;
  .overlay {
    visibility: visible;
    opacity: 1;
    text-align: center;
    transition-duration: 0.3s;
    transition-property: visibility, opacity;
    transition-timing-function: ease;
    background: ${(props) => props.theme.colors.backgroundDark + 'cc'};
    text-shadow: ${(props) => `0px 2px 0px ${props.theme.colors.backgroundDark},
    0px -2px 0px ${props.theme.colors.backgroundDark}, 2px 0px 0px ${props.theme.colors.backgroundDark},
    -2px 0px 0px ${props.theme.colors.backgroundDark}`};
    border-radius: 8px;
    box-sizing: border-box;
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 11vmin;
  }
`
