import styled from 'styled-components'

export const FooterWrapper = styled.footer`
  text-align: center;
  padding-top: 10px;
  border-top: 2px solid ${(props) => props.theme.colors.backgroundDark};
  margin-top: 20px;
  button {
    cursor: pointer;
    padding: 10px;
    outline: none;
    border: none;
    background: none;
    margin: 0 10px;
  }
`
