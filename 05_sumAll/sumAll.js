const sumAll = function (num1, num2) {
  let finalSum = num1
  const startingNum = num1

  if (
    num1 < 0 ||
    num2 < 0 ||
    Number.isInteger(num1) == false ||
    Number.isInteger(num2) == false
  ) {
    return 'ERROR'
  } else {
    if (num1 < num2) {
      for (i = num1; i <= num2; i++) {
        finalSum += num1
        num1++
      }
    } else if (num1 > num2) {
      for (i = num1; i >= num2; i--) {
        finalSum += num1
        num1--
      }
    }

    return finalSum - startingNum
  }
}

module.exports = sumAll
