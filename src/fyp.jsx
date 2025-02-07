import { Link } from "react-router-dom";
const FYP = () => {
     return (
         
         
         <>
         <div className="h-screen">
         <div className="max-w-6xl mt-25  text-xl  mx-auto px-10 py-12 grid md:grid-cols-2 gap-12">
         
         <div >
           <h1 className="text-4xl font-bold mb-10">Unlock Your Future with Global Opportunities</h1>
           <p className="text-gray-400  mb-15">
             Our platform connects you to a world of internships and study programs.
             Experience expert guidance and a seamless application process.
           </p>
 
           <div className="my-15 grid grid-cols-2 gap-7">
             <div>
               <h2 className="text-xl font-bold">Institution</h2>
               <p className="text-gray-400">Explore diverse global internship opportunities today.</p>
             </div>
             <div>
               <h2 className="text-xl font-bold">Budget</h2>
               <p className="text-gray-400">Explore diverse global internship opportunities today.</p>
             </div>
           </div>
         </div>
 
         
         <div className="h-full">
           <h2 className="text-3xl font-bold mb-4">Requirements</h2>
           <ul className="space-y-7">
             <li className="flex my-15 items-start">
               <span className="mr-2">•</span>
               Our platform connects you to a world of
 internships and study programs.
             </li>
             <li className="flex my-15 items-start">
               <span className="mr-2">•</span>
               Our platform connects you to a world of
 internships and study programs.
             </li>
             <li className="flex my-15 items-start">
               <span className="mr-2">•</span>
               Our platform connects you to a world of
               internships and study programs.
             </li>
           </ul>
         </div>
       </div>
 
   
 <div className="flex justify-center "><button className="rounded-md bg-[#CB1EDBD9] text-white text-xl h-15 w-30 mb-10 "><Link to="/addfyp">Add</Link></button></div>
 </div>
 <div className="h-70 rounded-md bg-white w-5/6 mb-10 m-auto">
 
 </div> 
 
 
       </>
       );
}
 
export default FYP;