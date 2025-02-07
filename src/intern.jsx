import { Link,Route } from "react-router-dom";
const INT = () => {
    return ( <>
  <div className="grid  min-h-screen grid-cols-2 grid-rows-3 sm:px-30 max-sm:px-10 gap-15"> 
<div className=""><p className="font-bold text-3xl max-sm:p-5 max-sm: p-10">
    Transforming futures:
 Empowering students
 through internships and 
global opportunities.</p></div>
<div className="max-md:col-span-2 mt-10"><p className="mb-5">
    
Join thousands of students who have successfully 
secured internships worldwide. Our platform connects
 you with companies eager to invest in your future.
    
    </p>
    <div className="gap-7 flex flex-col md:flex-row">
    <div><h1 className="font-bold text-3xl">75%</h1>
    <p>
        Students placed in 
prestigious internships 
globally.</p>
</div>
<div><h1 className="font-bold text-3xl">200+</h1>
    <p>
    Companies partnered 
for your career 
advancement.  
    </p>
    </div>
    </div>
    </div>
<div className="col-span-2 rounded-lg bg-white">
 
    </div>

<div className="flex justify-center items-center flex-col "><h1 className="font-bold text-3xl">Student Testimonials</h1>

This platform changed my internship search experience completely.

<p className="pl-7">★★★★★</p>  

<div className="rounded-full  ml-5 h-20 w-20 bg-white"></div>
 <p className="pl-4"> Alice Johnson</p>
      
    </div>
    <div className="flex m-auto">
<button className="h-15 w-30 rounded-md bg-[#CB1EDBD9] text-xl"><Link to="/addin">Add</Link></button>

    </div>
</div>   
    </> );
}
 
export default INT;