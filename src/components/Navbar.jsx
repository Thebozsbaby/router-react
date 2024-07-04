import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='w-full h-[80px] bg-slate-200 flex items-center justify-around'>
        <Link href="">bozsbaby</Link>

        <div>
            <Link className='mr-3' to="/">Home</Link>
            <Link className='mr-3' to="/about">About</Link>
            <Link className='mr-3' to="/contact">Contact</Link>
            <Link className='mr-3' to="/project">Project</Link>
        </div>

        <div className='button-container'> 
            <button>Sign up</button>
            <button>Login</button>
        </div>
    </nav>
  )
}

export default Navbar