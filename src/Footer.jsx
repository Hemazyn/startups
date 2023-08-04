import React from 'react';
import { bylocation, byfunction, employers, self, connect } from './constants';


const Footer = () => {

     return (
          <div className="w-full h-3/5">
               <div className="flex flex-row justify-between md:w-4/5 lg:w-3/5 mx-auto py-10">
                    {/* grid 1 */}
                    <div className="hidden md:flex flex-col max-w-fit text-xs font-serif">
                         <p className="font-[600] text-gray-700 mb-3">Jobs by Location</p>
                         <div className="flex flex-col">
                              {bylocation.map(({ id, text, src }) => (
                                   <div key={id} className="w-full mb-2 cursor-pointer">
                                        <a href={src} target="_blank" rel="noreferrer" className="text-gray-500">{text}</a>
                                   </div>
                              ))}
                         </div>
                    </div>
                    {/* grid 2 */}
                    <div className="hidden md:flex flex-col max-w-fit text-xs font-serif">
                         <p className="font-[600] text-gray-700 mb-3">Jobs by Function</p>
                         <div className="flex flex-col">
                              {byfunction.map(({ id, text, src }) => (
                                   <div key={id} className="w-full mb-2 cursor-pointer">
                                        <a href={src} target="_blank" rel="noreferrer" className="text-gray-500">{text}</a>
                                   </div>
                              ))}
                         </div>
                    </div>
                    {/* grid 3 */}
                    <div className="hidden md:flex flex-col max-w-fit text-xs font-serif">
                         <p className="font-[600] text-gray-700 mb-3">For Employers</p>
                         <div className="flex flex-col">
                              {employers.map(({ id, text, src }) => (
                                   <div key={id} className="w-full mb-2 cursor-pointer">
                                        <a href={src} target="_blank" rel="noreferrer" className="text-gray-500">{text}</a>
                                   </div>
                              ))}
                         </div>
                    </div>
                    {/* grid 4 */}
                    <div className="hidden md:flex flex-col max-w-fit text-xs font-serif">
                         <p className="font-[600] text-gray-700 mb-3">Instahyre</p>
                         <div className="flex flex-col">
                              {self.map(({ id, text, src }) => (
                                   <div key={id} className="w-full mb-2 cursor-pointer">
                                        <a href={src} target="_blank" rel="noreferrer" className="text-gray-500">{text}</a>
                                   </div>
                              ))}
                         </div>
                    </div>
                    {/* grid 5 */}
                    <div className="max-w-fit flex flex-row md:flex-col text-xs font-serif gap-x-3 justify-center items-center mx-auto md:mx-0 md:justify-start md:items-start">
                         <p className="font-[600] text-gray-700 md:mb-3">Connect</p>
                         <div className="hidden md:flex flex-col">
                              <a href="https://www.instahyre.com" className="text-gray-500 mb-2">Help Center</a>
                              <p className="text-gray-500 mb-2 cursor-pointer">Contact Us</p>
                              {/* <p className="text-gray-500 mb-2 cursor-pointer" onClick={() => window.testing.showModal()}>Contact Us</p> */}
                              {/* <dialog id="testing">
                                   <Testing />
                              </dialog> */}
                         </div>
                         <div className="flex flex-row gap-x-2">
                              {connect.map(({ id, src, icon }) => (
                                   <div key={id}>
                                        <a href={src}>{icon}</a>
                                   </div>
                              ))}
                         </div>
                    </div>
               </div>
          </div>
     );
}

export default Footer;