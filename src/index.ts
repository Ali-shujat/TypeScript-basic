export const greet = (name: string, birthYear: number): string =>
`Hello ${name}, you are ${new Date().getFullYear() - birthYear} years old`

const isOld = (age: number): boolean => age >= 35
export { isOld as isOldPerson }

const countOdd = (firstFive: number[]): number =>
  firstFive.filter((num) => num % 2 === 1).length

const sumEven = (arr: number[]): number =>
  arr.filter(num => num % 2 === 0)
    .reduce((sum, curr) => sum + curr, 0)

interface Address {
  street: string
  streetNo: number
  city: string
}

interface Person {
  name: string
  birthYear: number
  address: Address
}

interface IPerson {
  name: string
  birthYear: number
}

const getPersonStreetNo = (p: Person): number =>
  p.address.streetNo

class PersonClass {
  readonly name: string = ''
  birthYear: number = 1970
  constructor (name: string, birthYear: number) {
    this.name = name
    this.birthYear = birthYear
  }

  getName (): string {
    return this.name
  }
}
class EmployeeClass extends PersonClass {
  employeeId: number = -1
}
const getPersonNameString = (p: IPerson): string =>
 `${p.name}, ${p.birthYear.toString()}`

const optionallyAdd = (num1: number, num2: number, num3?: number, num4?: number, num5?: number): number =>
  num1 + num2

const greetPeople = (greeting: string, ...names: string[]): string => {
  return `${greeting} ${names.join(' and ')}`.trim()
}
const addToStart = <T>(list: T[], itemToAdd: T): T[] => {
  return [itemToAdd, ...list]
}
export {
  countOdd,
  sumEven,
  Address,
  Person,
  getPersonStreetNo,
  PersonClass,
  EmployeeClass,
  IPerson,
  getPersonNameString,
  optionallyAdd,
  greetPeople,
  addToStart
}
