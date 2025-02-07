import im1 from "./assets/chercher.png"
import im2 from "./assets/logo-apple.png"
import im3 from "./assets/facebook.png"
import { Link } from "react-router-dom";

const LOGIN = () => {
    return (
<>

<div className=" text-white min-h-screen">
 
 
 <div className="flex justify-center items-center min-h-screen px-8">
   <div className="bg-white text-black w-full max-w-4xl grid md:grid-cols-2 shadow-lg rounded-lg overflow-hidden">
   
     <form method="post" className="p-8">
       <h2 className="text-2xl font-bold mb-2">LOG IN</h2>
       <p className="text-gray-600 mb-6">Welcome Back Warrior</p>
       <input type="email" placeholder="Email" className="w-full p-3 border border-gray-300 rounded mb-4" />
       <input type="password" placeholder="Password" className="w-full p-3 border border-gray-300 rounded mb-4" />
       
       <button type="submit" className="w-full cursor-pointer bg-[#CB1EDBD9] text-white p-3 rounded-lg hover:bg-purple-600">Log in</button>
       
       <div className="mt-4 space-y-2">
         <button className="w-full flex cursor-pointer items-center justify-center p-3 border border-gray-300 rounded bg-gray-100 hover:bg-gray-200">
           <span className="mr-2"><img/><img src={im1}/></span> Log in with Google
         </button>
         <button className="w-full flex cursor-pointer items-center justify-center p-3 border border-gray-300 rounded bg-gray-100 hover:bg-gray-200">
           <span className="mr-2"><img/><img src={im3} /></span> Log in with Facebook
         </button>
         <button className="w-full cursor-pointer flex items-center justify-center p-3 border border-gray-300 rounded bg-gray-100 hover:bg-gray-200">
           <span className="mr-2"><img src={im2}/> </span> Log in with Apple
         </button>
       </div>
       
       <div className="mt-4 text-center text-sm">
         <a href="#" className="text-purple-500 hover:underline"><Link to="/forgot">Forgot your password?</Link></a>
       </div>
       <div className="mt-2 text-center text-sm">
         Don't have an account? <Link to="/signup" className="text-purple-500 hover:underline">Sign Up</Link>
       </div>
     </form>
     
    
     <div className="bg-gray-200 flex items-center justify-center">
       <span className="text-gray-400 text-3xl"></span>
     </div>
   </div>
 </div>
</div>
</>

      );
}
 
export default LOGIN;
