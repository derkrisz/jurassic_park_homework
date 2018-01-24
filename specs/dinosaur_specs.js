const assert = require('assert');
const Dinosaur = require('../dinosaur.js');

describe('Dinosaur', function (){

  var dinosaur;

  beforeEach (function(){
    dinosaur = new Dinosaur("Velociraptor", 2);
  });

  it('dinosaur has type', function(){
    assert.strictEqual(dinosaur.type, "Velociraptor");
  });

  it('dinosaur has offspring(s)', function(){
    assert.strictEqual(dinosaur.offspring, 2);
  });
});
