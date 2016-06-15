var makeDogDancer = function(top, left, timeBetweenSteps) {
  makeDancer.apply(this, arguments);
  this.$node.addClass('dogDancer');
};

makeDogDancer.prototype = Object.create(makeDancer.prototype);
makeDogDancer.prototype.constructor = makeDogDancer;

makeDogDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);


};
