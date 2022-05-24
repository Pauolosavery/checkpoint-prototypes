const Animal = require('./animal');

function Cat(name, fuckingAge = 1) {
  Animal.call(this, name, fuckingAge);
}

Object.setPrototypeOf(Cat.prototype, Animal.prototype);

Cat.prototype.say = function () {
  return 'мяу!';
};

module.exports = Cat;
