import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import Signup from "./pages/Signup"
import ProtectedRoute from "./utils/ProtectedRoute"
import ProductPage from "./pages/ProductPage"
import PublicRoute from "./utils/PublicRoute"
import Layout from "./components/Signuppage/Layout"
import ProductDetails from "./pages/ProductDetails"
import CartPage from "./pages/CartPage"
import LoginPage from "./pages/LoginPage"

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
       <Route 
       path="/" 
       element={
       <ProtectedRoute> 
         <ProductPage /> 
        </ProtectedRoute>
      } 
      />
      <Route 
       path="/productdetails" 
       element={
       <ProtectedRoute> 
         <ProductDetails />
        </ProtectedRoute>
      } 
      />
      <Route 
       path="/cart" 
       element={
       <ProtectedRoute> 
         <CartPage />
        </ProtectedRoute>
      } 
      />

      <Route 
      path= "/signup"
      element = {
        <PublicRoute>
            <Signup />
        </PublicRoute>
      }
      />
      <Route 
      path= "/login"
      element = {
        <PublicRoute>
            <LoginPage />
        </PublicRoute>
      }
      />
       </Route> 
       ) 
    )


export default router