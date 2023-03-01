import { getData } from "./config.js";
let product_feature = "";
const featureProducts = () => {
    const productData = getData("products");
    productData
        .then((product) => {
            if (product.exists()) {
                const products = product.val();
                Object.values(products).forEach((productItem) => {
                    let thumbs = productItem.thumb.filter((thumb) => thumb);
                    if (productItem.id_cat == 1) {
                        product_feature += ` <div class="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix new-arrivals">
                            <div class="product__item">
                                    <div class="product__item__pic set-bg" data-setbg="${thumbs[0]}" style="background-image: url('${thumbs[0]}');">
                                        <span class="label">New</span>
                                        <ul class="product__hover">
                                            <li>
                                                <a href="#">
                                                    <img src="img/icon/heart.png" alt="" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="shop-details.html?id_pro=${productItem.id_pro}">
                                                    <img src="img/icon/compare.png" alt="" /> <span>Compare</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img src="img/icon/search.png" alt="" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                <div class="product__item__text">
                                    <h6>${productItem.name}</h6>
                                    <a href="#" class="add-cart">
                                        + Thêm vào giỏ
                                    </a>
                                    <div class="rating">
                                        <i class="fa fa-star-o"></i>
                                        <i class="fa fa-star-o"></i>
                                        <i class="fa fa-star-o"></i>
                                        <i class="fa fa-star-o"></i>
                                        <i class="fa fa-star-o"></i>
                                    </div>
                                    <h5>${productItem.price}đ</h5>
                                    <div class="product__color__select">
                                        <label for="pc-1">
                                            <input type="radio" id="pc-1" />
                                        </label>
                                        <label class="active black" for="pc-2">
                                            <input type="radio" id="pc-2" />
                                        </label>
                                        <label class="grey" for="pc-3">
                                            <input type="radio" id="pc-3" />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>`;
                    } else if (productItem.id_cat == 2) {
                        product_feature += ` <div class="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix hot-sales">
                        <div class="product__item sale">
                            <div class="product__item__pic set-bg" data-setbg="${thumbs[0]}" style="background-image: url('${thumbs[0]}');">
                                <span class="label">Sale</span>
                                <ul class="product__hover">
                                    <li>
                                        <a href="#">
                                            <img src="img/icon/heart.png" alt="" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="shop-details.html?id_pro=${productItem.id_pro}">
                                            <img src="img/icon/compare.png" alt="" /> <span>Compare</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="img/icon/search.png" alt="" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="product__item__text">
                                <h6>${productItem.name}</h6>
                                <a href="#" class="add-cart">
                                    + Thêm vào giỏ
                                </a>
                                <div class="rating">
                                    <i class="fa fa-star-o"></i>
                                    <i class="fa fa-star-o"></i>
                                    <i class="fa fa-star-o"></i>
                                    <i class="fa fa-star-o"></i>
                                    <i class="fa fa-star-o"></i>
                                </div>
                                <h5>${productItem.price}đ</h5>
                                <div class="product__color__select">
                                    <label for="pc-1">
                                        <input type="radio" id="pc-1" />
                                    </label>
                                    <label class="active black" for="pc-2">
                                        <input type="radio" id="pc-2" />
                                    </label>
                                    <label class="grey" for="pc-3">
                                        <input type="radio" id="pc-3" />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>`;
                    }
                });
                document.getElementById("product_Item").innerHTML = product_feature;
            } else {
                console.log("No data available");
            }
        })
        .catch((err) => {
            console.log(err);
        });
};
featureProducts();
