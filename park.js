const Park = function() {
  this.enclosure = [];
};

Park.prototype.addDino = function(dinosaur) {
  this.enclosure.push(dinosaur)
};

Park.prototype.countDinosaurs = function() {
  return this.enclosure.length;
};

module.exports = Park;
