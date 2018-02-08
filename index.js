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
    if (isArray(omitted)) {
      // This function doesn't allow to use an array as a property.
      continue;
    }
    delete dest[omitted];
  }
  return dest;
}

module.exports = omit;
