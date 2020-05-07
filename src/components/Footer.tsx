import React from 'react'
import { FooterWrapper } from '../elements/FooterWrapper'
import { GithubSVG, TwitterSVG } from './Icons'

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <button
        className='go-to-github-profile'
        onClick={() => (window.location.href = 'https://github.com/aliemir')}
      >
        <GithubSVG />
      </button>
      <button
        className='go-to-twitter-profile'
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
