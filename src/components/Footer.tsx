import React from 'react'
import { FooterWrapper } from '../elements/FooterWrapper'
import { GithubSVG, TwitterSVG } from './Icons'

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <button
        onClick={() => (window.location.href = 'https://github.com/aliemir')}
      >
        <GithubSVG />
      </button>
      <button
        onClick={() =>
          (window.location.href = 'https://twitter.com/aliemirsen')
        }
      >
        <TwitterSVG />
      </button>
    </FooterWrapper>
  )
}

export default Footer
