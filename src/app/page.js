'use client'
import React, { useState } from "react";
import Slider from "react-slick";
import StoryModel from "./HomeOtherComs/StoryModel";


// export const metadata = {
//   title:" Home Page",
//   description:" Home",
// };
export default function Home() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay:true,
    slidesToShow: 3,
    slidesToScroll: 1
  };
let [modelstatus, setModelStatus] = useState(false);
  return (
   <>
   <StoryModel modelstatus={modelstatus} setModelStatus={setModelStatus} />
   {/* ----------Status Portion starts--------------------- */}
     <div className='flex align-items center justify-center mt-[90px]'>
        <div className="justify-center w-[70px] font-bold text-[12px] m-3">
        <img className="rounded-[50%]" onClick={()=>setModelStatus(!modelstatus)} src='https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/stories/Electricals+%26+Lights+(2).png'/>
        <p>Electricals & Lights</p>
        </div>
        <div className="justify-center w-[70px] font-bold text-[12px] m-3" >
        <img className="rounded-[50%]" src='https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/stories/Plywood+%26+Boards+(1).png'/>
        <p>Plywood & Boards</p>
        </div>
         <div className="justify-center w-[70px] font-bold text-[12px] m-3" >
        <img className="rounded-[50%]" src='https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/stories/Sanitary+%26+Plumbing+(1).png'/>
        <p>Sanitary & Plumbing</p>
        </div>
        <div className="justify-center w-[70px] font-bold text-[12px] m-3" >
      <img className="rounded-[50%]" src='https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/stories/Hardware+%26+Tools+(2).png'/>
      <p>Hardware & Tools</p>
      </div>
        <div className="justify-center w-[70px] font-bold text-[12px] m-3" >
      <img className="rounded-[50%]" src='https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/stories/Mistry+Store+(1).png'/>
      <p>Mistry.store</p>
      </div>
      </div>
       {/* ----------Status Portion Ends-------------------- */}
         {/* ----Slider First Starts------------ */}

<div className="mt-5 w-[1320px] h-[200px] mx-auto">
       <Slider {...settings}>
      <Card2/>
      <Card2/>
      <Card2/>
       <Card2/>
      
    </Slider>
    </div> 
       {/* {/* ------Slider First Ends-------- */}
       {/* ---------------Slider Second Starts-------- */}
<div className="mt-[180px] m-4">
       <Slider {...settings}>
      <Card1/>
       <Card1/>
       <Card1/>
    </Slider>
    </div> 
       {/* ------------Slider Second Ends---------- */}
       {/* ---------------Binary Cards Start----------- */}
    <div className="container mx-auto px-20 flex justify-center mt-5 gap-2 ">
<div className="flex bg-white border border-gray-300 mt-[20px] w-[420px]  shadow-md h-[80px] rounded-xl overflow-hidden items-center justify-start">
                            
  <div className="relative w-[45px] bg-[green] object-center  ml-1 h-[40px] flex ">
    <img alt="Placeholder Photo" className="absolute flex  justify-center w-[40px] h-[40px]" src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/offers/image+253.png"/>                      
  </div>
                            
  <div className="p-4">                 
  <h6 className="text-sm line-clamp-1 font-bold ">FREE DELIVERY</h6>
  <p className="text-sm text-gray-500 mt-1 line-clamp-2">Subscribe to our delivery package to enjoy free..</p>               
  </div>
                        
</div>
<div className="flex bg-white border border-gray-300 mt-[20px] w-[420px]  shadow-md h-[80px] rounded-xl overflow-hidden items-center justify-start">
                            
  <div className="relative w-[45px] bg-[green] object-center  ml-1 h-[40px] flex ">
    <img alt="Placeholder Photo" className="absolute flex  justify-center w-[40px] h-[40px]" src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/offers/image+253.png"/>                      
  </div>
                            
  <div className="p-4">                 
  <h6 className="text-sm line-clamp-1 font-bold ">WELCOME500</h6>
  <p className="text-sm text-gray-500 mt-1 line-clamp-2">Save Rs 500</p>               
  </div>
                        
</div>
</div>
       {/* ----------------Binary Cards Ends--------------- */}
       <div className="h-[40px] bg-[#ffc107] mt-[60px]">hello</div>
       {/* ------------Single image Start----------- */}
     <div className="flex bg-white border border-gray-300 mt-[60px] w-[1220px] mx-auto shadow-md h-[250px] rounded-xl overflow-hidden items-center justify-start">
                            
  <div className=" w-[660px]  top-0  flex ">
    <img alt="Placeholder Photo" className="ml-[60px]" src="https://mistry.store/images/engineer.png"/>                      
  </div>
                            
  <div className="">                 
  <p className=" ml-4 text-[40px] line-clamp-2"><span className="text-[red]  ">Share your requirements &</span> <br/><span className="float-end"> get your Estimate </span></p><span className="text-[red] text-[40px]  float-end">within 4 hrs</span><br/><br/>
<button className="bg-[red] mt-[30px] ml-[200px] rounded text-[20px] float-end">Order Now</button>               
  </div>
                        
</div>
       {/* ---------Single image End-------------- */}
       {/* -------------------Larger part Starts------------ */}
       <div className=" mt-5 bg-[lightpink] h-[500px] ">
        <div className="m-[40px]">
          <h6 className="text-[40px] ml-[150px] mt-5">Here’s how Mistry.Store works</h6>
          <p className="ml-[150px]">All your home building materials, just a few steps away!</p>
        </div>

        <div className="grid grid-cols-2">
          <div className="grid  grid-cols-2 flex w-[200px] gap-0 h-[80px] rounded bg-[yellow] center ml-[200px]">
           
              <img className="w-[80px] bg-[green] " src="https://mistry.store/images/send-req-home.svg"/>
            <div className="bg-[grey] w-[480px] h-[80px]  " >
              {/* <h5>Search & send your requirements</h5> */}
              <p>Send your product requirements by sharing <br/> images, adding items from our master list, call your RM or Whatsapp</p>
              </div>
          {/* ---------------- */}
          <div className="grid  grid-cols-2 flex w-[200px] gap-0 h-[80px] rounded bg-[yellow] center mt-5 ">
           
              <img className="w-[80px] bg-[green]" src="https://mistry.store/images/send-req-home.svg"/>
            <div className="bg-[grey] w-[480px] h-[80px]  " >
              {/* <h5>Search & send your requirements</h5> */}
              <p>Send your product requirements by sharing <br/> images, adding items from our master list, call your RM or Whatsapp</p>
              </div>
          </div>
          {/* ------------ */}
           <div className="grid grid-cols-2 flex w-[200px] h-[80px] rounded bg-[yellow]  mt-[150px] mr-5 ">

           
              <img className="w-[80px] bg-[green]" src="https://mistry.store/images/send-req-home.svg"/>
            <div className="bg-[grey] w-[480px] h-[80px]  " >
              {/* <h5>Search & send your requirements</h5> */}
              <p>Send your product requirements by sharing <br/> images, adding items from our master list, call your RM or Whatsapp</p>
              </div>
          </div>
          {/* ------- */}
</div>
          <div className="grid ">
            <div 
    	className="  overflow-hidden  ml-[120px] max-w-full" >
		<iframe
       		src="https://www.youtube.com/embed/UBOj6rqRUME"
            frameborder="0"
            allowfullscreen
            className="absolute w-[500px] h-[300px]"
        ></iframe>
	</div>
          </div>
        </div>
       </div>
       {/* ----------Larger part Ends----------- */}
       {/* ----------Card Layout Starts-------------- */}
      <div className="flex bg-white border border-gray-300 mt-[60px] w-[1220px] mx-auto shadow-md h-[250px] rounded-xl overflow-hidden items-center justify-start">
                            
  <div className=" w-[660px]  top-0  flex ">
    <img alt="Placeholder Photo" className="ml-[60px]" src="https://mistry.store/images/three-painters.png"/>                      
  </div>
                            
  <div className="">                 
  <p className=" ml-4 text-[40px] line-clamp-2"><span className="text-[red]  ">
Refer Fellow Professionals</span> <br/><span className="float-end"> & Earn Referral Benefits </span></p><br/>
<button className="bg-[red] text-white w-[100px] h-[30px] ml-[200px] rounded text-[15px] float-end">Refer Now</button>               
  </div>
                        
</div>
       {/* ------Card Layout Ends-------------- */}
       {/* --------------Blue Part Starts------------- */}
       <div className="mt-5 bg-[blue] h-[500px]">
        <div className="grid grid-cols-2">
          <div className="m-5">
            <img className="" src="https://mistry.store/images/home/bg-gray-block-left-72.png"/>
            <h6 className="text-[35px] font-bold text-[white]  mb-5 mx-[50px]">Register with us and get access to a world of exclusive PRO Benefits</h6>
            <img className="ml-[50px] top-0" src="https://mistry.store/images/home/underline.png"/>
            <button className="ml-[60px] mt-[45px] m-2 p-2 text-[white] rounded bg-[red]">Register with us</button>
          
          </div>
          <div className="grid grid-cols-2 mt-5 ">
             <div className=" mt-5 bg-white border border-gray-300 w-[190px]  mx-auto shadow-md h-[200px] rounded-xl overflow-hidden">
                <div>
                  <img className="w-[100%] mt-3 h-[80px]" src="https://mistry.store/images/currency-rupee.svg"/>
                </div>
  
                 <div>
                  <h6 className="font-bold text-center">Always Low Prices</h6>
                  <p className="text-[15px] mt-1 text-center">We offer low prices everyday on quality and original products</p>
                 </div>
              </div>
              <div className=" mt-5 bg-white border border-gray-300 w-[190px]  mx-auto shadow-md h-[200px] rounded-xl overflow-hidden">
                <div>
                  <img className="w-[100%] mt-3 h-[80px]" src="https://mistry.store/images/currency-rupee.svg"/>
                </div>
  
                 <div>
                  <h6 className="font-bold text-center">Always Low Prices</h6>
                  <p className="text-[15px] mt-1 text-center">We offer low prices everyday on quality and original products</p>
                 </div>
              </div>
              <div className=" mt-5 bg-white border border-gray-300 w-[190px]  mx-auto shadow-md h-[200px] rounded-xl overflow-hidden">
                <div>
                  <img className="w-[100%] mt-3 h-[80px]" src="https://mistry.store/images/currency-rupee.svg"/>
                </div>
  
                 <div>
                  <h6 className="font-bold text-center">Always Low Prices</h6>
                  <p className="text-[15px] mt-1 text-center">We offer low prices everyday on quality and original products</p>
                 </div>
              </div>
            <div className=" mt-5 bg-white border border-gray-300 w-[190px]  mx-auto shadow-md h-[200px] rounded-xl overflow-hidden">
                <div>
                  <img className="w-[100%] mt-3 h-[80px]" src="https://mistry.store/images/currency-rupee.svg"/>
                </div>
  
                 <div>
                  <h6 className="font-bold text-center">Always Low Prices</h6>
                  <p className="text-[15px] mt-1 text-center">We offer low prices everyday on quality and original products</p>
                 </div>
              </div>
          </div>
        </div>
       </div>
       {/* -------------Blue Part Ends------------------- */}
       {/* --------------Large Card Layout Start-------------------- */}
           <div className="flex grid grid-rows-2 mt-5 bg-white gap-none border border-gray-300 w-[1220px] mx-auto shadow-md h-[300px] rounded-xl  ">
                            
  <div className=" w-[660px] h-[50px] ml-4 mb-2 flex ">
    <span className="text-black top-0 text-[50px]">Trusted by <span className="text-[red] ">75+ Brands</span></span>
                 </div>
  <div className="flex top-[0px]   ml-5 mt-4 grid grid-cols-4 h-[50px] w-[900px] ">
    <div className="rounded-full text-center items-center w-[150px] m-1  border-sky-500 justify-items-center bg-[black] text-white ">Electricals</div>
    <div className="rounded-full text-center items-center w-[150px] m-1  justify-items-center bg-[black] text-white ">Paints</div>
    <div className="rounded-full text-center items-center w-[150px] m-1 justify-items-center bg-[black] text-white ">Wood Materials</div>
    <div className="rounded-full text-center items-center w-[200px] m-1  justify-items-center bg-[black] text-white">Hardware & Plumbing</div>
  </div>
  <div className="flex mt-5 mb-5 ">
<div className="flex items-center justify-center bg-white border border-gray-300 w-[120px] mx-auto shadow-md h-[120px] rounded-xl overflow-hidden">
    <img src="https://mistry.store/images/electricals/elctricals1.svg"  />
</div>
 <div className="flex items-center justify-center bg-white border border-gray-300 w-[120px] mx-auto shadow-md h-[120px] rounded-xl overflow-hidden">
    <img src="https://mistry.store/images/electricals/elctricals1.svg"  />
</div>
  <div className="flex items-center justify-center bg-white border border-gray-300 w-[120px] mx-auto shadow-md h-[120px] rounded-xl overflow-hidden">
    <img src="https://mistry.store/images/electricals/elctricals1.svg"  />
</div>
  <div className="flex items-center justify-center bg-white border border-gray-300 w-[120px] mx-auto shadow-md h-[120px] rounded-xl overflow-hidden">
    <img src="https://mistry.store/images/electricals/elctricals1.svg"  />
</div>
  <div className="flex items-center justify-center bg-white border border-gray-300 w-[120px] mx-auto shadow-md h-[120px] rounded-xl overflow-hidden">
    <img src="https://mistry.store/images/electricals/elctricals1.svg"  />
</div>
  <div className="flex items-center justify-center bg-white border border-gray-300 w-[120px] mx-auto shadow-md h-[120px] rounded-xl overflow-hidden">
    <img src="https://mistry.store/images/electricals/elctricals1.svg"  />
</div>
 <div className="flex items-center justify-center bg-white border border-gray-300 w-[120px] mx-auto shadow-md h-[120px] rounded-xl overflow-hidden">
    <img src="https://mistry.store/images/electricals/elctricals1.svg" />
</div>
  <div className="flex items-center justify-center bg-white border border-gray-300 w-[120px] mx-auto shadow-md h-[120px] rounded-xl overflow-hidden">
    <img src="https://mistry.store/images/electricals/elctricals1.svg"/>
</div>
</div>
</div>
       {/* -------------Large Card Layout End---------------- */}
       {/* ------------Second Blue Part in White Start -------------*/}
       <div className="mt-5 h-[500px]">
        <div className="grid grid-cols-2">
          <div className="m-5">
            <img className="" src="https://mistry.store/images/home/bg-gray-block-left-72.png"/>
            <h6 className="text-[40px] mb-5 mx-[50px]">Exclusive platform for all</h6>
            <p className="font-bold ml-[40px] text-[30px]">Home Building Professionals</p>
           <p className=" ml-[40px] text-[20px] mt-3"> Introducing Mistry.Store, India's first organized platform that simplifies building material purchases for home-building professionals like Architects, Interior Decorators, Contractors & Skilled workers.<br/><br/>
A comprehensive platform dealing in over 100+ brands across Plywood & Boards, Hardware & Tools, Electricals & Lights, Paints & Chemicals, Sanitary & Plumbing.</p>
          </div>
          <div className="grid grid-cols-2 mt-5 ">
             <div className=" mt-5 bg-white border border-gray-300 w-[190px]  mx-auto shadow-md h-[200px] rounded-xl overflow-hidden">
                <div>
                  <img className="w-[100%] mt-3 h-[80px]" src="https://mistry.store/images/currency-rupee.svg"/>
                </div>
  
                 <div>
                  <h6 className="font-bold text-center">Always Low Prices</h6>
                  <p className="text-[15px] mt-1 text-center">We offer low prices everyday on quality and original products</p>
                 </div>
              </div>
              <div className=" mt-5 bg-white border border-gray-300 w-[190px]  mx-auto shadow-md h-[200px] rounded-xl overflow-hidden">
                <div>
                  <img className="w-[100%] mt-3 h-[80px]" src="https://mistry.store/images/currency-rupee.svg"/>
                </div>
  
                 <div>
                  <h6 className="font-bold text-center">Always Low Prices</h6>
                  <p className="text-[15px] mt-1 text-center">We offer low prices everyday on quality and original products</p>
                 </div>
              </div>
              <div className=" mt-5 bg-white border border-gray-300 w-[190px]  mx-auto shadow-md h-[200px] rounded-xl overflow-hidden">
                <div>
                  <img className="w-[100%] mt-3 h-[80px]" src="https://mistry.store/images/currency-rupee.svg"/>
                </div>
  
                 <div>
                  <h6 className="font-bold text-center">Always Low Prices</h6>
                  <p className="text-[15px] mt-1 text-center">We offer low prices everyday on quality and original products</p>
                 </div>
              </div>
            <div className=" mt-5 bg-white border border-gray-300 w-[190px]  mx-auto shadow-md h-[200px] rounded-xl overflow-hidden">
                <div>
                  <img className="w-[100%] mt-3 h-[80px]" src="https://mistry.store/images/currency-rupee.svg"/>
                </div>
  
                 <div>
                  <h6 className="font-bold text-center">Always Low Prices</h6>
                  <p className="text-[15px] mt-1 text-center">We offer low prices everyday on quality and original products</p>
                 </div>
              </div>
          </div>
        </div>
       </div>
       {/* -------------Second Blue Part in End------------ */}
       {/* -------------------Image Section Start------------ */}
       <div className="mt-5 h-[750px] pb-[100px] m-[50px] ">
        <h6 className="text-center mt-[60px] text-[40px] font-bold">Be a part of Mistry’s Growing Community</h6>
        <div>
          <div className="grid  mx-auto w-[950px]  grid-cols-4 mt-[30px] ">
            <div className="mx-auto m-5"><img  src="https://mistry.store/images/architect.png"/><p className="font-bold flex  justify-center text-[20px] mt-2">Architects</p></div>
            <div className="mx-auto m-5"><img src="https://mistry.store/images/architect.png"/><p className="font-bold flex  justify-center text-[20px] mt-2">Architects</p></div>
            <div className="mx-auto m-5"><img src="https://mistry.store/images/architect.png"/><p className="font-bold flex  justify-center text-[20px] mt-2">Architects</p></div>
           <div className="mx-auto m-5"><img src="https://mistry.store/images/architect.png"/><p className="font-bold flex  justify-center text-[20px] mt-2">Architects</p></div>
          </div>
           <div className="grid  mx-auto w-[950px]  grid-cols-4  mt-[10px] ">
            <div className="mx-auto m-5"><img  src="https://mistry.store/images/architect.png"/><p className="font-bold flex  justify-center text-[20px] mt-2">Architects</p></div>
            <div className="mx-auto m-5"><img src="https://mistry.store/images/architect.png"/><p className="font-bold flex  justify-center text-[20px] mt-2">Architects</p></div>
            <div className="mx-auto m-5"><img src="https://mistry.store/images/architect.png"/><p className="font-bold flex  justify-center text-[20px] mt-2">Architects</p></div>
           <div className="mx-auto m-5"><img src="https://mistry.store/images/architect.png"/><p className="font-bold flex  justify-center text-[20px] mt-2">Architects</p></div>
          </div>
        </div>
       </div>
       {/* ----------------Image Section End----------- */}
       {/* -----------------Mobile Section Start---------- */}
       <div className="grid grid-cols-2  h-[550px] bg-[lightblue]">
        <div>
          <h6 className="text-[35px] mx-auto text-center ml-[60px] mt-[180px]">Mistry.Store Download the App Now!</h6>
          <div className="flex mx-[100px] m-5">
            <img className="m-2" src="https://mistry.store/images/home/google-play.png"/>
            <img className="m-2" src="https://mistry.store/images/home/app-store.png"/>
          </div>
        </div>
        <div>
          <img className="mt-[40px]  ml-[250px]" src="https://mistry.store/images/home/mobile-img.png"/>
        </div>
       </div>
       {/* -----------------Mobile Section Ends---------------- */}
       {/* --------Red Block Start------------- */}
       <div className="bg-[red] h-[500px]">
        <div><h6 className="text-[40px]  text-[white] w-[900px] mb-5 ml-[150px]  ">What our Professionals say about us!</h6></div>
        <div className="grid grid-cols-4 ml-[100px]">
          <div className=" m-5 mx-auto"> 
            <div className="w-[280px] h-[320px] bg-[white] shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
              <div className="">
              <img className="p-2" src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/proreviews/Tanu+Gupta+Thumbnail+(2)+1.png"/>
              <div className="flex">
              <div className="flex">
                <img className="w-[30px] h-[30px] m-3" src="https://mistry.store/images/home/avatar.png"/>
                </div>
              <div><h6 className="text-[15px] font-bold mt-3">Tanu Gupta</h6><p className="text-[10px]">Interior Designer</p></div></div></div>
              <p className="overflow-hidden m-1 text-[12px]">Mistry.Store is offering all building material under one roof which makes my life easier. I recommend them to all people I know. I hope they keep up with the good work and keep providing us with good service.</p>
           </div>
           </div>
           <div className=" m-5 mx-auto"> 
            <div className="w-[280px] h-[320px] bg-[white] shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
              <div className="">
              <img className="p-2" src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/proreviews/Tanu+Gupta+Thumbnail+(2)+1.png"/>
              <div className="flex">
              <div className="flex">
                <img className="w-[30px] h-[30px] m-3" src="https://mistry.store/images/home/avatar.png"/>
                </div>
              <div><h6 className="text-[15px] font-bold mt-3">Tanu Gupta</h6><p className="text-[10px]">Interior Designer</p></div></div></div>
              <p className="overflow-hidden m-1 text-[12px]">Mistry.Store is offering all building material under one roof which makes my life easier. I recommend them to all people I know. I hope they keep up with the good work and keep providing us with good service.</p>
           </div>
           </div>
          <div className=" m-5 mx-auto"> 
            <div className="w-[280px] h-[320px] bg-[white] shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
              <div className="">
              <img className="p-2" src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/proreviews/Tanu+Gupta+Thumbnail+(2)+1.png"/>
              <div className="flex">
              <div className="flex">
                <img className="w-[30px] h-[30px] m-3" src="https://mistry.store/images/home/avatar.png"/>
                </div>
              <div><h6 className="text-[15px] font-bold mt-3">Tanu Gupta</h6><p className="text-[10px]">Interior Designer</p></div></div></div>
              <p className="overflow-hidden m-1 text-[12px]">Mistry.Store is offering all building material under one roof which makes my life easier. I recommend them to all people I know. I hope they keep up with the good work and keep providing us with good service.</p>
           </div>
           </div>
          <div className=" m-5 mx-auto"> 
            <div className="w-[280px] h-[320px] bg-[white] shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
              <div className="">
              <img className="p-2" src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/proreviews/Tanu+Gupta+Thumbnail+(2)+1.png"/>
              <div className="flex">
              <div className="flex">
                <img className="w-[30px] h-[30px] m-3" src="https://mistry.store/images/home/avatar.png"/>
                </div>
              <div><h6 className="text-[15px] font-bold mt-3">Tanu Gupta</h6><p className="text-[10px]">Interior Designer</p></div></div></div>
              <p className="overflow-hidden m-1 text-[12px]">Mistry.Store is offering all building material under one roof which makes my life easier. I recommend them to all people I know. I hope they keep up with the good work and keep providing us with good service.</p>
           </div>
           </div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        
       </div>
       {/* -------------Red Block Ends---------- */}
       {/* ---------------News Block Start--------------- */}
       <div className="bg-[grey] ">
        <div><h6 className="text-[40px] text-[black] w-[900px] ml-[150px]  ">Mistry.Store in News</h6></div>
        <div className="grid grid-cols-4  ml-[100px]">
         <div className=" m-5 mx-auto"> 
            <div className="w-[280px] h-[320px] bg-[white] shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
              <img className="p-2" src="https://static.wixstatic.com/media/d64c34_7b5f3945050c4419b690b8966f93e795~mv2.jpg/v1/fill/w_767,h_493,al_c,lg_1,q_85,enc_auto/d64c34_7b5f3945050c4419b690b8966f93e795~mv2.jpg"/>
              <div><p className="font-bold m-3">Mistry.Store Launches Indias First Building Material Sampling Van</p></div>
             <a className="m-3 text-[red]">Read More...</a>
          </div>
           </div>
             <div className=" m-5 mx-auto"> 
            <div className="w-[280px] h-[320px] bg-[white] shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
              <img className="p-2" src="https://static.wixstatic.com/media/d64c34_7b5f3945050c4419b690b8966f93e795~mv2.jpg/v1/fill/w_767,h_493,al_c,lg_1,q_85,enc_auto/d64c34_7b5f3945050c4419b690b8966f93e795~mv2.jpg"/>
              <div><p className="font-bold m-3">Mistry.Store Launches Indias First Building Material Sampling Van</p></div>
             <a className="m-3 text-[red]">Read More...</a>
          </div>
           </div>
               <div className=" m-5 mx-auto"> 
            <div className="w-[280px] h-[320px] bg-[white] shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
              <img className="p-2" src="https://static.wixstatic.com/media/d64c34_7b5f3945050c4419b690b8966f93e795~mv2.jpg/v1/fill/w_767,h_493,al_c,lg_1,q_85,enc_auto/d64c34_7b5f3945050c4419b690b8966f93e795~mv2.jpg"/>
              <div><p className="font-bold m-3">Mistry.Store Launches Indias First Building Material Sampling Van</p></div>
             <a className="m-3 text-[red]">Read More...</a>
          </div>
           </div>
          
          
        </div>
        
       </div>
       {/* -----------------News Block Ends--------------- */}
       {/* -------------Blog Block Start----------- */}
            <div className="mt-5 ">
        <div><h6 className="text-[40px] text-[black] w-[900px] ml-[150px]  ">Mistry.Store Blogs</h6></div>
        <div className="grid grid-cols-4  ml-[100px]">
              <div className=" m-5 mx-auto"> 
            <div className="w-[280px] h-[320px] bg-[lightpink] shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
              <img className="p-2" src="https://static.wixstatic.com/media/d64c34_7b5f3945050c4419b690b8966f93e795~mv2.jpg/v1/fill/w_767,h_493,al_c,lg_1,q_85,enc_auto/d64c34_7b5f3945050c4419b690b8966f93e795~mv2.jpg"/>
              <div><p className="font-bold m-3">Mistry.Store Launches Indias First Building Material Sampling Van</p></div>
             <a className="m-3 text-[red]">Read More...</a>
          </div>
           </div>
              <div className=" m-5 mx-auto"> 
            <div className="w-[280px] h-[320px] bg-[lightpink] shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
              <img className="p-2" src="https://static.wixstatic.com/media/d64c34_7b5f3945050c4419b690b8966f93e795~mv2.jpg/v1/fill/w_767,h_493,al_c,lg_1,q_85,enc_auto/d64c34_7b5f3945050c4419b690b8966f93e795~mv2.jpg"/>
              <div><p className="font-bold m-3">Mistry.Store Launches Indias First Building Material Sampling Van</p></div>
             <a className="m-3 text-[red]">Read More...</a>
          </div>
           </div>
               <div className=" m-5 mx-auto"> 
            <div className="w-[280px] h-[320px] bg-[lightpink] shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
              <img className="p-2" src="https://static.wixstatic.com/media/d64c34_7b5f3945050c4419b690b8966f93e795~mv2.jpg/v1/fill/w_767,h_493,al_c,lg_1,q_85,enc_auto/d64c34_7b5f3945050c4419b690b8966f93e795~mv2.jpg"/>
              <div><p className="font-bold m-3">Mistry.Store Launches Indias First Building Material Sampling Van</p></div>
             <a className="m-3 text-[red]">Read More...</a>
          </div>
           </div>
           </div>
           </div>
       {/* ----------------Blog Block Ends------------- */}
       {/*------------------ Blue card starts here------------- */}
   <div className="flex bg-[#002f6c] border border-gray-300 mt-[60px] w-[1220px] mx-auto shadow-md h-[150px] rounded-xl overflow-hidden items-center justify-start">
                            
  <div className=" w-[660px]  top-0  flex "> 
   <span className="text-[white] ml-[60px] text-[30px]">Find Building Material for your next construction project!</span>
  </div>
                            
  <div className="">                 
 
<button className="bg-[red] text-white w-[150px] h-[60px] ml-[300px] font-bold rounded text-[20px] float-end">Contact Us</button>               
  </div>
                        
</div>
       {/* ------------------Blue card ends here------------------------------------- */}
     
   </>
  );
}
// -------------------------------------------------
function Card1() {
  return (
    <div className="bg-[yellow] w-[750px] h-[300px] m-5">
      <div className="w-252 h-[200px]  shadow-md rounded-xl mx-auto m-3">
        <div>
          <img src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/homeBanner/images/deliveryPackageBanner.jpg" alt="Product" className="rounded-t-xl m-5 w-[2000px]" />
     </div>
    
      </div>
    </div>
  );
}
// --------------------------------------------------
function Card2() {
  return (
    <div>
      <div className="w-72 bg-white shadow-md bg-[red] rounded-xl m-5">
        <div className="bg-[purple] mx-auto">
          <img src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/partners/Tesla.png" alt="Product" className="h-40 w-52 mx-auto  rounded-t-xl" />
        </div>
        <h3 className="text-center font-bold">HDHMR 16.75 mm</h3>
        <p className="text-center">Starting From</p>
        <div>
          <p className="color-[red] text-center"> ₹76/- </p>
          <p className="text-center">per sqft</p>
        </div>
      </div>
    </div>
  );
}


