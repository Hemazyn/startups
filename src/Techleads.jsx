import React from 'react';
import tushar from "./assets/tushar.webp";
import pravesh from "./assets/pravesh.webp";

const Techleads = () => {
     const techleads = [
          {
               id: 1,
               bio: "Pravesh, Hired by Wooplr as Software Developer",
               quote: `"Little did I know about the reach of Instahyre. They have hundreds of start-ups searching for candidates. I received a good number of offers!"`,
               src: pravesh
          }, {
               id: 2,
               bio: "Tushar, Hired by Paytm as Senior Engineering Manager",
               quote: `"It was a really cool experience with Instahyre. It was very simple and clean without the bugging from job consultants. Keep up the good work guys!"`,
               src: tushar
          }
     ]
     return (
          <div className="h-[70%] border-b border-gray-400 pt-5 pb-10">
               <div className="md:w-[90%] lg:w-3/5 mx-auto my-5 flex flex-col md:flex-row gap-x-10 lg:gap-x-20 gap-y-5">
                    {techleads.map(({ id, bio, quote, src }) => (
                         <div key={id} className="flex flex-col w-[90%] md:w-full mx-auto">
                              <p className="bg-[#f4f3ec] text-xs text-gray-700 font-serif p-5 rounded-md mb-5">{quote}</p>
                              <div className="min-w-fit flex flex-row items-center justify-evenly">
                                   <img src={src} alt="" className="w-[100px] rounded-[50%]" />
                                   <p className="w-3/5 font-serif text-xs mx-3">{bio}</p>
                              </div>
                         </div>
                    ))}
               </div>
               <div className="w-full flex justify-center mt-10 lg:mt-20">
                    <button className="bg-green-500 hover:bg-green-600 text-white font-serif font-extrabold px-5 py-2 rounded-md text-center border-b-4 border-green-700">Your Dream Jobs</button>
               </div>
          </div>
     );
}

export default Techleads;