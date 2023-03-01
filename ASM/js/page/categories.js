import { getData } from "./config.js";

let sub_cat = "";
const allcategories = () => {
    const catData = getData("categories");
    catData
        .then((cate) => {
            if (cate.exists()) {
                const [men, women, ...categories] = cate.val();
                categories.forEach((catItem) => {
                    sub_cat += `<li class="sub_category">
                            <a  href="shop.html?id_category=${catItem.id_cat}">${catItem.name_cat}</a>
                            </li>`;
                });
                document.getElementById("sub_cat").innerHTML = sub_cat;
            } else {
                console.log("No data available");
            }
        })
        .catch((err) => {
            console.log(err);
        });
};
allcategories();
//
