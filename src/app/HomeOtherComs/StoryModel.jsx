import React from 'react'
import Stories from 'react-insta-stories';

export default function StoryModel({modelstatus,setModelStatus}) {
    let stories = [
    "https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/stories/Electrical+wires.jpeg",
    "https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/stories/Plywood+%26+Boards+4.png"
]

  return (

    <>
    
    {  modelstatus ? 
    
         <div className='w-[100%] h-screen fixed bg-[rgba(0,0,0,0.5)] top-0'>
        <div className='w-[350px] h-[600px] bg-[white] mx-auto mt-[50px]'>
            <span className='absolute right-0 text-[40px] text-white' onClick={() => setModelStatus(false)}>&times;</span>

            <div className='w-[350px] mt-[50px]'>

            <Stories
			stories={stories}
			defaultInterval={1500}
			width={"100%"}
			height={768}
		/>

            </div>
        </div>
    </div>
    :
    ""
    
    
    
    }
           

    </>
    
  )
}