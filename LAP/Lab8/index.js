import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, get, set, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

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
// Hàm lấy dữ liệu từ databse
export const getData = (path) => {
    return get(ref(db, `${path}`));
};
// Hàm xóa dữ liệu từ database
export const removeData = (path, id_user) => {
    remove(ref(db, `${path}` + id_user));
};