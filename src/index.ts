function greet (name: string, birthYear: number): string {
  const age = new Date().getFullYear() - birthYear
  return `Hello ${name}, you are ${age} years old`
}
function isOld (age: number): boolean {
  return age >= 35
}
function countOdd (firstFive: number[]): number {
  const odds = firstFive.filter((num) => num % 2 === 1)
  return odds.length
}
function sumEven (arr: number[]): number {
  return arr
    .filter(num => num % 2 === 0)
    .reduce((sum, curr) => sum + curr, 0)
}
export {
  greet, isOld, countOdd, sumEven
}
