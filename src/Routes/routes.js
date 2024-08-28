import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "../components/Products/Products";
import ProductsDetail from "../components/ProductDetail/ProductDetail";
import HomePage from "../components/HomePage/HomePage";
import LoginPage from "../components/LoginPage/LoginPage";

export default function Router() {
   return(
    <BrowserRouter>
      <Routes>
       <Route path="/" element={<LoginPage/>}/> 
       <Route path="/home" element={<HomePage/>}/>
       <Route path="/products" element={<Products/>}/>
       <Route path="/productsDetail" element={<ProductsDetail/>}/>
      </Routes>
    </BrowserRouter>
   );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Router />);