import { getData } from "./config.js";
let allproducts = "";
// category products
const start = performance.now();

const allProducts = () => {
    const productData = getData("products");
    productData
        .then((product) => {
            if (product.exists()) {
                const products = product.val();
                Object.values(products).forEach((productItem) => {
                    allproducts += `<div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="product__item">
                        <div class="product__item__pic set-bg" data-setbg="${productItem.thumb[0]}" style="background-image: url('${productItem.thumb[0]}');">
                            <ul class="product__hover">
                                <li>
                                    <a href="#"><img src="img/icon/heart.png" alt="" /></a>
                                </li>
                                <li>
                                    <a href="shop-details.html?id_pro=${productItem.id_pro}"><img src="img/icon/compare.png" alt="" /> <span>Compare</span></a>
                                </li>
                                <li>
                                    <a href="#"><img src="img/icon/search.png" alt="" /></a>
                                </li>
                            </ul>
                        </div>
                        <div class="product__item__text">
                            <h6>${productItem.name}</h6>
                            <a href="#" class="add-cart">+ Thêm Vào Giỏ</a>
                            <div class="rating">
                                <i class="fa fa-star-o"></i>
                                <i class="fa fa-star-o"></i>
                                <i class="fa fa-star-o"></i>
                                <i class="fa fa-star-o"></i>
                                <i class="fa fa-star-o"></i>
                            </div>
                            <h5>${productItem.price}</h5>
                            <div class="product__color__select">
                                <label for="pc-4">
                                    <input type="radio" id="pc-4" />
                                </label>
                                <label class="active black" for="pc-5">
                                    <input type="radio" id="pc-5" />
                                </label>
                                <label class="grey" for="pc-6">
                                    <input type="radio" id="pc-6" />
                                </label>
                            </div>
                        </div>
                    </div>
                </div>`;
                });
                document.getElementById("product_cate").innerHTML = allproducts;
            } else {
                console.log("No data available");
            }
        })
        .catch((err) => {
            console.log(err);
        });
};
allProducts();
const end = performance.now();
const timeElapsed = end - start;
console.log(`Time elapsed: ${timeElapsed} milliseconds`);
