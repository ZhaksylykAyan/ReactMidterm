import React from 'react'
import {Link} from "react-router-dom";

const Navbar = () => {
    return(
        <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
            <Link to='/'>
                <h1 className='text-white text-4xl font-bold cursor-pointer'>Twitter</h1>
            </Link>
            <div>
                <Link to='/Post'>
                    <button className='text-white pr-4 bg-blue-400 px-6 py-2 rounded cursor-pointer'>Post page</button>
                </Link>
                <Link to='/Profile'>
                    <button className='bg-red-500 text-white px-6 py-2 rounded cursor-pointer'>Profile page</button>
                </Link>
            </div>
        </div>
    );

}

export default Navbar;