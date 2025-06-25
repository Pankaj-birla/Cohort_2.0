
class Animal {
  constructor(name, legCount,bark) {
    this.name = name
    this.legCount = legCount
    this.bark =  bark
  }
  describe() {
    return `${this.name} has ${this.legCount} legs`
  }
  static sound(name,bark){
     return `${name} says ${bark}`
  }
}
const obj = new Animal("Dog",4,"Bhow Bhow");

// console.log(obj.describe());

console.log(Animal.sound("Dog","Bhow Bhow"));


