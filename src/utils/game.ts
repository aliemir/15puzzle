import React, { useState, useEffect } from 'react'
import useInterval from './useInterval'

const MATRIX_SIZE = 4

export interface NumberTile {
  col: number
  row: number
  value: number
  index: number
}

export enum GameStatus {
  paused = 'PAUSED',
  active = 'ACTIVE',
}

type GameArray = Array<number | undefined>

const _shuffle = (array: GameArray) => {
  const newArray = [...array]
  for (let i = newArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1))
    ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
  }
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
  const [tiles, setTiles] = useState<NumberTile[] | undefined>(undefined)
  const [status, setStatus] = useState<GameStatus>(GameStatus.paused)
  const [time, setTime] = useState<number>(0)
  const [moves, setMoves] = useState<number>(0)
  setTiles(_generateTiles(array))

  useInterval(
    () => {
      setTime((t) => t + 1)
    },
    status === GameStatus.active ? 1000 : null
  )

  useEffect(() => {
    setTiles(_generateTiles(array))
  }, [array])

  const move = (index: number): void => {
    const newArray = _move(array, index)
    if (JSON.stringify(newArray) !== JSON.stringify(array)) {
      setArray(newArray)
      setMoves((prev) => prev + 1)
    }
  }

  const newgame = (): void => {
    setArray(_generate())
  }

  const toggle = (): void => {
    setStatus(
      status === GameStatus.active ? GameStatus.paused : GameStatus.active
    )
  }

  return [tiles, moves, time, newgame, toggle]
}

export default use15Puzzle

export const testables = {
  MATRIX_SIZE: MATRIX_SIZE,
  generate: _generate,
  shuffle: _shuffle,
  getNeighbors: _getNeighbors,
  canMove: _canMove,
  move: _move,
}
