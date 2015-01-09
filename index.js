
module.exports = function arrayIter(arr) {
  return arr[Symbol.iterator]();
}
