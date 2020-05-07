import React from 'react'
import { FooterWrapper } from '../elements/FooterWrapper'
import { GithubSVG, TwitterSVG } from './Icons'

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <a href='https://github.com/aliemir'>
        <GithubSVG />
      </a>
      <a href='https://twitter.com/aliemirsen'>
        <TwitterSVG />
      </a>
    </FooterWrapper>
  )
}

export default Footer
