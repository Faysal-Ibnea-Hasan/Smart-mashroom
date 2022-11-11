import React from 'react'

function Navbar() {
  return (
    <>
    {/* Logo start */}
    <nav className='h-20 w-auto flex bg-blue-400 '>
      <div className="logo h-20 w-20 rounded-full bg-white">

      </div>
      {/* Logo end */}

      {/* button start */}
      <div className="button h-20 flex w-auto items-center ml-auto space-x-1.5 pr-2">
      <button className='text-white bg-blue-600 hover:bg-blue-700 rounded-3xl h-11 w-20 border  '>Login</button>
      <button className='text-white bg-blue-600 hover:bg-blue-700  rounded-3xl h-11 w-20 border'>Register</button>
      </div>
      {/* button end */}

      

    </nav>
    </>
  )
}

export default Navbar