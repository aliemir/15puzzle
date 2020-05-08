import React from 'react'
import { FooterWrapper } from '../elements/FooterWrapper'
import { GithubSVG, TwitterSVG } from './Icons'

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <button
        name='go to github'
        onClick={() => (window.location.href = 'https://github.com/aliemir')}
      >
        <GithubSVG />
      </button>
      <button
        name='go to twitter'
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
