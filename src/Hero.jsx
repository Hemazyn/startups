import React from "react";
import google from "./assets/google.png";
import { FaLinkedin, FaAngleRight } from "react-icons/fa";

const Home = () => {
     return (
          <div className="w-full h-fit">
               <div className="bg-home-bg h-[500px] md:h-[600px] lg:h-[700px] flex justify-center items-center" >
                    <div className="w-full h-fit pt-2 md:w-4/5 lg:w-2/5 lg:h-fit flex flex-col justify-start items-center rounded-lg bg-white z-0">
                         <h1 className=" text-3xl font-serif my-6">Your Dream Job. Now.</h1>
                         <div className="flex flex-col items-center">
                              <div className="flex flex-row h-fit w-4/5 items-center mt-1 gap-x-2 text-white bg-[#1e3aba] cursor-pointer rounded-md" >
                                   <div className="w-1/5 h-full flex justify-center items-center border-r border-gray-950 rounded-tl-md rounded-bl-md">
                                        <FaLinkedin className="text-white" style={{ width: "70%", height: "70%" }} />
                                   </div>
                                   <div className="w-4/5">
                                        <p className="text-center text-[14px] font-extrabold font-serif">Sign in with Google</p>
                                   </div>
                              </div>
                              <div className="flex flex-row h-fit w-4/5 items-center mt-3 gap-x-2 text-white bg-red-700 cursor-pointer rounded-md" >
                                   <div className="w-1/5 h-full flex justify-center items-center border bg-white rounded-tl-md rounded-bl-md">
                                        <img src={google} alt="google" style={{ width: "70%", height: "70%" }} />
                                   </div>
                                   <div className="w-4/5">
                                        <p className="text-center text-[14px] font-extrabold font-serif">Sign in with Google</p>
                                   </div>
                              </div>
                         </div>
                         <p className="text-xs text-green-500 font-semibold font-serif mt-5 cursor-pointer">Or sign up with email</p>
                         <p className="font-serif text-sm text-gray-700 mt-6">Showcase yourself to a curated list of top companies</p>
                         <p className="font-serif text-sm text-gray-700 mt-3">Complete privacy and no spam</p>
                         <button className="flex flex-row items-center justify-center bg-orange-500 text-white px-8 py-2 mt-8 mb-0">Recuiter Signup<FaAngleRight className="text-xs" /></button>
                    </div>
               </div >
          </div >
     );
}

export default Home;
