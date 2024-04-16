import React from 'react'

export default function Footer() {
  return (
    <>
    <div className='grid grid-cols-4 w-[100%] bg-[gray] h-[400px] flex'>
        <div className='flex  '><img className="w-[300px] top-[0px] ml-[120px] h-[300px]" src='https://mistry.store/images/logo.svg'/></div>
        <div className='mt-5'>
            <ul className='ml-[100px] mt-[100px]'>
                <li>Home</li>
                <li>About Us</li>
                <li>Partner with Us</li>
                <li>Contact Us</li>
                <li>FAQ's</li>
                <li>Expert Inspection Services</li>
            </ul>
        </div>
        <div className='mt-5'>
            <ul className='ml-[50px] mt-[100px]'>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
                <li>Returns Policy</li>
                <li>Shipping & Delivery Policy</li>
                <li>Terms of Trade</li>
                <li>Need Interior Designer for Your Home?</li>
            </ul>
        </div>
         <div className='mt-5'>
          <ul className='ml-[30px] mt-[100px]'>
          <h4 className='mb-4'>Contact Us</h4>
            
                <li className='flex mr-1'><img src='https://mistry.store/images/home/call-calling.svg'/>+91 80708 80707</li>
                <li className='flex m-1'><img src='https://mistry.store/images/home/sms-edit.svg'/>Marketing: marketing@mistry.store</li>
                <li className='flex'><img src='https://mistry.store/images/home/sms-edit.svg'/>Sales: sales@mistry.store</li>
                <li className='flex'><img src='https://mistry.store/images/home/location.svg'/>Plot no 24, CRPF Road, Sector 61, Gurugram</li>
                
            </ul>
        </div>
    </div>
    </>
  )
}
