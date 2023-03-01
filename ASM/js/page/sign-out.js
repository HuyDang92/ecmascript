let content = document.getElementById("log_in");
var email_user = localStorage.getItem("email_user");
var admin = localStorage.getItem("admin_mode");
if (!!admin) {
    content.innerHTML = `<a target=”_blank” href="admin/index.html">Admin</a> 
                     <a id="sign_out" href="">Đăng Xuất</a>`;
} else if (!!email_user) {
    content.innerHTML = `<a target=”_blank” href="admin/profile.html">Tài Khoản</a> 
                     <a id="sign_out" href="">Đăng Xuất</a>`;
} else {
    content.innerHTML = `<a href="sign-in.html">Đăng Nhập</a>
    <a href="">FAQs</a> `;
}
console.log(email_user);
// đăng xuất
var signOutBtn = document.querySelector("#sign_out");
const sign_out = () => {
    localStorage.removeItem("email_user");
    localStorage.removeItem("admin_mode");
};
signOutBtn.addEventListener("click", sign_out);

