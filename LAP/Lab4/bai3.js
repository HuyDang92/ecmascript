const fs = require("fs");
const axios = require("axios");
/**

loadData là hàm nghiệp vụ chính.
Thực hiện lấy dữ liệu từ disk và từ đường dẫn.
Sau đó, in ra dữ liệu đã lấy về.
*/
async function loadData() {
    try {
        const dataFromDisk = await new Promise((resolve, reject) => {
            fs.readFile("./data.json", { encoding: "utf8" }, (err, data) => {
                if (err) reject(err);
                else resolve(data);
            });
        });
        console.log("Data loaded from disk", dataFromDisk);

        const dataFromUrl = await axios.get("https://jsonplaceholder.typicode.com/users/1");
        console.log("Data download from url", dataFromUrl.data);
    } catch (err) {
        console.error(err);
    }
}

loadData();
