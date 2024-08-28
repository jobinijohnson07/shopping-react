import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './ProductDetail.scss';
import Footer from "../Footer/Footer"
import EliteStyle from "../../assets/eliteStyle.svg";
import Cart from "../../assets/cart.svg";
import ProductDetail from "../../assets/productDetail.svg";
import CartIcon from "../../assets/cartIcon.svg";
import BackButton from "../../assets/backButton.svg";


function ProductsDetail(){ 
    const navigate = useNavigate();

  return(
    <div>
       <div className="productdetailwrapper">
        <div className="d-flex headerwrapper">
          <div><img src={EliteStyle} alt="EliteStyle" /></div>
          <div className="d-flex">
            <Link to="/home">
              <div className="homecontent">Home</div>
            </Link>
            <Link to="/products">
              <div>Products</div>
            </Link>
          </div>       
          <div><img src={Cart} alt="cart" /></div>
        </div>
        <Link to="/products">
          <div className="backbutton-content"><img src={BackButton} alt="backButton" /></div>
        </Link>
        <div className="d-flex product-section">
          <div className="imgsection">
            <img src={ProductDetail} alt="productDetail" />
          </div>
          <div className="detailsection">
            <div className="title-content">Lebowski Leatherette One Seater</div>
            <div className="amount-content">$243.00 <span className="tax-content">(Incl. of all taxes)</span></div>
            <div className="productdesc-content">This chair is made from high-quality Sheesham wood, which is durability & beauty</div>
            <div className="dimension-content">Product Dimensions</div>
            <div className="length-content">79.0 cm H x 58.0 cm W x 58.0 cm L</div>
            <button className="cartbutton-content"><img className="carticon-content" src={CartIcon} alt="cartIcon" />Add to Cart</button>
          </div>
        </div>
        <div className="product-content">Product properties</div>
        <div className="d-flex productdimenwrapper">
          <div className="propertieswrapper">
            <div className="productcon-content">Product dimensions</div>
            <div className="productdetail-content">79.0 H x 58.0 W x 58.0 L (cm)</div>
          </div>
          <div className="propertieswrapper">
            <div className="productcon-content">Brand name</div>
            <div className="productdetail-content">Elite Style</div>
          </div>
          <div className="propertieswrapper">
            <div className="productcon-content">Warranty</div>
            <div className="productdetail-content">12 Months</div>
          </div>
          <div className="propertieswrapper">
              <div className="productcon-content">Is upholstered</div>
              <div className="productdetail-content">Yes</div>
          </div>
        </div>
        <div className="d-flex productdimenwrapper">
          <div className="propertieswrapper">
            <div className="productcon-content">Seating capacity</div>
            <div className="productdetail-content">1 person seating capacity</div>
          </div>
          <div className="propertieswrapper">
            <div className="productcon-content">Material</div>
            <div className="productdetail-content">Solid wood</div>
          </div>
          <div className="propertieswrapper">
            <div className="productcon-content">Secondary material</div>
            <div className="productdetail-content">Fabric</div>
          </div>
          <div className="propertieswrapper">
              <div className="productcon-content">Cushioned seating</div>
              <div className="productdetail-content">Yes</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductsDetail;








