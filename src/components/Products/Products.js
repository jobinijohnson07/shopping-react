import React from "react";
import { Link } from "react-router-dom";
import './Products.scss';
import Footer from "../Footer/Footer"
import EliteStyle from "../../assets/eliteStyle.svg";
import Cart from "../../assets/cart.svg";
import Product1 from "../../assets/product1.svg";
import Product2 from "../../assets/product2.svg";
import Product3 from "../../assets/product3.svg";
import Product4 from "../../assets/product4.svg";
import CartIcon from "../../assets/cartIcon.svg";

function Products(){ 
  return(
    <div>
      <div className="productwrapper">
        <div className="d-flex headerwrapper">
          <div><img src={EliteStyle} alt="EliteStyle" /></div>
          <div className="d-flex">
          <Link to="/home">
            <div className="homecontent">Home</div>
          </Link>
            <div>Products</div>
          </div>       
          <div><img src={Cart} alt="cart" /></div>
        </div>
        <div className="product-content">Products - 4</div>
        <Link to="/productsDetail">
          <div className="d-flex product-section">
              <div className="imgsection">
              <img src={Product1} alt="Product1" />
              </div>
              <div className="detailsection">
              <div className="title-content">Lorna Fabric Accent Chair</div>
              <div className="amount-content">$243.00</div>
              <div className="productdesc-content">Experience unparalleled comfort and style with our Lorna Fabric Accent Chair. Crafted with premium materials, its sleek design and plush upholstery elevate any space</div>
              <div className="dimension-content">Product Dimensions</div>
              <div className="length-content">79.0 cm H x 58.0 cm W x 58.0 cm L</div>
              <button className="cartbutton-content"><img className="carticon-content" src={CartIcon} alt="cartIcon" />Add to Cart</button>
              </div>
          </div>
        </Link>
        <div className="d-flex product-section">
          <div className="imgsection">
            <img src={Product2} alt="Product2" />
          </div>
          <div className="detailsection">
            <div className="title-content">Kai Accent Chair</div>
            <div className="amount-content">$243.00</div>
            <div className="productdesc-content">Experience unparalleled comfort and style with our Kai Accent Chair. Crafted with premium materials, its sleek design and plush upholstery elevate any space</div>
            <div className="dimension-content">Product Dimensions</div>
            <div className="length-content">79.0 cm H x 58.0 cm W x 58.0 cm L</div>
            <button className="cartbutton-content"><img className="carticon-content" src={CartIcon} alt="cartIcon" />Add to Cart</button>
          </div>
        </div>
        <div className="d-flex product-section">
          <div className="imgsection">
            <img src={Product3} alt="Product3" />
          </div>
          <div className="detailsection">
            <div className="title-content">Lebowski Leatherette One Seater</div>
            <div className="amount-content">$243.00</div>
            <div className="productdesc-content">Experience unparalleled comfort and style with our Lebowski Leatherette One Seater. Crafted with premium materials, its sleek design and plush upholstery elevate any space</div>
            <div className="dimension-content">Product Dimensions</div>
            <div className="length-content">79.0 cm H x 58.0 cm W x 58.0 cm L</div>
            <button className="cartbutton-content"><img className="carticon-content" src={CartIcon} alt="cartIcon" />Add to Cart</button>
          </div>
        </div>
        <div className="d-flex product-section">
          <div className="imgsection">
            <img src={Product4} alt="Product4" />
          </div>
          <div className="detailsection">
            <div className="title-content">Laurel Bean Bag Cover</div>
            <div className="amount-content">$243.00</div>
            <div className="productdesc-content">Experience unparalleled comfort and style with our Laurel Bean Bag Cover. Crafted with premium materials, its sleek design and plush upholstery elevate any space</div>
            <div className="dimension-content">Product Dimensions</div>
            <div className="length-content">79.0 cm H x 58.0 cm W x 58.0 cm L</div>
            <button className="cartbutton-content"><img className="carticon-content" src={CartIcon} alt="cartIcon" />Add to Cart</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>  
  );
}

export default Products;
