const removeFromArray = function (inputArray, ...targets) {
  for (i = 0; i < targets.length; i++) {
    targetPos = inputArray.indexOf(targets[i])
    if (targetPos == -1) {
        continue
    } 
    inputArray.splice(targetPos, 1)
  }

  return inputArray
}

module.exports = removeFromArray
