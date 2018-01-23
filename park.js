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

module.exports = Park;
