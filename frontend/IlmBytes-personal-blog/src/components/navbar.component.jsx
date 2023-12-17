import logo from '../assets/blog-logo.svg';
import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
    const [searchboxshow, setSearchboxshow] = useState(false);
    return (
        <>
            <nav className='z-10 sticky top-0 flex items-center gap-12 w-full px-[5vw] py-5 h-[80px] border-b bg-white border-gray-200'>
                <Link to="/" className='flex items-center text-3xl font-extrabold'>
                    <img src={logo} className='h-12 w-full' alt="logo" />
                    <span>IlmBytes</span>
                </Link>
                <div className={(searchboxshow ? 'block ' : 'hidden ') + 'absolute border-b mt-0.5 py-4 px-[5vw] bg-white left-0 w-full top-full border-gray-200 md:block md:border-0 md:relative md:inset-0 md:p-0 md:w-auto '}>
                    <input type="text" placeholder='Search' className='w-full bg-gray-200 md:w-auto py-3 pl-6 pr-[21%] md:pr-6 rounded-full focus:bg-transparent placeholder:text-gray-600 md:pl-12' />
                    <i className="fi fi-rr-search absolute right-[10%] md:pointer-events-none md:left-5 top-1/2 -translate-y-1/2 text-gray-600 mt-0.5" ></i>
                </div>

                <div className='flex items-center gap-3 md:gap-6 ml-auto'>
                    <button className='bg-gray-200 w-12 h-12 text-black rounded-full md:hidden flex items-center justify-center' onClick={() => {
                        setSearchboxshow(!searchboxshow);
                    }}>
                        <i className="fi fi-rr-search text-xl mt-0.5" ></i>
                    </button>
                    <Link to="/editor" className=' md:flex '>
                        <button className='hidden md:flex gap-2 text-gray-600 hover:text-black hover:bg-gray-200 hover:rounded-md p-3 px-4 opacity-75'>
                            <i className="fi fi-rr-file-edit mt-0.5"></i>Write
                        </button>
                    </Link>
                    <Link to="/login" className='whitespace-nowrap bg-black text-white rounded-full py-2 px-6 text-xl capitalize hover:bg-opacity-70'>
                        Login
                    </Link>
                    <Link to="/register" className='hidden md:block whitespace-nowrap bg-gray-200 text-black rounded-full py-2 px-6 text-xl capitalize hover:bg-opacity-70'>
                            Register
                    </Link>
                </div>
            </nav>
            <Outlet />
        </>
    )
}

export default Navbar;