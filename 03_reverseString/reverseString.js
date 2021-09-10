const reverseString = function(str) {

stringAsArray = Array.from(str)
reversedArray = stringAsArray.reverse()
reversedString = reversedArray.join('')

return reversedString
};

module.exports = reverseString;
