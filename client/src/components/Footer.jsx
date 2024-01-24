import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="mt-8 w-[screen] bg-teal-800">
     <div className="w-[90%] m-auto">
        <div className="w-full mb-5 mt-6 flex justify-between items-center">
            <div>
            <Link to="/" className="text-3xl font-bold text-white">
                    R-Est<span className="text-yellow-400">Bazaar</span>
            </Link>
            </div>
            <div>
            <ul className="flex flex-col mt-5 items-center flex-wrap">
                <li>
                <Link
                    href="/"
                    className={`text-[16px] text-slate-100 font-[500] hover:text-yellow-400 duration-200 transition px-4`}
                >
                    Home
                </Link>
                </li>
                <li>
                <Link
                    href="/about"
                    className={`text-[16px] text-slate-100 font-[500] hover:text-yellow-400 duration-200 transition px-4`}
                >
                    About Us
                </Link>
                </li>
            </ul>
            </div>
        </div>
        <p className={`text-[18px] font-[400] text-slate-100 text-center`}>
            Copyright © 2023 Vikash Maurya . All Rights Reserved
        </p>
        <br />
     </div>
    </div>
  )
}

export default Footer