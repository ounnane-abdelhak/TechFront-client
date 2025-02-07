import im from "./assets/download.jpg"
const PRO = () => {
    return (
        <div className="min-h-screen  text-white flex flex-col items-center py-10">
       
          <div className="bg-black/99 p-8 mt-20 rounded-2xl shadow-lg w-96 text-center">
            <img
              src={im}
              alt="Profile Picture"
              className="w-24 h-24 rounded-full mx-auto border-4 border-purple-500"
            />
            <h2 className="text-2xl font-bold mt-4">John Doe</h2>
            <p className="text-gray-300">Web Developer | Designer</p>
 <textarea name="bio" id="" className="h-20 mt-5 bg-white">Bio</textarea>
          </div>
   
          <div className="mt-10 max-w-2xl text-center">
            <h3 className="text-xl font-semibold">About Me</h3>
            <p className="text-gray-300 mt-2">
              Passionate web developer with experience in building user-friendly
              and visually appealing websites.
            </p>
          </div>
        </div>
      );
    
    
}
 
export default PRO ;


    