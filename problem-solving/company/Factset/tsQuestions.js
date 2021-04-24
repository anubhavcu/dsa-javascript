var Greeter = /** @class */ (function () {
  function Greeter(message) {
    this.greeting = message;
  }
  Greeter.prototype.greet = function () {
    return 'hello, ' + this.greeting;
  };
  return Greeter;
})();
var greeter = new Greeter(1, 'World');
var button = document.createElement('button');
button.textContent = 'Say Hello';
button.onclick = function () {
  alert(greeter.greet());
};
document.body.appendChild(button);
// type Diff<T, U> = T extends U ? never : T;
// type Collection = 'a' | 'b' | 'c' ;
// type Selection = 'a' | 'b' ;
// Diff<Collection, Selection>
