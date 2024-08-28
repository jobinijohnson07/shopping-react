import React from "react";
import './Footer.scss';
import EliteStyle from "../../assets/eliteStyle.svg";
import SocialIcons from "../../assets/socialIcons.svg";


function Footer(){ 
  return(
    <div className="footerwrappersection">
       <div className="footerwrapper">
        <div className="d-flex footersection">
            <div><img src={EliteStyle} alt="EliteStyle" /></div>
            <div><img src={SocialIcons} alt="socialIcons" /></div>
        </div>
        <div className="d-flex productsection">
            <div>
            <div className="product-content">Chairs</div>
            <div className="product-content">Lamps</div>
            <div className="product-content">Sofas</div>
            <div className="product-content">Tables</div>
            </div>
            <div>
            <div className="product-content">help@elitestylecommerce.com</div>
            <div className="product-content">1234 Sycamore Street, Orlando, FL 32801</div>
            </div>
            <div>
            <div className="product-content">+1 (941) 123-1234</div>
            <div className="product-content">Mon to Fri - 8.30 am to 5.00 pm</div>
            </div>
        </div>
       </div>
       <div className="d-flex copyrightwrapper">
        <div>Copyright © 2024 Elite Style., All Rights Reserved.</div>
        <div>Privacy Policy</div>
      </div>
    </div>
    
  );
}

export default Footer;
