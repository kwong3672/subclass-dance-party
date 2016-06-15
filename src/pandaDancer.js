

var makePandaDancer = function(top, left, timeBetweenSteps) {
  makeDancer.apply(this, arguments);
  this.$node.addClass('pandaDancer');
};

makePandaDancer.prototype = Object.create(makeDancer.prototype);
makePandaDancer.prototype.constructor = makePandaDancer;

makePandaDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);

};