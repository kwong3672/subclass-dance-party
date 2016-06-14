var makeDancer1 = function(top, left, timeBetweenSteps) {
  //this.oldStep = makeDancer.prototype.step;  
  makeDancer.apply(this, arguments);
};

makeDancer1.prototype = Object.create(makeDancer.prototype);
makeDancer1.prototype.constructor = makeDancer1;

makeDancer1.prototype.step = function() {
  this.oldStep();
  this.$node.toggle();

};

makeDancer1.prototype.oldStep = function() {
  makeDancer.prototype.step.call(this);
};