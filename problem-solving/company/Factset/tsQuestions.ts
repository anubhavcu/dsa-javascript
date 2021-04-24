class Greeter {
  greeting: any;
  constructor(message: string) {
    this.greeting = message;
  }
  constructor(num: number, message: string) {
    this.greeting = num + message;
  }

  greet() {
    return 'hello, ' + this.greeting;
  }
}

let greeter = new Greeter(1, 'World');
let button = document.createElement('button');
button.textContent = 'Say Hello';
button.onclick = function () {
  alert(greeter.greet());
};
document.body.appendChild(button);

// type Diff<T, U> = T extends U ? never : T;
// type Collection = 'a' | 'b' | 'c' ;
// type Selection = 'a' | 'b' ;

// Diff<Collection, Selection>
