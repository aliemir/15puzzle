import styled from 'styled-components'

export const Button = styled.button`
  border: none;
  background: ${(props) => props.theme.colors.backgroundDark};
  outline: none;
  border-radius: 6px;
  padding: 10px 15px;
  font-family: 'Baloo 2', sans-serif;
  font-weight: 700;
  color: white;
  text-decoration: none;
  user-select: none;
  cursor: pointer;
`
