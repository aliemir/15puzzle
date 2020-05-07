import React from 'react'
import { Container } from './elements/Container'
import Header from './components/Header'
import Board from './components/Board'
import Footer from './components/Footer'
import { Button } from './elements/Button'
import use15Puzzle, { GameStatus } from './utils/game'

function App() {
  const { tiles, move, moves, time, status, newgame, toggle } = use15Puzzle()
  return (
    <Container>
      <Header>
        <Button onClick={toggle}>
          {status === GameStatus.active ? '||' : '>'}
        </Button>
        <Button onClick={newgame}>New Game</Button>
        <div className='game-status' style={{ display: 'flex' }}>
          <div className='time'>Time: {time}</div>
          <div className='moves'>Moves: {moves}</div>
        </div>
      </Header>
      <Board onClickHandler={move as (index: number) => void} tiles={tiles} />
      <Footer />
    </Container>
  )
}

export default App
