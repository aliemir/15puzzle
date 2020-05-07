import React from 'react'
import { HeaderWrapper } from '../elements/HeaderWrapper'

const Header: React.FC = ({ children }) => {
  return (
    <HeaderWrapper>
      <h1>15 Puzzle</h1>
      <div className='controls'>{children}</div>
    </HeaderWrapper>
  )
}

export default Header
