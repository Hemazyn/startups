import React from 'react';
import topCompanies from "./assets/logos.png";

const TopCompanies = () => {
     return (
          <div className='h-full pb-5 lg:pb-10 border-b border-gray-400'>
               <h1 className="font-serif text-[20px] text-gray-800 text-center my-5 lg:my-10">More than 10,000 tech companies</h1>
               <div className="w-full lg:w-3/5 h-4/5 mx-auto">
                    <img src={topCompanies} alt="top comapnies" className="w-full h-full" />
               </div>
          </div>
     );
}

export default TopCompanies;