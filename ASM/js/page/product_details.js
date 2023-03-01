import { getData } from "./config.js";
const param = window.location.search;
const urlParams = new URLSearchParams(param);
const id_pro = urlParams.get("id_pro");
const getProduct = function () {
    const productData = getData("products");
    productData
        .then((product) => {
            if (product.exists()) {
                const product_data = product.val();
                // Chi tiết 1 sản phẩm
                const productDetail = Object.values(product_data).find((item) => {
                    return item.id_pro == id_pro;
                });
                // Lấy ra thông tin sản phẩm theo điều kiện
                const productRelation = Object.values(product_data).filter((item) => {
                    return item.id_pro < 5;
                });
                if (productDetail && productRelation) {
                    renderProductDetails(productDetail);
                    renderProductRelation(productRelation);
                } else {
                    console.log("Product not found");
                }
            } else {
                console.log("No data available");
            }
        })
        .catch((err) => {
            console.log(err);
        });
};

const renderProductRelation = (item) => {
    let productRelation = "";
    item.forEach((productItem) => {
        productRelation += `<div class="col-lg-3 col-md-6 col-sm-6 col-sm-6">
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
        document.getElementById("product_relation").innerHTML = productRelation;
    });
};
const renderProductDetails = (productItem) => {
    const product_details_thumb = `<div class="col-lg-3 col-md-3">
                        <ul class="nav nav-tabs" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" data-toggle="tab" href="#tabs-1" role="tab">
                                    <div class="product__thumb__pic set-bg" data-setbg="${productItem.thumb[0]}" style="background-image: url('${productItem.thumb[0]}');"></div>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-toggle="tab" href="#tabs-2" role="tab">
                                    <div class="product__thumb__pic set-bg" data-setbg="${productItem.thumb[1]}" style="background-image: url('${productItem.thumb[1]}');"></div>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-toggle="tab" href="#tabs-3" role="tab">
                                    <div class="product__thumb__pic set-bg" data-setbg="${productItem.thumb[2]}" style="background-image: url('${productItem.thumb[2]}');"></div>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-toggle="tab" href="#tabs-4" role="tab">
                                    <div class="product__thumb__pic set-bg" data-setbg="${productItem.thumb[3]}" style="background-image: url('${productItem.thumb[3]}');"></div>
                                </a>
                            </li>
                            <!-- <li class="nav-item">
                                <a class="nav-link" data-toggle="tab" href="#tabs-4" role="tab">
                                    <div class="product__thumb__pic set-bg" data-setbg="img/product/dam1.4.webp">
                                        <i class="fa fa-play"></i>
                                    </div>
                                </a>
                            </li> -->
                        </ul>
                    </div>
                    <div class="col-lg-6 col-md-9">
                        <div class="tab-content">
                            <div class="tab-pane active" id="tabs-1" role="tabpanel">
                                <div class="product__details__pic__item">
                                    <img src="${productItem.thumb[0]}" alt="" />
                                </div>
                            </div>
                            <div class="tab-pane" id="tabs-2" role="tabpanel">
                                <div class="product__details__pic__item">
                                    <img src="${productItem.thumb[1]}" alt="" />
                                </div>
                            </div>
                            <div class="tab-pane" id="tabs-3" role="tabpanel">
                                <div class="product__details__pic__item">
                                    <img src="${productItem.thumb[2]}" alt="" />
                                </div>
                            </div>
                            <div class="tab-pane" id="tabs-4" role="tabpanel">
                                <div class="product__details__pic__item">
                                    <img src="${productItem.thumb[3]}" alt="" />
                                </div>
                            </div>
                            <!-- <div class="tab-pane" id="tabs-4" role="tabpanel">
                                <div class="product__details__pic__item">
                                    <img src="img/product/dam1.3.webp" alt="" />
                                    <a href="https://www.youtube.com/watch?v=8PJ3_p7VqHw&list=RD8PJ3_p7VqHw&start_radio=1" class="video-popup"
                                        ><i class="fa fa-play"></i
                                    ></a>
                                </div>
                            </div> -->
                        </div>
                    </div>`;
    const product_details_name = `${productItem.name}`;
    const product_details_price = `${productItem.price}đ <span>${productItem.price * 1.2}đ</span>`;
    const product_details_des = `${productItem.des}`;

    document.getElementById("product_slide").innerHTML = product_details_thumb;
    document.getElementById("product_name").innerHTML = product_details_name;
    document.getElementById("product_price").innerHTML = product_details_price;
    document.getElementById("product_des").innerHTML = product_details_des;
};

getProduct();
