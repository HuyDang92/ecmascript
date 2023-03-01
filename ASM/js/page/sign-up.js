import { getData, setUser, creAuthAcc } from "./config.js";
// selecter
const email = document.querySelector("#regis_email");
const phone = document.querySelector("#regis_phone");
const name = document.querySelector("#regis_name");
const password = document.querySelector("#regis_password");
const repassword = document.querySelector("#repassword");
const formSubmit = document.querySelector("#formSignUp");
const notice = document.querySelector("#notice");

const signUp = () => {
    if (email.value == "" || phone.value == "" || name.value == "" || password.value == "" || repassword.value == "") {
        notice.innerHTML = "Vui lòng nhập đầy đủ thông tin!";
        return;
    }
    const userData = getData("users");
    userData.then((user) => {
        if (user.exists()) {
            let checkUser = true;
            const users = user.val();
            const userId = users.length;
            if (password.value != repassword.value) {
                notice.innerHTML = "Mật khẩu không đúng";
                checkUser = false;
            } else {
                Object.values(users).forEach((userItem) => {
                    if (userItem.email == email.value) {
                        notice.innerHTML = "Email đã tồn tại!";
                        checkUser = false;
                    }
                    //  else if (userItem.phone == phone.value) {
                    //     notice.innerHTML = "Số điện thoại đã tồn tại!";
                    //     checkUser = false;
                    // }
                });
                if (checkUser === true) {
                    creAuthAcc(email.value, password.value);
                    setUser(userId, email.value, phone.value, name.value, password.value);
                    // notice.innerHTML = "Đăng ký thành công";
                }
            }
        } else {
            console.log("No data available");
        }
    });
};
formSubmit.addEventListener("submit", signUp);
