import React from 'react'

export default function Header() {
  return (
   <>
    <div className='grid grid-cols-2 py-[15px] border-2 fixed top-0 bg-[white] w-[100%]'>
    
        <div className="hidden md:flex items-center space-x-1  ">
            <figure>
          <img className="w-[180px]" src='https://mistry.store/images/logo.svg'/>
          </figure>
          <nav>
            <ul className='flex gap-[20px] '>
                <li className=''>
                    <a href="#" className="py-5 px-3 text-gray-700 ml-[20px] hover:text-red-500 fontweight-bolder" >Home</a>
                    </li>
                <li className='text-[14px]'>
                   <a href="#" className="py-5 px-3 text-gray-700  hover:text-red-500 fontweight-bolder" >About Us</a>
                </li>
                <li>
                  <a href="#" className="py-5 px-3 text-gray-700  hover:text-red-500 fontweight-bolder" >PDF Catalog</a>
                </li>
                <li>
                  <a href="#" className="py-5 px-3 text-gray-700  hover:text-red-500 fontweight-bolder" >Contact Us</a>
                </li>
              </ul>
          </nav>
              </div>
            <div className='grid grid-cols-[50%_25%_auto] flex align-items center'>
        <div className='flex'>
         {/* <div className="font-sans text-black min-h-screen bg-white flex items-center justify-center"> */}
  {/* <div className="border rounded overflow-hidden flex"> */}
     <button className="flex items-center justify-center px-4 border-l">
      <svg className="h-4 w-4 text-grey-dark" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"/></svg>
    </button>
    <input type="text"placeholder="Search..."/>
        </div>
        <div className='flex flex-row'>
            <img className="w-[30px] h-[30px]" src="https://mistry.store/images/lang-switch.svg"/>
            <img className="w-[30px] h-[30px]" src="https://mistry.store/images/call-calling-mobile.svg"/>
            <img className="w-[30px] h-[30px]" src="https://mistry.store/images/cart-icon.svg"/>
        </div>
        <div className=''>
            <button className='bg-[red] text-white p-[8px_20px] hover:bg-white hover:text-[black]'>Login or signUp</button>
        </div>

        </div>
        <div>
        
        </div>
      </div>
    

   </>
  )
}
