// let animals = {
//   eats: true
// };

// let rabit = {
//   jump: true
// };

// rabit.__proto__ = animals; //sets raqbit.[[prototype]]=animals  ar prototype ekta objet bote

// console.log(rabit)
// console.log(rabit.eats)

class animal {
  constructor(name) {
    this.name=name
    console.log("objects is created...");
  }

  eats() {
    console.log("khachi");
  }
  jump() {
    console.log("lafha chi");
  }
}

class lion extends animal{
    constructor(name) {
        super(name)
        this.name=name
        console.log("objects is created and he is lion...");
      }
      eats() { 
        console.log("khachi bhai"); 
      }
}

let a = new animal("bunny");
console.log(a)
console.log(a.eats())
console.log(a.jump())

let l =new lion("shera")
console.log(l)
console.log(l.eats())

console.log(l instanceof lion)  //instanceof an operator
console.log(a instanceof lion)  //used to check the type of an objects at the run time