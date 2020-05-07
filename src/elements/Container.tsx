import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  max-width: 500px;
  padding: 0 20px;
  box-sizing: border-box;
  .game-status {
    text-align: center;
    line-height: 24px;
    font-size: 24px;
    height: 0px;
    &.paused {
      height: 30px;
    }
    transition: 0.5s height ease;
    color: ${(props) => props.theme.colors.backgroundDark};
  }
`
