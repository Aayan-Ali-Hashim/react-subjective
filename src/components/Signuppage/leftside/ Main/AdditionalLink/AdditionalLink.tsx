import { useNavigate } from "react-router-dom"

const AdditionalLink = () =>{
  const navigate = useNavigate();
    return(

        // <!-- Additional Link -->
        <p className="mt-6 text-center text-sm text-gray-500">
      Already have an account?
      <a 
        className="font-medium text-indigo-600 hover:text-indigo-500 cursor-pointer"
        onClick={() => navigate("/login")}
        >Sign in</a>
    </p>
    )
}
export default AdditionalLink