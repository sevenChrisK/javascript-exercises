const repeatString = function (string, num) {
  let outputString = string
  
  for (i = 0; i < num - 1; i++) {
    outputString += string
  }

if (num === 0) {
      outputString = ''
  } else if (num < 0) {
      outputString = 'ERROR'
  }


  return outputString
}

module.exports = repeatString
