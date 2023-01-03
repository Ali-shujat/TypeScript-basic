import 'mocha'
import assert from 'assert'

import { greet, isOld, countOdd, sumEven } from './index'

describe('ts tests', () => {
  it('sum event numbers', () => {
    // arrange
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    // act
    const sum = sumEven(nums)

    // arrange
    assert.strictEqual(sum, 30)
  })
  it('count odd numbers', () => {
    // arrange
    const firstFive = [1, 2, 3, 4, 5, 6, 7]

    // act
    const numberOfOdds = countOdd(firstFive)

    // arrange
    assert.strictEqual(numberOfOdds, 4)
  })
  it('get greeting', () => {
    // arrange
    const birthYear = 1972
    const name = 'Marcus'

    // act
    const result = greet(name, birthYear)

    // assert
    assert.strictEqual(result, 'Hello Marcus, you are 51 years old')
  })
  it('returns true if age is above 35', () => {
    // act
    const is34Old = isOld(34)
    const is35Old = isOld(35)
    const is36Old = isOld(36)

    // assert
    assert.strictEqual(is34Old, false)
    assert.strictEqual(is35Old, true)
    assert.strictEqual(is36Old, true)
  })
  it('fun with variables', () => {
    // act
    const name: string = 'Marcus'
    const nameImplicit = 'Marcus'
    const nameImplicit2 = name

    const cool: boolean = true
    const birthYear = 1972

    // arrange
    assert.strictEqual(typeof (cool), 'boolean')
    assert.strictEqual(typeof (birthYear), 'number')
    assert.strictEqual(typeof (name), 'string')
    assert.strictEqual(typeof (nameImplicit), 'string')
    assert.strictEqual(typeof (nameImplicit2), 'string')
  })
})
