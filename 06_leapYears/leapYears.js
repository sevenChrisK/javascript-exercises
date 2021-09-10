const leapYears = function (year) {
  let isLP

  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    isLP = true
  } else {
    isLP = false
  }

  return isLP
}

module.exports = leapYears
