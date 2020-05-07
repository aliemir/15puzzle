import styled from 'styled-components'
import { Button } from './Button'

export const HeaderWrapper = styled.header`
  // text-align: center;
  padding: 20px 0;

  h1 {
    margin: 0;
    padding-bottom: 10px;
    font-size: 40px;
    font-weight: 700;
    color: ${(props) => props.theme.colors.backgroundDark};
  }

  .controls {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    ${Button} {
      flex: 1;
      margin-right: 10px;
      font-size: 18px;
    }

    .status {
      background: ${(props) => props.theme.colors.backgroundDark};
      display: flex;
      flex-direction: row;
      border-radius: 6px;
      padding: 0 5px;

      .time,
      .moves {
        text-align: right;
        padding: 2px 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: white;
        font-weight: bold;
        .title {
          font-weight: 500;
        }
      }
    }
  }
`
