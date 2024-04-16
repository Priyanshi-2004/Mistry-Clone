import React from 'react'

export default function page() {
  return (
   <>
    <div className='grid grid-cols-2 mt-[50px] flex'>
      <div className='mt-[40px]'><h2 className=' text-[30px] mt-[50px] ml-[380px]'>Got Questions?</h2><p className=' ml-[300px] text-[red]'>Fill in the details and we'll get in touch with you shortly!</p>
      <img className='mt-[70px] ml-[250px]' src='https://mistry.store/images/contact-banner.png'/></div>
      <div className='mt-[90px] ml-[80px]'>
        <h3>I Want to</h3>
        <div className='flex gap-3 radio-item'>
          <label>Join Our Supplier Base</label>
          <label>Join Our Supplier Base</label>
          <label>Join Our Supplier Base</label>
          </div>
          <input className='mt-5' type='text' placeholder='Enter Your Name'/><br/>
          <input className='mt-[40px]' type='text' placeholder='Enter Your Phone Number'/><br/>
          <input className='mt-[40px]' type='text' placeholder='Enter Your Email'/><br/>
          <textarea className='mt-[40px] w-[450px] h-[200px] border ' placeholder='Enter your Message'/><br/>
          <button className='text-white bg-[red] w-[150px] h-[40px] rounded mt-[30px]'>Send Message</button>
        </div>
    </div>
    <div className='flex'>
      <div>
      <img className='mt-[150px] ml-[360px]' src='https://mistry.store/images/contact-mystry-icon.png'/>
      <p className='mt-[5px] ml-[180px]'>Thank you for reaching out to us! We would love to address your queries.</p>
      <p className='ml-[350px]'>You can reach out to us at:</p>
      <a className="color-primary text-decoration-none ml-[400px]" href="tel: +918070880707">+91 80708 80707</a><br/>
      <a href="mailto:sales@mistry.store" className="color-primary text-decoration-none ml-[400px]">sales@mistry.store</a><br/>
      <a href="mailto:marketing@mistry.store" className="color-primary text-decoration-none ml-[400px]">marketing@mistry.store</a><br/>
      <h2 className='ml-[400px] mt-[30px] font-bold text-[20px]'>Plot No. 24,<br/>
<span className='mr-[10px]'>CRPF Road Sector 61<br/></span>
Gurugram - 122011</h2>
    </div>
    <div className='ml-[100px] m-[50px] mt-[100px] w-[200px] h-[500px]'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14037.160756565965!2d77.09178!3d28.4104994!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdeb9e9378460ef5a!2smistry.store!5e0!3m2!1sen!2sin!4v1670156576911!5m2!1sen!2sin" frameborder="0" className ="w-[500px] h-[500px]" allowfullscreen=""></iframe>
    </div>
    </div>
   </>
  )
}
