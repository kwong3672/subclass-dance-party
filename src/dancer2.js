var makeDancer2 = function(top, left, timeBetweenSteps) {
  //this.oldStep = makeDancer.prototype.step;  
  makeDancer.apply(this, arguments);
  this.$node.addClass('dancer2');
};

makeDancer2.prototype = Object.create(makeDancer.prototype);
makeDancer2.prototype.constructor = makeDancer2;

makeDancer2.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  // this.oldStep();
  // this.$node.toggle();

};

// makeDancer2.prototype.oldStep = function() {
//   makeDancer.prototype.step.call(this);
// };