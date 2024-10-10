import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import Signup from "./pages/Signup"
import ProtectedRoute from "./utils/ProtectedRoute"
import ProductPage from "./pages/ProductPage"
import PublicRoute from "./utils/PublicRoute"

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Signup/>}> 
       <Route 
       path="/" 
       element={
       <ProtectedRoute> 
         <ProductPage /> 
        </ProtectedRoute>
      } 
      />
      <Route 
      path= "signup"
      element = {
        <PublicRoute>
            <Signup/>
        </PublicRoute>
      }
      />
       </Route> 
       ) 
    )


export default router