import React from 'react'

export const metadata = {
  title:" About Page",
  description:" About",
};
export default function About() {
  return (
 <>
   <div className="flex mt-[60px] w-[100%] mx-auto  h-[550px] rounded-xl overflow-hidden items-center justify-start">
                            
  <div className=" w-[660px]  top-0  flex ">
    <img alt="Placeholder Photo" className="ml-[60px] w-[500px] mt-[80px]" src="https://mistry.store/images/about-banner.png"/>                      
  </div>
                            
  <div className="">                 
  <p className=" ml-4 text-[40px] line-clamp-2 "><span className="text-[black] text-[50px] m-[50px]">

An Exclusive Platform for all </span> <br/><span className="float-end text-[red] text-[50px]"> Home-Interior Professionals </span></p><br/>
<button className="bg-[red] text-white w-[200px] h-[60px] ml-[120px] rounded text-[20px] float-start">Partner With Us</button>               
  </div>
                        
</div> 
{/* ---------------------------------------------------------------------------------------- */}
   <div className="flex mt-[60px] w-[100%] mx-auto  h-[550px] rounded-xl overflow-hidden items-center justify-start">        
  <div className="ml-[120px]  w-[1000px]">                 
 <span className='m-5 font-bold text-[red]'>About Us</span> <p className=" m-5 ">Introducing Mistry.Store, India's first organized platform that simplifies building material purchases for home-building professionals like Architects, Interior Decorators, Contractors & Skilled workers.</p>
<p className='m-5'>A comprehensive platform dealing in over 100+ brands across Plywood & Boards, Hardware & Tools, Electricals & Lights, Paints & Chemicals, Sanitary & Plumbing.</p>
  </div>
  <div className=" w-[1060px]  top-0  flex ">
    <img alt="Placeholder Photo" className="ml-[60px] w-[600px] mt-[20px]" src="https://mistry.store/images/about-material.jpg"/>                      
  </div>              
</div> 
{/* ------------------------------------------------------------------------------------------------ */}
  <div className="flex mt-[60px] w-[100%] mx-auto  h-[550px] rounded-xl overflow-hidden  items-center justify-start">        
  <div className=" w-[1060px]  top-0  flex ">
    <img alt="Placeholder Photo" className="ml-[60px] w-[600px] mt-[20px]" src="https://mistry.store/images/bridging-the-gap.png"/>                      
  </div> 
  <div className=" m-4 mr-[200px]  w-[650px]">                 
 <h6 className='text-[red] font-bold text-[50px] m-2'>Bridging the Gap</h6>
<p className='mt-[60px]'>Indian home-building industry is already a $25+ billion market and growing very fast. While this creates an exciting opportunity for home interior professionals, they also have to deal with an extremely fragmented sourcing ecosystem. Depending upon the size of the professionals business, they face issues of price opacity, dealing with multiple vendors, poor customer service and ad-hoc earnings.</p>
<p className='mt-4 text-[red] font-bold'>We, at Mistry.Store understand these issues and bring a one-stop shop that simplifies building material purchases for home interior professionals like interior designers, architects, contractors, and skilled workers.</p>
  </div>        
</div> 
{/* ----------------------------------------------------------------------- */}
<div><h2 className='text-center m-[70px] font-bold text-[35px]'>We are building an ecosystem that is not only efficient but sustainable for a long-term partnership.</h2></div>
<div><h3 className='text-center font-bold text-[red] text-[30px] m-3'>Mistry.Store Set-Up</h3></div>
<div className='flex'>
  <div className='flex w-[50%] m-[50px]'>
    <img className='w-[250px]' src='https://mistry.store/images/where-house.png'/>
    <p className='mt-[100px]'>Mistry.Store has one of the largest set-ups in NCR to serve all professionals. We have a 20,000 sq. ft. warehouse and sampling area in Gurugram catering to all your needs.</p>
  </div>
   <div className='flex w-[50%] m-[50px]'>
    <img className='w-[250px]' src='https://mistry.store/images/where-house.png'/>
    <p className='mt-[100px]'>Mistry.Store has one of the largest set-ups in NCR to serve all professionals. We have a 20,000 sq. ft. warehouse and sampling area in Gurugram catering to all your needs.</p>
  </div>
 
</div>
<div className="flex justify-center">
    <button className="bg-[red] rounded m-5 w-[150px] h-[40px]">Partner With Us</button>
</div>
<div><h2 className='flex justify-center font-bold text-[30px] m-5 text-[red]'>Meet the Founders</h2></div>
<div className='flex'>
  <div className='w-[50%]'>
    <img className="w-[250px] ml-[300px] flex justify-center" src='https://mistry.store/images/founder1.png'/>
    <h3 className='mt-[30px] font-bold text-[red] flex justify-center ml-[100px]'>Vaibhav Poddar | Co-Founder</h3>
    <p className='ml-[150px] mt-3'>Vaibhav has spent over 15 years in consulting and building businesses for companies like McKinsey & Co., Max Healthcare, and Antara Assisted Care (Max India Group).</p>
  </div>
  <div className='w-[50%] mr-5'>
    <img className="w-[250px] ml-[300px] flex justify-center" src='https://mistry.store/images/founder1.png'/>
    <h3 className='mt-[30px] font-bold text-[red] flex justify-center ml-[100px]'>Vaibhav Poddar | Co-Founder</h3>
    <p className='ml-[150px] mt-3'>Vaibhav has spent over 15 years in consulting and building businesses for companies like McKinsey & Co., Max Healthcare, and Antara Assisted Care (Max India Group).</p>
  </div>
</div>
{/* -------------------------------------------------- */}
<div className="mt-[60px] w-[1220px] mx-auto shadow-md h-[150px] rounded-xl items-center justify-start">
    <p className="text-[white] ml-[60px] text-[20px] m-5">Become a Mistry Partner</p>

   <div className='m-5 ml-[50px] text-[20px]'><h2>Interested to Know More? <br/>Sign up today and become a Mistry Partner!</h2>
  <div className=" ml-[1100px] bg-[red] mr-5 rounded-lg w-[50px] flex justify-center h-[50px]">                 
       --
  </div>
                        </div>
</div>
</>

  )
}
