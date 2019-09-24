/**
 * @param {string} s
 * @return {string}
 */
var replaceSpaces = function(str) {
  return str.replace(/ /g, '%20');
};
console.log(replaceSpaces('We are happy!'));
