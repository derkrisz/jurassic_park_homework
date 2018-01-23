const Park = function() {
  this.enclosure = [];
}

Park.prototype.addDino = function(dinosaur) {
  this.enclosure.push(dinosaur)
}

module.exports = Park;
