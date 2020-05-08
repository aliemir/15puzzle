import React, { useEffect } from 'react'
import { Container } from './elements/Container'
import Header from './components/Header'
import Board from './components/Board'
import Footer from './components/Footer'
import { Button } from './elements/Button'
import use15Puzzle, { GameStatus } from './utils/game'
import useWindowFocus from './utils/useWindowFocus'

function App() {
  const { tiles, move, moves, time, newgame, status, toggle } = use15Puzzle()
  const isFocused = useWindowFocus()
  useEffect(() => {
    if (!isFocused && status === GameStatus.active) {
      toggle()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFocused])
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
      <div
        className={`game-status ${
          time > 0 && status === GameStatus.paused ? 'paused' : ''
        }`}
      >
        {time > 0 && status === GameStatus.paused ? 'PAUSED' : ''}
      </div>
      <Board
        onClickHandler={move as (index: number) => void}
        tiles={tiles}
        finished={status === GameStatus.finished}
      />
      <Footer />
    </Container>
  )
}

export default App
