import { testables } from './game'

describe('can generate and shuffle', () => {
  const { MATRIX_SIZE, generate, shuffle } = testables
  it('generate', () => {
    const array = generate(false)
    expect(array).toHaveLength(MATRIX_SIZE * MATRIX_SIZE)
    expect(array).toContain(undefined)
    expect(array.filter((a) => a === undefined)).toHaveLength(1)
  })
  it('shuffle', () => {
    const generated = generate(false)
    const shuffled = shuffle(generated)
    expect(shuffled).toHaveLength(MATRIX_SIZE * MATRIX_SIZE)
    expect(shuffled).toContain(undefined)
    expect(shuffled.filter((a) => a === undefined)).toHaveLength(1)
  })
})

describe('check for solvable board', () => {
  const { isSolvable, generate, numberOfInversion } = testables
  const array1 = [13, 2, 10, 3, 1, 12, 8, 4, 5, undefined, 9, 6, 15, 14, 11, 7]
  const array2 = [6, 13, 7, 10, 8, 9, 11, undefined, 15, 2, 12, 5, 14, 3, 1, 4]
  const array3 = [3, 9, 1, 15, 14, 11, 4, 6, 13, undefined, 10, 12, 2, 7, 8, 5]
  it('returns correct number of inversions', () => {
    expect(numberOfInversion(array1)).toBe(41)
    expect(numberOfInversion(array2)).toBe(62)
    expect(numberOfInversion(array3)).toBe(56)
  })
  it('returns true if solvable', () => {
    expect(isSolvable(array1)).toBeTruthy()
    expect(isSolvable(array2)).toBeTruthy()
    expect(isSolvable(array3)).toBeFalsy()
  })
  it('shuffle returns solvable array', () => {
    const shuffled1 = generate(true)
    expect(isSolvable(shuffled1)).toBeTruthy()
  })
})

describe('find correct neighbors', () => {
  const { getNeighbors } = testables
  const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, undefined]
  it('neighbors of top left corner', () => {
    const ns = getNeighbors(array, 0)
    expect(ns).toHaveLength(2)
    expect(ns).toContain(1)
    expect(ns).toContain(4)
  })
  it('neighbors', () => {
    const ns = getNeighbors(array, 5)
    expect(ns).toHaveLength(4)
    expect(ns).toContain(4)
    expect(ns).toContain(6)
    expect(ns).toContain(1)
    expect(ns).toContain(9)
  })
  it('neighbors of bottom right', () => {
    const ns = getNeighbors(array, 15)
    expect(ns).toHaveLength(2)
    expect(ns).toContain(14)
    expect(ns).toContain(11)
  })
})

describe('canMove - is playable move ?', () => {
  const { canMove } = testables
  const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, undefined, 10, 11, 12, 13, 14, 15]
  it('returns true for correct indexes', () => {
    expect(canMove(array, 8)).toBeTruthy()
    expect(canMove(array, 10)).toBeTruthy()
    expect(canMove(array, 5)).toBeTruthy()
    expect(canMove(array, 13)).toBeTruthy()
  })
  it('returns false for non neighbor indexes', () => {
    expect(canMove(array, 4)).toBeFalsy()
    expect(canMove(array, 1)).toBeFalsy()
    expect(canMove(array, 11)).toBeFalsy()
  })
})

describe('moves correctly', () => {
  const { move } = testables
  const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, undefined, 10, 11, 12, 13, 14, 15]
  it('does not mutate original array', () => {
    move(array, 8)
    expect(array).toEqual(array)
  })
  it('returns same array in incorrect moves', () => {
    expect(move(array, 0)).toEqual(array)
    expect(move(array, 15)).toEqual(array)
    expect(move(array, 9)).toEqual(array)
  })
  it('returns mutated array in correct moves', () => {
    expect(move(array, 8)).toEqual([
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      undefined,
      8,
      10,
      11,
      12,
      13,
      14,
      15,
    ])
    expect(move(array, 5)).toEqual([
      0,
      1,
      2,
      3,
      4,
      undefined,
      6,
      7,
      8,
      5,
      10,
      11,
      12,
      13,
      14,
      15,
    ])
  })
})
