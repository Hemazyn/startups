import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
     const [nav, setNav] = useState(false);
     const links = [
          {
               id: 1,
               link: "invite friends",
          },
          {
               id: 2,
               link: "find jobs",
          },
          {
               id: 3,
               link: "login",
          },
          {
               id: 4,
               link: "Sign Up",
          },
          {
               id: 5,
               link: "employers",
          },
     ];
     return (
          <div className="w-full flex h-[50px] justify-between lg:justify-around items-center px-6 lg:px-12 bg-[#414654] text-gray-200" >
               <div className="flex items-center gap-x-2">
                    <h2 className="h-full text-lg font-bold cursor-pointer">Instahyre</h2>
               </div>
               <ul className="h-full hidden md:flex lg:flex font-serif text-[10px]">
                    {links.map(({ id, link }) => (
                         <li key={id} className={`h-full px-4 py-5 cursor-pointer uppercase font-medium hover:bg-gray-600 duration-200 ${id === 5 ? "bg-green-500" : ""}`}>
                              <Link to={link} smooth duration={500}>{link}</Link>
                         </li>
                    ))}
               </ul>
               <div onClick={() => setNav(!nav)} className="w-fit cursor-pointer z-50 md:hidden">
                    <FaBars size={25} style={{ fontWeight: "lighter" }} className="font-thin" />
               </div>
               {nav && (
                    <ul className="flex flex-col absolute top-0 mt-[50px] py-3 right-0 w-full h-fit bg-[#414654]  z-40 border-t font-serif text-[10px]">
                         {links.map(({ id, link }) => (
                              <li key={id} className="px-4 cursor-pointer uppercase font-medium py-3">
                                   <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>{link}</Link>
                              </li>
                         ))}
                    </ul>
               )}
          </div >
     );
}

export default Navbar;