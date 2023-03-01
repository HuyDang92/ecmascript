// import module từ config.js
import { getData, removeData, setCat, setProduct, setUser, updateCat, updatePro } from "././config.js";
const getCategories = () => {
    const data = getData("categories");
    data.then((response) => {
        if (response.exists()) {
            const items = response.val();
            let sub_items = "";
            items.forEach((item, i) => {
                sub_items += ` <tr>
                <th scope="row">${item.id_cat}</th>
                <td>${item.name_cat}</td>
                <td class="event_fuct" style="display: flex;">
                    <div class="update_item_cat" style="cursor: pointer; margin-right: 1rem;" data-id-cat="${item.id_cat}" data-name-cat="${item.name_cat}">
                        <span title="Sửa" class="material-symbols-outlined">edit</span>
                    </div>
                    <div class="remove_item_cat" style="cursor: pointer;" data-id-cat="${item.id_cat}">
                        <span title="Xóa" class="material-symbols-outlined">delete</span>
                    </div>
                </td>
            </tr>`;
            });
            document.getElementById(`categories_list`).innerHTML = sub_items;
        } else {
            console.log("No data available");
        }
    })
        .then(() => {
            const table = document.querySelector("#categories_list");
            table.addEventListener("click", (e) => {
                e.preventDefault();
                const removeItemCat = e.target.closest(".remove_item_cat");
                if (removeItemCat) {
                    if (confirm("Bạn chắc chắn muốn xóa 1 danh mục ?")) {
                        removeItem("categories", removeItemCat.dataset.idCat);
                        let parentRemove_cat = removeItemCat.parentElement.parentElement;
                        parentRemove_cat.remove();
                        return;
                    }
                } else {
                    console.log("err");
                }
            });
            table.addEventListener("click", (e) => {
                e.preventDefault();
                const updateItemCat = e.target.closest(".update_item_cat");
                if (updateItemCat) {
                    updateCate(updateItemCat.dataset.idCat, updateItemCat.dataset.nameCat);
                    const form = document.getElementById("addCategoryForm");
                    form.style.display = "block";
                    form.scrollIntoView({ behavior: "smooth" });
                } else {
                    console.log("err");
                }
            });
        })
        .catch((err) => {
            console.log(err);
        });
};

const getProduct = () => {
    const data = getData("products");
    data.then((response) => {
        if (response.exists()) {
            const items = response.val();
            let sub_items = "";
            const categories = {
                1: "Nam",
                2: "Nữ",
                3: "Unisex",
            };
            items.forEach((item, i) => {
                const nameCat = categories[item.id_cat] || "";
                sub_items += ` <tr>
                <th scope="row">${item.id_pro}</th>
                <td>${nameCat}</td>
                <td>${item.name}</td>
                <td>${item.price}</td>
                <td><img style="width: 3rem;" src="../${item.thumb[0]}" alt=""></td>
                <td style="display: flex;">
                    <div class="update_item_pd" style="cursor: pointer;  margin-right: 1rem;" data-id-pro="${item.id_pro}">
                            <span title="Sửa" class="material-symbols-outlined">edit</span>
                    </div>
                    <div class="remove_item_pd" style="cursor: pointer;" data-id-pro="${item.id_pro}" >
                        <span title="Xóa" class="material-symbols-outlined">delete</span>
                    </div>
                </td>
            </tr>`;
            });
            document.getElementById(`products_list`).innerHTML = sub_items;
        } else {
            console.log("No data available");
        }
    })
        // Xóa item
        .then(() => {
            const table = document.querySelector("#products_list");
            table.addEventListener("click", (e) => {
                e.preventDefault();
                const removeItemPro = e.target.closest(".remove_item_pd");
                console.log(removeItemPro);
                if (removeItemPro) {
                    if (confirm("Bạn chắc chắn muốn xóa 1 sản phẩm ?")) {
                        removeItem("products", removeItemPro.dataset.idPro);
                        // Xóa 1 row trên html
                        let parentRemove_pro = removeItemPro.parentElement.parentElement;
                        parentRemove_pro.remove();
                        return;
                    }
                } else {
                    console.log("err");
                }
            });

            // update sản phẩm
            table.addEventListener("click", (e) => {
                e.preventDefault();
                const updateItemPro = e.target.closest(".update_item_pd");
                if (updateItemPro) {
                    const form = document.getElementById("addProductForm");
                    const imgs = document.querySelectorAll(".imgArr");
                    form.style.display = "block";
                    form.scrollIntoView({ behavior: "smooth" });
                    // Nếu mảng ảnh imgArr có thì xóa đi
                    if (!imgs) {
                        updateProduct(updateItemPro.dataset.idPro);
                    } else {
                        imgs.forEach((img) => {
                            img.remove();
                        });
                        updateProduct(updateItemPro.dataset.idPro);
                    }
                } else {
                    console.log("err");
                }
            });
        })
        .catch((err) => {
            console.log(err);
        });
};
const getUsers = () => {
    const data = getData("users");
    data.then((response) => {
        if (response.exists()) {
            const items = response.val();
            let sub_items = "";
            const role = {
                0: "Người dùng",
                1: "Nhân viên",
                2: "Admin",
            };
            items.forEach((item) => {
                const nameRole = role[item.role] || "";
                sub_items += ` <tr>
                <th scope="row">${item.id_user}</th>
                <td>${item.name}</td>
                <td>${item.email}</td>
                <td>${item.phone}</td>
                <td>${item.password}</td>
                <td>${nameRole}</td>
                <td style="display: flex;">
                    <div class="update_item_user" style="cursor: pointer;  margin-right: 1rem;" data-id-cat="${item.id_user}">
                        <span title="Sửa" class="material-symbols-outlined">edit</span>
                    </div>
                    <div class="remove_item_user" style="cursor: pointer;" data-id-user="${item.id_user}">
                        <span title="Xóa" class="material-symbols-outlined">delete</span>
                    </div>
                </td>
            </tr>`;
            });
            document.getElementById(`users_list`).innerHTML = sub_items;
        } else {
            console.log("No data available");
        }
    })
        .then(() => {
            const remove_items_user = document.querySelectorAll(".remove_item_user");
            remove_items_user.forEach((item) => {
                item.addEventListener("click", () => {
                    if (confirm("Bạn chắc chắn muốn xóa 1 người dùng ?")) {
                        removeItem("users", item.dataset.idUser);
                        let parentRemove_user = item.parentElement.parentElement;
                        parentRemove_user.remove();
                        return;
                    }
                });
            });
        })
        .catch((err) => {
            console.log(err);
        });
};
const removeItem = (type, index) => {
    removeData(`${type}/`, index)
        .then(() => {
            // alert("Xóa thành công");
            // location.reload();
        })
        .catch((error) => {
            alert(error);
        });
};
let eventSubmit = null;
const updateCate = (id_cat, name_cat) => {
    const formSubmit = document.getElementById("addCategoryForm");
    const idCategory = document.getElementById("catId");
    const nameCategory = document.getElementById("catName");
    const title = document.getElementById("title_form_cat");
    const btn = document.getElementById("btnSubmit");
    idCategory.value = id_cat;
    nameCategory.value = name_cat;
    title.innerHTML = "Sửa sản phẩm";
    btn.innerHTML = "Lưu thay đổi";
    if (eventSubmit) {
        formSubmit.removeEventListener("submit", eventSubmit);
    }
    eventSubmit = (event) => {
        event.preventDefault();
        updateCat(Number(idCategory.value), nameCategory.value);
    };
    formSubmit.addEventListener("submit", eventSubmit);
};
const updateProduct = async (id_pro) => {
    const data = await getData("products");
    const items = data.val();
    // Lấy ra sản phẩm với id tương ứng
    const foundPro = Object.values(items).find((proItem) => proItem.id_pro == id_pro);

    const formSubmit = document.getElementById("addProductForm");
    const img_mul = document.getElementById("edit_img");
    const productId = document.getElementById("productId");
    const catPro = document.getElementById("category");
    const productName = document.getElementById("productName");
    const pricePro = document.getElementById("price");
    const details = document.getElementById("details");
    const title = document.getElementById("title_form_pro");
    const btn = document.getElementById("btnSubmitProduct");
    const thumbs = document.querySelector("#thumb");
    // 2 biến ảnh cũ và ảnh mới
    const newImgs = [];
    const oldImgs = foundPro.thumb;

    // thumb là mảng các đường dẫn ảnh của sản phẩm
    foundPro.thumb.forEach((imgItemSrc) => {
        const img = document.createElement("img"); // Tạo phần tử <img> mới
        img.src = `../${imgItemSrc}`; // Gán đường dẫn ảnh vào thuộc tính src của phần tử <img>
        img.className = "imgArr"; // Thêm class 'imgArr' cho phần tử <img>
        img_mul.appendChild(img); // Thêm phần tử <img> vào phần tử có id = 'img-mul'
    });

    // Hàm này lấy các ảnh mới được chọn bởi người dùng, cập nhật đường dẫn ảnh vào mảng newImgs
    const imgs = document.querySelectorAll(".imgArr");
    imgs.forEach((img, i) => {
        // Gắn sự kiện onchange cho phần tử input file 'thumb'
        thumbs.addEventListener("change", function (event) {
            // Lấy danh sách các tệp tin ảnh được chọn bởi người dùng
            const files = Array.from(event.target.files);
            files.forEach((file, j) => {
                // Nếu chỉ số của phần tử <img> bằng với chỉ số của tệp tin ảnh được chọn bởi người dùng
                if (i === j) {
                    // Tạo một đối tượng FileReader để đọc tệp tin ảnh
                    const reader = new FileReader();
                    reader.onload = function (e) {
                        // Gán đường dẫn của ảnh được đọc vào thuộc tính src của phần tử <img>
                        img.src = e.target.result;
                        // Cập nhật đường dẫn ảnh mới vào mảng newImgs
                        newImgs[i] = `img/product/${file.name}`;
                    };
                    reader.readAsDataURL(file);
                }
                // Lưu đường dẫn ảnh mới vào mảng newImgs
            });
        });
    });

    // Gắn các giá trị tương ứng vào từng input
    productId.value = id_pro;
    catPro.value = foundPro.id_cat;
    productName.value = foundPro.name;
    pricePro.value = foundPro.price;
    details.value = foundPro.des;
    // Đổi text input submit
    title.innerHTML = "Sửa sản phẩm";
    btn.innerHTML = "Lưu thay đổi";

    // Hàm chặn submit mặc định của form
    const eventSubmit = (event) => {
        event.preventDefault();
        // Nếu ảnh mới được gán thì lấy dữ liệu ảnh mới không thì lấy mảng ảnh cũ
        const thumb_src = newImgs.length ? newImgs : oldImgs;
        updatePro(
            productId.value,
            catPro.value,
            productName.value,
            pricePro.value,
            thumb_src[0],
            thumb_src[1],
            thumb_src[2],
            thumb_src[3],
            details.value
        );
    };

    formSubmit.addEventListener("submit", eventSubmit);
};
const addItem = async () => {
    const tableCat = document.querySelector("#categories_list");
    const tablePro = document.querySelector("#products_list");
    const catData = await getData("categories");
    const proData = await getData("products");
    const cat = catData.val();
    const pro = proData.val();
    const catCount = Object.keys(cat).length; // số lượng categories
    const proCount = Object.keys(pro).length; // số lượng Product

    // Thêm danh mục
    document.getElementById("addCategoryForm").addEventListener("submit", (event) => {
        event.preventDefault();
        const nameCategory = document.getElementById("catName").value;
        setCat(catCount, nameCategory)
            .then(() => {
                const addHtml = ` <tr>
                    <th scope="row">${catCount + 1}</th>
                    <td>${nameCategory}</td>
                    <td class="event_fuct" style="display: flex;">
                        <div class="update_item_cat" style="cursor: pointer; margin-right: 1rem;" data-id-cat="${
                            catCount + 1
                        }" data-name-cat="${nameCategory}">
                            <span title="Sửa" class="material-symbols-outlined">edit</span>
                        </div>
                        <div class="remove_item_cat" style="cursor: pointer;" data-id-cat="${catCount + 1}">
                            <span title="Xóa" class="material-symbols-outlined">delete</span>
                        </div>
                    </td>
                </tr>`;
                tableCat.insertAdjacentHTML("beforeend", addHtml);
                alert("Thêm thành công");
                document.getElementById("addCategoryForm").style.display = "none";
                document.getElementById("addCategoryForm").reset();

                // location.reload();
            })
            .catch((error) => {
                alert(error);
            });
    });

    // Thêm sản phẩm
    document.getElementById("addProductForm").addEventListener("submit", (event) => {
        event.preventDefault();
        const catPro = document.getElementById("category").value;
        const productName = document.getElementById("productName").value;
        const price = document.getElementById("price").value;
        const arrthumb = document.getElementById("thumb").files;
        const details = document.getElementById("details").value;
        const thumb = Array.from(arrthumb);
        const categories = {
            1: "Nam",
            2: "Nữ",
            3: "Unisex",
        };
        setProduct(proCount, catPro, productName, price, thumb[0].name, thumb[1].name, thumb[2].name, thumb[3].name, details)
            .then(() => {
                const nameCat = categories[catPro] || "";
                const addHtml = ` <tr>
                                <th scope="row">${proCount + 1}</th>
                                <td>${nameCat}</td>
                                <td>${productName}</td>
                                <td>${price}</td>
                                <td><img style="width: 3rem;" src="../img/product/${thumb[0].name}" alt=""></td>
                                <td style="display: flex;">
                                    <div class="update_item_pd" style="cursor: pointer;  margin-right: 1rem;" data-id-pro="${proCount + 1}">
                                            <span title="Sửa" class="material-symbols-outlined">edit</span>
                                    </div>
                                    <div class="remove_item_pd" style="cursor: pointer;" data-id-pro="${proCount + 1}" >
                                        <span title="Xóa" class="material-symbols-outlined">delete</span>
                                    </div>
                                </td>
                            </tr>`;
                tablePro.insertAdjacentHTML("beforeend", addHtml);
                alert("Thêm thành công");
                document.getElementById("addProductForm").style.display = "none";
                document.getElementById("addProductForm").reset();

                // location.reload();
            })
            .catch((error) => {
                alert(error);
            });
    });

    // Thêm người dùng
    document.getElementById("addUserForm").addEventListener("submit", (event) => {
        event.preventDefault();
        const idUser = document.getElementById("id_user").value;
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const password = document.getElementById("password").value;
        const role = document.getElementById("role").value;
        setUser(idUser, name, email, phone, password, role);
    });
};
document.getElementById("btnAddCat").addEventListener("click", () => {
    const form = document.getElementById("addCategoryForm");
    if (form.style.display == "block") {
        location.reload();
    } else {
        form.style.display = "block";
        addItem();
    }
    form.scrollIntoView({ behavior: "smooth" });
});
document.getElementById("btnAddPro").addEventListener("click", () => {
    const form = document.getElementById("addProductForm");
    if (form.style.display == "block") {
        location.reload();
    } else {
        form.style.display = "block";
        addItem();
    }
    form.scrollIntoView({ behavior: "smooth" });
});
document.getElementById("btnAddUser").addEventListener("click", () => {
    const form = document.getElementById("addUserForm");
    if (form.style.display == "block") {
        location.reload();
    } else {
        form.style.display = "block";
        addItem();
    }
    form.scrollIntoView({ behavior: "smooth" });
});
getUsers();
getCategories();
getProduct();
