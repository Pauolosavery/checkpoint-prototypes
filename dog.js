const Animal = require('./animal');

function Dog(fuckingName, fuckingAge = 2) {
  Animal.call(this, fuckingName, fuckingAge);
  // this.say = 'гав!';
}

Object.setPrototypeOf(Dog.prototype, Animal.prototype);

Dog.prototype.say = function () {
  // return this.say;
  return 'гав!';
};

module.exports = Dog;
