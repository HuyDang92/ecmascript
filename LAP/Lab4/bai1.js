// Khởi tạo một promise
let promise = new Promise((resolve, reject) => {
    // Resolve sẽ được gọi khi thành công
    resolve("Success");
    // Reject sẽ được gọi khi bị lỗi
    reject("Error");
    // resolve will be called after 1s
    setTimeout(() => resolve("2"), 1000);
});

// Call promise then and catch to handle success and failure
promise
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    });
