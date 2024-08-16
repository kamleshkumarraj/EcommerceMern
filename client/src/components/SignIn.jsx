import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import {toast} from 'react-toastify'
import { useDispatch } from "react-redux";
import { setOneUser } from "../store/admin/slices/allCustomerHandler";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstname , setFirstname] = useState("");
  const [lastname , setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [confPassword, setConfPassword] = useState("");

  const reset = () => {
    setUsername('')
    setPassword('')
    setEmail('')
    setFirstname('')
    setLastname('')
    setConfPassword("")
  }
  
  const handleSignin = async (e) => {
    e.preventDefault();
    const data = {firstname , lastname , email , password , username}
    try {
      const response = await axios.post('http://localhost:2000/api/v2/auth/register', data , {withCredentials  :true})
      const {message , user} = response.data;
      dispatch(setOneUser(user))
      toast.success(message)
      navigate('/login')
      reset()
      
    }
    catch (error){
      const {message} = error.response.data;
      if(message.includes('duplicate')){
        toast.error("User already registered")
      }
    }
    
  };

  return (
    <div className="flex items-center justify-center w-full bg-gray-100 xl:p-[10rem] p-[2rem]">
      <form
        className="w-full sm:max-w-[60rem] min-w-[50rem] p-8 transition-all duration-300 ease-out transform translate-y-6 bg-white rounded-lg shadow-lg opacity-0 animate-fadeIn flex flex-col gap-[2.5rem]"
        onSubmit={handleSignin}
      >
        <div id="heading">
            <h2 className="text-[2rem] font-[Inter] font-[200]">Hello</h2>
            <p className="font-[600] text-[2.6rem] font-[Inter]">Welcome!</p>
        </div>

        <div className="flex flex-col gap-[.5rem]">
        
          <input
            value = {firstname}
            onChange ={(e) => {setFirstname(e.target.value)}}
            type="text"
            id="firstname"
            className="w-full px-3 py-2 text-gray-900 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 peer text-[Inter] font-[500] text-[1.6rem] placeholder:text-[1.6rem] placeholder:font-[500] placeholder:text-[Inter]"
           
            required
            placeholder="firstname*"
          />
          
        </div>
        
        <div className="flex flex-col gap-[.5rem]">
          <input
            onChange ={(e) => {setLastname(e.target.value)}}
            type="text"
            id="lastname"
            className="w-full px-3 py-2 text-gray-900 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 peer text-[Inter] font-[500] text-[1.6rem] placeholder:text-[1.6rem] placeholder:font-[500] placeholder:text-[Inter]"
            value={lastname}
            required
            placeholder="lastname*"
          />
          
        </div>
        
        <div className="flex flex-col gap-[.5rem]">
          <input
            onChange={(e) => {setUsername(e.target.value)}}
            type="username"
            id="username"
            className="w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 peer  text-[Inter] font-[500] text-[1.6rem] placeholder:text-[1.6rem] placeholder:font-[500] placeholder:text-[Inter]"
            value={username}
            required
            placeholder="username*"
          />
          <p className="font-[500] text-[1.3rem] px-[1rem] text-[#c13f3f]">Note : username must be unique*</p>
        </div>
        
        <div className="flex flex-col gap-[.5rem]">
          <input
            onChange ={(e) => {setEmail(e.target.value)}}
            type="email"
            id="email"
            className="w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 peer  text-[Inter] font-[500] text-[1.6rem] placeholder:text-[1.6rem] placeholder:font-[500] placeholder:text-[Inter]"
            value={email}
            required
            placeholder="email*"
          />
          
        </div>
        
        <div className="flex flex-col gap-[.5rem]">
          <input
            onChange ={(e) => {setPassword(e.target.value)}}
            type="password"
            id="password"
            className="w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 peer  text-[Inter] font-[500] text-[1.6rem] placeholder:text-[1.6rem] placeholder:font-[500] placeholder:text-[Inter]"
            value={password}
            required
            placeholder="password*"
          />
          
        </div>

        <div className="flex flex-col gap-[.5rem]">
          <input
            onChange ={(e) => {setConfPassword(e.target.value)}}
            type="password"
            id="cpassword"
            className="w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 peer  text-[Inter] font-[500] text-[1.6rem] placeholder:text-[1.6rem] placeholder:font-[500] placeholder:text-[Inter]"
            value={confPassword}
            required
            placeholder="confirm password*"
          />
          
        </div>
        
        <div className="flex flex-col gap-[.5rem]">
        <label htmlFor="file" className="font-[600] text-[1.6rem] text-[Poppins] px-[1rem]">Upload profile picture or avatar*</label>
          <input
            type="file"
            id="file"
            className="w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 peer  text-[Inter] font-[500] text-[1.6rem] placeholder:text-[1.6rem] placeholder:font-[500] placeholder:text-[Inter] file:bg-none"
            
            
            placeholder="upload avatar or profile picture*"
          />
          
        </div>
        
        <button
          type="submit"
          className="w-full py-2 text-white transition-all bg-indigo-600 rounded-md hover:bg-indigo-700 text-[2rem] text-[Inter] font-[500]"
        >
          Signin
        </button>
        
        <div id="link" className="flex mx-auto flex-col gap-[1rem]">
            <div id="register" className="mx-auto">
            <Link to={'/login'} className="font-[500] text-[1.6rem] text-right font-[poppins] text-[#040505]">If you are already signin? <span className="text-[#5952c0]">click here</span></Link>
            </div>
            
        </div>
        
      </form>

      
    </div>
  );
};

export default SignIn;
