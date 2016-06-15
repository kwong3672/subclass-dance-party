var makeSlothDancer = function(top, left, timeBetweenSteps) {
  makeDancer.apply(this, arguments);
  this.$node.addClass('slothDancer');
};

makeSlothDancer.prototype = Object.create(makeDancer.prototype);
makeSlothDancer.prototype.constructor = makeSlothDancer;

makeSlothDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);


};