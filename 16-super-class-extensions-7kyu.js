class Animal { 
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    return this.name + ' makes a noise, ' + this.name + ' goes meow.';
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name)
  }
}