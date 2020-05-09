import { useState, useEffect } from 'react'
import useInterval from './useInterval'
import useMemoizedCallback from './useMemoizedCallback'

export const MATRIX_SIZE = 4

export interface NumberTile {
  col: number
  row: number
  value: number
  index: number
}

export enum GameStatus {
  paused = 'PAUSED',
  active = 'ACTIVE',
  finished = 'FINISHED',
}

type GameArray = Array<number | undefined>

const _numberOfInversion = (array: GameArray): number => {
  let count = 0
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] && array[i] && (array[i] ?? 0) > (array[j] ?? 0)) {
        count++
      }
    }
  }
  return count
}

const _isSolvable = (array: GameArray): boolean => {
  const inversionCount = _numberOfInversion(array)
  const emptyIndex = array.findIndex((a) => a === undefined)
  const emptyRow = Math.floor(emptyIndex / MATRIX_SIZE)
  if (MATRIX_SIZE % 2 === 0) {
    return (
      (emptyRow % 2 === 0 && inversionCount % 2 === 1) ||
      (emptyRow % 2 === 1 && inversionCount % 2 === 0)
    )
  } else {
    return inversionCount % 2 === 0
  }
}

const _shuffle = (array: GameArray) => {
  const newArray = [...array]
  let solvable = false
  const _shuffleFunction = () => {
    for (let i = newArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1))
      ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
    }
  }
  do {
    _shuffleFunction()
    solvable = _isSolvable(newArray)
  } while (!solvable)
  return newArray
}

const _generate = (withShuffle: boolean = true): GameArray => {
  const arr = Array.from({ length: MATRIX_SIZE * MATRIX_SIZE }, (_, i) =>
    i + 1 === MATRIX_SIZE * MATRIX_SIZE ? undefined : i + 1
  )
  if (withShuffle) {
    return _shuffle(arr)
  } else {
    return arr
  }
}

const _getNeighbors = (array: GameArray, index: number): GameArray => {
  const neighborsIndexes: number[] = []

  const emptyRow = index % MATRIX_SIZE
  const emptyCol = Math.floor(index / MATRIX_SIZE)

  if (emptyRow === 0) {
    neighborsIndexes.push(index + 1)
  } else if (emptyRow === MATRIX_SIZE - 1) {
    neighborsIndexes.push(index - 1)
  } else {
    neighborsIndexes.push(index + 1, index - 1)
  }

  if (emptyCol === 0) {
    neighborsIndexes.push(index + MATRIX_SIZE)
  } else if (emptyCol === MATRIX_SIZE - 1) {
    neighborsIndexes.push(index - MATRIX_SIZE)
  } else {
    neighborsIndexes.push(index + MATRIX_SIZE, index - MATRIX_SIZE)
  }

  return neighborsIndexes
}

const _canMove = (array: GameArray, index: number): boolean => {
  const emptyIndex = array.findIndex((el) => el === undefined)
  if (
    index === emptyIndex ||
    index < 0 ||
    index > MATRIX_SIZE * MATRIX_SIZE - 1
  ) {
    return false
  }
  const neighborsIndexes: GameArray = _getNeighbors(array, emptyIndex)
  return neighborsIndexes.includes(index)
}

const _move = (array: GameArray, index: number): GameArray => {
  if (_canMove(array, index)) {
    const newArray = [...array]
    const emptyIndex = newArray.findIndex((n) => n === undefined)

    ;[newArray[index], newArray[emptyIndex]] = [
      newArray[emptyIndex],
      newArray[index],
    ]
    return newArray
  } else {
    return array
  }
}

const _generateTiles = (array: GameArray): NumberTile[] => {
  return [...array]
    .map(
      (num, i) =>
        ({
          row: i % MATRIX_SIZE,
          col: Math.floor(i / MATRIX_SIZE),
          value: num,
          index: i,
        } as NumberTile)
    )
    .filter((tile) => tile.value !== undefined)
}

const use15Puzzle = () => {
  const [array, setArray] = useState<GameArray>(_generate())
  const [tiles, setTiles] = useState<NumberTile[]>([])
  const [status, setStatus] = useState<GameStatus>(GameStatus.paused)
  const [time, setTime] = useState<number>(0)
  const [moves, setMoves] = useState<number>(0)

  useInterval(
    () => {
      setTime((t) => t + 1)
    },
    status === GameStatus.active ? 1000 : null
  )

  useEffect(() => {
    setTiles(_generateTiles(array).sort((a, b) => a.value - b.value))
    const isFinished = array.every(
      (item, i) => item === i + 1 || item === undefined
    )
    if (isFinished) setStatus(GameStatus.finished)
  }, [array])

  const move = useMemoizedCallback((index: number) => {
    if (status === GameStatus.paused) {
      setStatus(GameStatus.active)
    }
    const newArray = _move(array, index)
    if (JSON.stringify(newArray) !== JSON.stringify(array)) {
      setArray(newArray)
      setMoves((prev) => prev + 1)
    }
  })

  const newgame = (): void => {
    setArray(_generate())
    setStatus(GameStatus.paused)
    setMoves(0)
    setTime(0)
  }

  const toggle = (): void => {
    setStatus(
      status === GameStatus.active ? GameStatus.paused : GameStatus.active
    )
  }

  return {
    tiles,
    move: move,
    moves,
    time,
    status,
    newgame,
    toggle,
  }
}

export default use15Puzzle

export const testables = {
  MATRIX_SIZE: MATRIX_SIZE,
  generate: _generate,
  shuffle: _shuffle,
  isSolvable: _isSolvable,
  numberOfInversion: _numberOfInversion,
  getNeighbors: _getNeighbors,
  canMove: _canMove,
  move: _move,
}
