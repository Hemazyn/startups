import React from "react";
import response from "./assets/response.webp";
import privacy from "./assets/privacy.webp";
import target from "./assets/target.webp";

const Values = () => {
     const values = [
          {
               id: 1,
               tHead: "Privacy guaranteed",
               tBody: "We value your privacy very highly. You can block specific companies from viewing your profile. Or you can block all companies and just apply to specific ones yourself.",
               src: privacy
          }, {
               id: 2,
               tHead: "Your perfect job, delivered to you",
               tBody: "Do you really want to look at thousands of irrelevant job postings or get spammed by job sites? At Instahyre, we do the work of finding the best jobs for you, so you can sit back and relax.",
               src: target
          }, {
               id: 3,
               tHead: "5X higher response from companies",
               tBody: "Tired of having your applications ignored by companies? Instahyre only matches you with the right jobs, leading to 5X response rates from companies compared to other job sites!",
               src: response
          },
     ]
     return (
          <div className="h-[70%] border-b border-gray-400">
               <div className="md:w-4/5 lg:w-[50%] mx-auto my-5">
                    {values.map(({ id, tHead, tBody, src }) => (
                         <div key={id} className="w-full flex flex-row justify-between items-center mb-5">
                              <div className="w-full px-3 lg:px-0 lg:w-4/5">
                                   <h4 className="font-serif text-gray-800 mb-3">{tHead}</h4>
                                   <p className="text-sm font-serif text-gray-600">{tBody}</p>
                              </div>
                              <img src={src} alt={tHead} className="hidden lg:flex" />
                         </div>
                    ))}
               </div>
          </div>
     );
}

export default Values;