var entity = function (name, delay) {
    this.name = name;
    this.delay = delay;
};

entity.prototype.greet = function () {
    setTimeout(() => {
        console.log(`Hello, I'm ${this.name}`);
    }, this.delay);
};

var java = new entity("Java", 5000);
var cpp = new entity("C++", 3000);

java.greet();
cpp.greet();
