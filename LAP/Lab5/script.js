//  Bài 1 Giải thích từ khóa this
/*  Khái niệm: 
    Trong JavaScript, this là một từ khóa đặc biệt được sử dụng để tham chiếu đến đối
    tượng hiện tại mà phương thức hoặc hàm đang được gọi. Giá trị của this phụ thuộc vào 
    cách phương thức hoặc hàm được gọi.
 */
// 1. Khi một phương thức được gọi trên một đối tượng, giá trị của this sẽ là đối tượng đó.
const person = {
    name: "John",
    sayHi() {
        console.log(`Hi, my name is ${this.name}`);
    },
};

person.sayHi(); // Hi, my name is John

/* 2. Khi một hàm đơn giản được gọi trực tiếp, giá trị của this sẽ là đối
        tượng toàn cục (window trong trình duyệt hoặc global trong Node.js).
*/
function sayHi() {
    console.log(`Hi, my name is ${this.name}`);
}

sayHi(); // Hi, my name is undefined

// 3. Khi sử dụng phương thức call, apply, hoặc bind, giá trị của this có thể được ràng buộc với một đối tượng cụ thể.
const person1 = {
    name: "John",
};

const person2 = {
    name: "Jane",
};

function sayHi() {
    console.log(`Hi, my name is ${this.name}`);
}

sayHi.call(person1); // Hi, my name is John
sayHi.call(person2); // Hi, my name is Jane

// Bài 2
class shape {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
// Bài 3
class Clock {
    constructor({ template }) {
        this.template = template;
        this.timer;
    }
    render() {
        let date = new Date();

        let hours = date.getHours();
        if (hours < 10) hours = "0" + hours;

        let mins = date.getMinutes();
        if (mins < 10) mins = "0" + mins;

        let secs = date.getSeconds();
        if (secs < 10) secs = "0" + secs;

        let output = this.template.replace("h", hours).replace("m", mins).replace("s", secs);

        console.log(output);
    }
    stop() {
        clearInterval(this.timer);
    }
    start() {
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
    }
}

let clock = new Clock({ template: "h:m:s" });
clock.start();
// Bài 3
class Employee {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    // Setter method for fullName
    set fullName(name) {
        let splitName = name.split(" ");
        this.firstName = splitName[0];
        this.lastName = splitName[1];
    }

    // Getter method for fullName
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

// Khởi tạo một đối tượng Employee
let emp = new Employee("Albert", "Einstein");

// Sử dụng getter để lấy giá trị của thuộc tính fullName
console.log(emp.fullName); // John Doe

// Sử dụng setter để thay đổi giá trị của thuộc tính fullName
emp.fullName = "Issac Newton";

// Sử dụng lại getter để kiểm tra giá trị đã thay đổi
console.log(emp.fullName); // Jane Smith
