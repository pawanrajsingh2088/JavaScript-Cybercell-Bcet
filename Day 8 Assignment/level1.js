let dog = {};
console.log(dog);
dog.name = "Tommy";
dog.legs = 5;
dog.color = "Brown";
dog.age = "7";
dog.bark = function () {
  return "brauk brauk";
};
console.log(dog.name, dog.legs, dog.color, dog.age, dog.bark());
dog.breed = "German Shefard";
dog.getDogInfo = () =>
  `Dog Name: ${dog.name}\nDog Breed: ${dog.breed}\nDog Color: ${dog.color}\nDog Bark: ${dog.bark}`;
console.log(dog);