'use strict';

var assign = require('@fav/prop.assign');
var isArray = require('@fav/type.is-array');

function omit(src, omittedProps) {
  var dest = assign({}, src);

  if (!isArray(omittedProps)) {
    return dest;
  }

  for (var j = 0, nj = omittedProps.length; j < nj; j++) {
    var omitted = omittedProps[j];
    try {
      delete dest[omitted];
    } catch (e) {
      // If `omitted` is an array of Symbol, dest[omitted] throws an error,
      // but this function suppress it.
    }
  }
  return dest;
}

module.exports = omit;
