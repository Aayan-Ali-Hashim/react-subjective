import { useState } from "react"
import { useNavigate } from "react-router-dom";
const Form = () =>{
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [confirmPassword,setConfirmPassword ]   = useState('')
  const [isLoggedIn,setIsLoggedIn] = useState(false)

  const navigate = useNavigate()
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    // console.log(name,email,password,confirmPassword);
    if ((name.length > 2)){
      if (email.includes('@') &&  email.includes('.')){
          if (password == confirmPassword){
            setIsLoggedIn(true)
            console.log("log in successful")
            localStorage.setItem("isLoggedIn",'true')
            navigate("/home")
          }
          else{
            console.log("Password doesn't match")
          }
      }
      else{
        console.log("enter correct Email")
      }
      
    }
    else{
      console.log("name is too short")
    }
    
  }

    return(
        <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700"
            >Your Name</label>
          <div className="mt-1">
            <input
            value={name}
            onChange={e => setName(e.target.value)}
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
        </div>
    
        {/* Email Field*/}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700"
            >Email address</label>
          <div className="mt-1">
            <input
            value={email}
            onChange={e => setEmail(e.target.value)}
              id="email"
              name="email"
              type="email"
                autoComplete="email"
              required
              className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
        </div>
    
         {/* Password Field  */}
        <div>
          <label
         htmlFor="password"
            className="block text-sm font-medium text-gray-700">Password</label>
          <div className="mt-1">
            <input
            value={password}
            onChange={e => setPassword(e.target.value)}
              id="password"
              name="password"
              type="password"
                autoComplete="current-password"
              required
              className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
        </div>
    
         {/* Confirm Password Field */}
        <div>
          <label
         htmlFor="confirm-password"
            className="block text-sm font-medium text-gray-700"
            >Confirm Password</label>
          <div className="mt-1">
            <input
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
              id="confirm-password"
              name="confirm-password"
              type="password"
                autoComplete="new-password"
              required
              className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
        </div>
    
         {/* Submit Button  */}
        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Sign up
          </button>
        </div>
      </form>
    )
}

export default Form