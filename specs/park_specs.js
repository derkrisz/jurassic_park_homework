const assert = require('assert');
const Dinosaur = require('../dinosaur.js');
const Park = require('../park.js')

describe('Park', function(){

  var park;
  var dinosaur1;
  var dinosaur2;
  var dinosaur3;

  beforeEach (function(){
    park = new Park;
    dinosaur1 = new Dinosaur("Velociraptor", 2);
    dinosaur2 = new Dinosaur("Apatosaurus", 3);
    dinosaur3 = new Dinosaur("Triceratops", 1);
  });

  it('park enclosure is empty', function(){
    assert.strictEqual(park.enclosure.length, 0);
  });
  });
