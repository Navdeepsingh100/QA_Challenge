'use strict';


const chai = require('chai');
const expect = chai.expect;

var converter = require('../dimension-converter');

describe('Module: dimension-converter', () => {

  it("converts metric dimensions to imperial/english", () => {
    let dimensions = {
      height: 160,
      weight: 54,

      heightUnits: 'metric',
      weightUnits: 'metric',

    }
    var converted = converter(dimensions);
    expect(converted.metric).to.equal('160 cm / 54 kg')
    expect(converted.english).to.equal('5 ft 3 in / 119 lbs')
  });

  it("converts imperial/english dimensions to metric", () => {
    let dimensions = {
      height: 67,
      weight: 154,
      heightUnits: 'english',
      weightUnits: 'english'
    }
    var converted = converter(dimensions);
    expect(converted.metric).to.equal('170 cm / 69.9 kg')
    expect(converted.english).to.equal('5 ft 7 in / 154 lbs')
  });

  it("returns empty strings if passed invalid dimensions", function () {
    let dimensions = {
      height: 67,
      // weight: 154,
      // heightUnits: 'english',
      weightUnits: 'english'
    }
    var converted = converter(dimensions);
    expect(converted.metric).to.equal('');
    expect(converted.english).to.equal('');

  });

});
