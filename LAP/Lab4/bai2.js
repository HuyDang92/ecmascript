const axios = require("axios");

// 1
async function fetchUrls(urls) {
    const results = [];
    for (const url of urls) {
        const res = await axios.get(url);
        results.push(res.data); // Thêm dữ liệu trả về vào mảng results
    }
    return results;
}

// 2
async function fetchUrlsParallel(urls) {
    const promises = urls.map((url) => axios.get(url)); // Tạo mảng promises chứa các promise từ axios.get
    const results = await Promise.all(promises); // Chờ tất cả các promise hoàn thành
    return results.map((res) => res.data); // Trả về dữ liệu trả về từ mỗi promise
}
