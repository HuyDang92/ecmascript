import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, get, set, update, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

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
export const removeData = (path, id) => {
    const index = id - 1;
    return remove(ref(db, `${path}/` + index));
};
// Hàm thêm dữ liệu category
export const setCat = (id_cat, name_cat) => {
    const index = id_cat + 1;
    return set(ref(db, "categories/" + id_cat), {
        id_cat: index,
        name_cat: name_cat,
    });
};
// Hàm thêm dữ liệu user
export const setUser = (id_user, name, email, phone, password, role) => {
    const index = id_user - 1;
    set(ref(db, "users/" + index), {
        id_user: id_user,
        email: email,
        phone: phone,
        name: name,
        password: password,
        avatar: "/img/clients/avatar_1.jpg",
        role: role,
    })
        .then(() => {
            alert("Thêm thành công");
            location.reload();
        })
        .catch((error) => {
            alert(error);
        });
};
// Hàm thêm dữ liệu product
export const setProduct = (id_pro, id_cat, name, price, thumb1, thumb2, thumb3, thumb4, des) => {
    const index = id_pro + 1;
    return set(ref(db, "products/" + id_pro), {
        id_pro: index,
        id_cat: id_cat,
        name: name,
        price: price,
        des: des,
        thumb: {
            0: `img/product/${thumb1}`,
            1: `img/product/${thumb2}`,
            2: `img/product/${thumb3}`,
            3: `img/product/${thumb4}`,
        },
    });
    // .then(() => {
    //     alert("Thêm thành công");
    //     location.reload();
    // })
    // .catch((error) => {
    //     alert(error);
    // });
};
// Hàm sửa dữ liệu category
export const updateCat = (id_cat, name_cat) => {
    console.log(id_cat, name_cat);
    const index = id_cat - 1;
    update(ref(db, "categories/" + index), {
        id_cat: id_cat,
        name_cat: name_cat,
    })
        .then(() => {
            alert("Sửa thành công");
            location.reload();
        })
        .catch((error) => {
            alert(error);
        });
};
// Hàm sửa dữ liệu product
export const updatePro = (id_pro, id_cat, name, price, thumb1, thumb2, thumb3, thumb4, des) => {
    const index = id_pro - 1;
    update(ref(db, "products/" + index), {
        id_pro: id_pro,
        id_cat: id_cat,
        name: name,
        price: price,
        des: des,
        thumb: {
            0: thumb1,
            1: thumb2,
            2: thumb3,
            3: thumb4,
        },
    })
        .then(() => {
            alert("Sửa thành công");
            location.reload();
        })
        .catch((error) => {
            alert(error);
        });
};
// CHỉnh sửa thông tin cá nhân
export const updateInfo = (id_user, email, phone, name) => {
    const index = id_user - 1;
    update(ref(db, "users/" + index), {
        id_user: id_user,
        email: email,
        sdt: phone,
        name: name,
    })
        .then(() => {
            alert("Sửa thành công");
            location.reload();
        })
        .catch((error) => {
            alert(error);
        });
};
// đổi mật khẩu
export const changePW = (id_user, password) => {
    const index = id_user - 1;
    update(ref(db, "users/" + index), {
        id_user: id_user,
        password: password,
    })
        .then(() => {
            alert("Đổi mật khẩu thành công");
            location.reload();
        })
        .catch((error) => {
            alert(error);
        });
};
