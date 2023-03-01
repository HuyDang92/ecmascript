import { getData, signAuthAcc } from "./config.js";

const emailInput = document.querySelector("#log_email");
const passwordInput = document.querySelector("#log_password");
const notice = document.querySelector("#notice");
const loginForm = document.querySelector("#loginform");

const logIn = async () => {
    const usersData = await getData("users");
    const users = usersData.val();

    if (!emailInput.value || !passwordInput.value) {
        notice.innerHTML = "Vui lòng điền đầy đủ thông tin";
        return;
    }
    const foundUser = Object.values(users).find((user) => user.email === emailInput.value);
    signAuthAcc(emailInput.value, passwordInput.value)
        .then((userCredential) => {
            // Signed in
            // const user = userCredential.user;
            if (foundUser.role == 2) {
                localStorage.setItem("admin_mode", emailInput.value);
            } else {
                localStorage.setItem("email_user", emailInput.value);
            }
            location.replace("index.html");
        })
        .catch((error) => {
            const errorCode = error.code;
            alert("Tài khoản hoặc mật khẩu không đúng!");
        });

    // if (!foundUser) {
    //     notice.innerHTML = "Tài khoản hoặc mật khẩu không đúng";
    //     return;
    // }

    // if (foundUser.password !== passwordInput.value) {
    //     notice.innerHTML = "Tài khoản hoặc mật khẩu không đúng";
    //     return;
    // }
};

loginForm.addEventListener("submit", logIn);
