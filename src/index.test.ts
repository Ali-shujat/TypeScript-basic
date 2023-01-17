import 'mocha'
import assert from 'assert'

import {
  greet,
  isOldPerson,
  countOdd,
  sumEven,
  Person,
  Address,
  getPersonStreetNo,
  PersonClass,
  EmployeeClass,
  IPerson,
  getPersonNameString,
  optionallyAdd,
  greetPeople,
  addToStart
} from './index'

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
    const is34Old = isOldPerson(34)
    const is35Old = isOldPerson(35)
    const is36Old = isOldPerson(36)

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
  it('gets the street number for a person', () => {
    // arrange
    const p: Person = {
      name: 'Marcus',
      birthYear: 1972,
      address: {
        street: 'Strålgatan',
        streetNo: 23,
        city: 'Stockholm'
      }
    }
    // act
    const streetNo = getPersonStreetNo(p)

    // assert
    assert.strictEqual(streetNo, 23)
  })
  // test class
  it('using classes', () => {
    // arrange
    const p = new PersonClass('Marcus', 1972)
    const e = new EmployeeClass('Marcus Employee', 1972)

    // act
    e.employeeId = 12345

    // assert
    assert.strictEqual(p.name, 'Marcus')
    assert.strictEqual(p.getName(), 'Marcus')
    assert.strictEqual(e.getName(), 'Marcus Employee')
    assert.strictEqual(e.employeeId, 12345)
  })
  // test Interface
  it('prints an IPerson', () => {
    // arrange
    const p1: IPerson = { name: 'Marcus', birthYear: 1972 }
    const p2 = { name: 'David', birthYear: 1975, drummer: true }

    // act
    const p1Address = getPersonNameString(p1)
    const p2Address = getPersonNameString(p2)

    // assert
    assert.strictEqual(p1Address, 'Marcus, 1972')
    assert.strictEqual(p2Address, 'David, 1975')
  })
  // Optional parameters are just a variant of nullable value
  it('optional parameters', () => {
    // act
    const sum = optionallyAdd(1, 2, 3, 4, 5)
    // assert
    assert.strictEqual(sum, 3)
  })
  // rest parameters
  it('rest parameters - print names', () => {
    // act
    const greeting1 = greetPeople('Hello')
    const greeting2 = greetPeople('Hello', 'Marcus')
    const greeting3 = greetPeople('Hello', 'Marcus', 'Dasha')
    const greeting4 = greetPeople('Hello', 'Marcus', 'Dasha', 'David')
    const greeting5 = greetPeople('Hello', 'Marcus', 'Dasha', 'David', 'Julia', 'Wietse', 'Lucas')

    // assert
    assert.strictEqual(greeting1, 'Hello')
    assert.strictEqual(greeting2, 'Hello Marcus')
    assert.strictEqual(greeting3, 'Hello Marcus and Dasha')
    assert.strictEqual(greeting4, 'Hello Marcus and Dasha and David')
    assert.strictEqual(greeting5, 'Hello Marcus and Dasha and David and Julia and Wietse and Lucas')
  })
  it('add to list', () => {
    // arrange
    const listOfPeople: IPerson[] = [
      { name: 'Marcus', birthYear: 1972 }
    ]
    const listOfAddresses: Address[] = [
      { street: 'Strålgatan', streetNo: 23, city: 'Stockholm' },
      { street: 'SchraeschazschStrasse', streetNo: 2, city: 'Amsterdam' }
    ]

    // act
    const numberOfPeople = addToStart<IPerson>(listOfPeople, { name: 'David', birthYear: 1975 })
    const numberOfAddresses = addToStart<Address>(listOfAddresses, { street: 'Champs Elysee', streetNo: 1, city: 'Paris' })
    // assert
    assert.strictEqual(numberOfPeople[0].name, 'David')
    assert.strictEqual(numberOfAddresses[0].city, 'Paris')
  })
})
