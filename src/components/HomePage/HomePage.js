import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './HomePage.scss';
import Footer from "../Footer/Footer";
import EliteStyle from "../../assets/eliteStyle.svg";
import Cart from "../../assets/cart.svg";
import Chair from "../../assets/chair.svg";
import Chairs from "../../assets/chairs.svg";
import Lamps from "../../assets/lamps.svg";
import Sofas from "../../assets/sofas.svg";
import Tables from "../../assets/tables.svg";
import Interior from "../../assets/interior.svg";
import ProductDetail from "../../assets/productDetail.svg";
import CartIcon from "../../assets/cartIcon.svg";
import SellingChair from "../../assets/sellingchair.svg";
import Shirt from "../../assets/tshirt.png";

function HomePage(){ 

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1
  };

  return(
    <div className="homepagewrapper">
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
      <div className="d-flex firstsection">
       <div className="conetentsection">
         <div className="step-content">Step Into</div>
         <div className="nextgen-content">Next <br/>Generation</div>
         <div className="shop-content">of Online Shopping!</div>
         <div className="exp-content">Experience a revolutionary online shopping journey <br/>with advanced technology</div>
       </div>
       <div className="chair-imgcontent">
        <img src={Chair} alt="chair" />
       </div>
      </div>
      <div className="productcategorywarapper">
        <div className="prodcategory-content">Product categories</div>
        <div className="d-flex categorysection">
          <div>
            <img src={Chairs} alt="chairs" />
            <div className="productname-content">Chairs</div>
            <div className="productcount-content">87 Products</div>
          </div>
          <div>
            <img src={Lamps} alt="lamps" />
            <div className="productname-content">Lamps</div>
            <div className="productcount-content">34 Products</div>
          </div>
        </div>
        <div className="d-flex categorysec">
          <Link to="/products">
            <div>
              <img src={Sofas} alt="sofas" />
              <div className="productname-content">Sofas</div>
              <div className="productcount-content">42 Products</div>
            </div>
          </Link>
          <div>
            <img src={Tables} alt="tables" />
            <div className="productname-content">Tables</div>
            <div className="productcount-content">30 Products</div>
          </div>
        </div>
        <div className="d-flex categorysec">
          <div>
            <a href="https://jobinijohnson07.github.io/tshirt-react/"><img src={Shirt} alt="Shirt" /></a>
            <div className="productname-content">TShirt</div>
            <div className="productcount-content">8 Products</div>
          </div>
          <div>
            <img src={Tables} alt="tables" />
            <div className="productname-content">Tables</div>
            <div className="productcount-content">30 Products</div>
          </div>
        </div>
      </div>
      <div className="sellingwrapper">
        <div className="yourhome-content">Just for your home</div>
        <div className="selling-content">Best selling products</div>
        <Slider {...settings}>
        <div className="d-flex product-section">
          <div className="imgsection">
            <img src={SellingChair} alt="sellingChair" />
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
        <div className="d-flex product-section">
          <div className="imgsection">
            <img src={SellingChair} alt="sellingChair" />
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
        <div className="d-flex product-section">
          <div className="imgsection">
            <img src={SellingChair} alt="sellingChair" />
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
        </Slider>
      </div>
      <div className="explorewrapper">
        <div className="tour-content">360° home tour</div>
        <div className="explore-content">Explore interiors using home tour</div>
        <div className="expdescription-content">Suggestions for furniture placements in each types of rooms with product <br/>information such as price & description using Hotspot links</div>
      </div>
      <img className="interior-imgcontent" src={Interior} alt="Interior" />
      <div className="visualizewrapper">
        <div className="visual-content">Visualize products in</div>
        <div className="world-content">Real-world environment</div>
        <div className="visualdesc-content">Immerse yourself in a virtual showroom where you can visualize products in your <br/>own space. See how furniture, decor, and accessories look in your home before you <br/>buy, ensuring a perfect fit and style every time</div>
      </div>
      <div className="decorwarapper">
        <div className="d-flex previewsection">
          <div className="preview-content">Preview furniture, <br/>decor, and accessories <br/>in your home setting <br/>for a perfect match <br/>every time</div>
          <div className="potentialwrapper">
            <div className="max-conetnt">Maximize your potential</div>
            <div className="percentage-content">+94%</div>
            <div className="percentdesc-content">Higher conversion rate</div>
            <div className="percentage-content">+11%</div>
            <div className="percentdesc-content">Increase in add to cart ratio</div>
            <div className="percentage-content">+35%</div>
            <div className="percentdesc-content">AR would make them shop online often</div>
            <div className="percentage-content">+63%</div>
            <div className="percentdesc-content">Higher conversion rateCustomers say AR would improve their shopping experience</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
