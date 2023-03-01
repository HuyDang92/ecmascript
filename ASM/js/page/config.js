import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, get, set, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

export const firebaseConfig = {
    apiKey: "AIzaSyAru7tNQY9zPualUHDQTnJbrpByCSzzEys",
    authDomain: "asm-ecmascript-8f3d9.firebaseapp.com",
    databaseURL: "https://asm-ecmascript-8f3d9-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "asm-ecmascript-8f3d9",
    storageBucket: "asm-ecmascript-8f3d9.appspot.com",
    messagingSenderId: "573047132449",
    appId: "1:573047132449:web:9cf6e2f971e9aa99bb6e60",
    measurementId: "G-M85E8MBST0",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth();
// Hàm lấy dữ liệu từ databse
export const getData = (path) => {
    return get(ref(db, `${path}`));
};
// Hàm xóa dữ liệu từ database
export const removeData = (path, id_user) => {
    remove(ref(db, `${path}` + id_user));
};
// Hàm thêm dữ liệu user
export const setUser = (id_user, email, phone, name, password) => {
    set(ref(db, "users/" + id_user), {
        id_user: id_user,
        email: email,
        sdt: phone,
        name: name,
        password: password,
        avatar: "/img/clients/avatar_1.jpg",
        role: 0,
    });
};
export const creAuthAcc = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            // const user = userCredential.user;
            alert("Đăng ký thành công");
            location.replace("sign-in.html");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
};
export const signAuthAcc = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
};
