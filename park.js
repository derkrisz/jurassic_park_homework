const Park = function() {
  this.enclosure = [];
};

Park.prototype.addDino = function(dinosaur) {
  this.enclosure.push(dinosaur)
};

Park.prototype.countDinosaurs = function() {
  return this.enclosure.length;
};

Park.prototype.removeSameDinos = function(type) {
  for (dinosaur of this.enclosure) {
    if (type === dinosaur.type) {
      this.enclosure.splice(type, 1);
    }
  }
};

Park.prototype.getDinosByOffspring = function(offspringNum) {
  let sortedDinos = [];
  for (dinosaur of this.enclosure) {
    if (dinosaur.offspring > offspringNum) {
      sortedDinos.push(dinosaur);
    }
  }
  return sortedDinos;
};

module.exports = Park;
