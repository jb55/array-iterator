function arrayIterNative(arr) {
  return arr[Symbol.iterator]();
}

function* arrayIter(arr) {
  for (var i = 0, len = arr.length; i < len; i++) yield arr[i];
}

module.exports = typeof Symbol === 'undefined' || typeof Symbol.iterator === 'undefined' ? arrayIter : arrayIterNative;
