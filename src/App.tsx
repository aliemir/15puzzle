import React from 'react'
import { Container } from './elements/Container'
import Header from './components/Header'
import Board from './components/Board'
import Footer from './components/Footer'
import { Button } from './elements/Button'
import use15Puzzle from './utils/game'

function App() {
  const { tiles, move, moves, time, newgame } = use15Puzzle()
  return (
    <Container>
      <Header>
        <Button onClick={newgame}>new game</Button>
        <div className='status' style={{ display: 'flex' }}>
          <div className='time'>
            <div className='title'>time</div>
            <div className='value'>{time}s</div>
          </div>
          <div className='moves'>
            <div className='title'>moves</div>
            <div className='value'>{moves}</div>
          </div>
        </div>
      </Header>
      <Board onClickHandler={move as (index: number) => void} tiles={tiles} />
      <Footer />
    </Container>
  )
}

export default App
