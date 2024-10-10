// Filename - App.js

import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    RouterProvider
} from "react-router-dom";
import Signup from "./pages/Signup";
import ProductPage from "./pages/ProductPage";
import ProductDetails from "./pages/ProductDetails";
import CartPage from "./pages/CartPage";
import Protected from "./pages/protected";
function App() {
  
    return (
        <Router>       
          <Routes element={<Protected />}>        
                <Route path= "/home" element={<ProductPage/>} />
                <Route path="/productdetails" element={<ProductDetails/>}/>
                <Route path=" /cart" element= {<CartPage/>} />

 
          </Routes>     
          <Routes>
                <Route path="/" element={<Signup/>} />
                <Route path="*" element={<h1>Page not found</h1>} />
          </Routes>
        </Router>
    );


}
const Index = () => {
  return <RouterProvider router={router} />;
};

export default Index;

export default App;
