// src/LoginForm.js
// src/LoginForm.js
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { myApiCall } from "../apicall/myApiCall";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const data = {email , password}
  const dispatch = useDispatch();
  
  const handleLogin = async (e) => {
    e.preventDefault();
    const {success , message} = await dispatch(myApiCall("http://localhost:2000/api/v2/auth/login" , data ))
    if(success){
      toast.success(message)
      navigate('/')
    }
    else{
      toast.error(message)
    }
  }
   

  return (
    <div className="flex items-center justify-center w-full bg-gray-100 p-[10rem]">
      <form
        className="w-full max-w-[50rem] p-8 transition-all duration-300 ease-out transform translate-y-6 bg-white rounded-lg shadow-lg opacity-0 animate-fadeIn flex flex-col gap-[2.5rem]"
        onSubmit={(e) => {
          handleLogin(e);
        }}
      >
        <div id="heading">
            <h2 className="text-[2rem] font-[Inter] font-[200]">Hello</h2>
            <p className="font-[600] text-[2.6rem] font-[Inter]">Welcome!</p>
        </div>
        <div className="flex flex-col gap-[.5rem]">
        <label
            htmlFor="password"
            className="text-[Inter] font-[500] text-[2rem] px-[1rem]"
          >
            Enter email or email
          </label>
          <input
            type="text"
            id="email"
            className="w-full px-3 py-2 text-gray-900 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 peer text-[Inter] font-[500] text-[1.6rem] placeholder:text-[1.6rem] placeholder:font-[500] placeholder:text-[Inter]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="email or email*"
          />
          
        </div>
        <div className="flex flex-col gap-[.5rem]">
        <label
            htmlFor="password"
            className="text-[Inter] font-[500] text-[2rem] px-[1rem]"
          >
            Enter password
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 peer  text-[Inter] font-[500] text-[1.6rem] placeholder:text-[1.6rem] placeholder:font-[500] placeholder:text-[Inter]"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="password*"
          />
          
        </div>
        <button
          type="submit"
          className="w-full py-2 text-white transition-all bg-indigo-600 rounded-md hover:bg-indigo-700 text-[2rem] text-[Inter] font-[500]"
        >
          Login
        </button>
        <div id="link" className="flex mx-auto flex-col gap-[1rem]">
            <div id="register" className="mx-auto">
            <Link to={'/signin'} className="font-[500] text-[1.6rem] text-right font-[poppins] text-[#040505]">If you are new user? <span className="text-[#5952c0]">click here</span></Link>
            </div>
            <div id="forgot-password" className="ml-auto">
                <Link className="font-[500] text-[1.6rem] text-right font-[poppins] ">If you forgot your password? <span className="text-[#5adfc0]">Forgot password</span></Link>
            </div>
        </div>
        
      </form>
    </div>
  );
};

export default Login;

