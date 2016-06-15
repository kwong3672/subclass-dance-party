var makeCatDancer = function(top, left, timeBetweenSteps) {
  //this.oldStep = makeDancer.prototype.step;  
  makeDancer.apply(this, arguments);
  this.$node.addClass('catDancer');
};

makeCatDancer.prototype = Object.create(makeDancer.prototype);
makeCatDancer.prototype.constructor = makeCatDancer;

makeCatDancer.prototype.step = function() {

};

