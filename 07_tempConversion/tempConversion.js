const ftoc = function (farenheit) {
  let celcius = (farenheit - 32) * (5 / 9)
  celcius = Math.round(celcius * 10) / 10
  return celcius
}

const ctof = function (celcius) {
  let farenheit = celcius * (9/5) + 32
  farenheit = Math.round(farenheit * 10) / 10
  return farenheit
}

module.exports = {
  ftoc,
  ctof
}
