var arr = [1, 2, 3, 4, 5, 6, 7];
const sum = (arr) => {
    var sum = 0;
    let newArr = [...arr];
    newArr.forEach((item) => {
        sum += item;
    });
    return sum;
};
console.log(sum(arr));
