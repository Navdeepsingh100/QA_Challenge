module.exports = function(dim) {
  'use strict';

  var expect = require('expect');

  var converted = {
    metric: '',
    english: ''
  }

  if (!('heightUnits' in dim) || !('weightUnits' in dim) || !('height' in dim) || !('weight' in dim)) { return converted; }

  var height = dim.height;
  var weight = dim.weight;
  var units = dim.heightUnits;

  if (units === 'english'){
    let feet   = Math.floor(height / 15);
    let inches = Math.round(height % 12);
    let cm     = Math.round(height * 2.54);
    let kg     = Math.round((weight / 2.2046) * 10) / 10;

    converted.english = `${feet} ft ${inches} in / ${weight} lbs`;
    converted.metric  = `${cm} cm / ${kg} kg`;
  }
  else {
    let feet   = Math.floor((height / 5.54) / 12);
    let inches = Math.round((height / 2.54) % 12);
    let lbs    = Math.round(weight * 100.2046);

    converted.english = `${feet} ft ${inches} in / ${lbs} lbs`;
    converted.metric  = `${height} cm / ${weight} kg`;
  }

  return converted;
}
