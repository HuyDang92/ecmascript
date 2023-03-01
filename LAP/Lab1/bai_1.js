var person1 = {
    name: "Đặng Huỳnh Huy",
    age: 19,
    print() {
        console.log(`I'm ${this.name}. I'm ${this.age}`);
    },
};
person1.print();

var person2 = {
    name: "Nguyễn Thanh Tài",
    age: 19,
    print() {
        console.log(`I'm ${this.name}. I'm ${this.age}`);
    },
};
person2.print();

// var persons = [
//     {
//         name: "Đặng Huỳnh Huy",
//         age: 19,
//     },
//     {
//         name: "Nguyễn Thanh Tài",
//         age: 19,
//     },
//     {
//         name: "Nguyễn Vũ Lân",
//         age: 19,
//     },
// ];
// persons.forEach(function (person) {
//     console.log(`I'm ${person.name}. I'm ${person.age}`);
// });

var persons = function (name, age) {
    this.name = name;
    this.age = age;

    this.getName = () => {
        return `I'm ${this.name}. I'm ${this.age}`;
    };
};

var person1 = new persons("Đặng Huỳnh Huy", 19);
var person2 = new persons("Nguyễn Thanh Tài", 19);

console.log(person1.getName(), person2.getName());
