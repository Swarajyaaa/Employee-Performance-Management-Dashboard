import React from 'react'
import {Link} from 'react-router-dom'

function MeetingCard() {
  return (
    <a className='block' href="https://teams.microsoft.com/l/meetup-join/19%3ameeting_MDI5ZGQzNmYtZTFmMy00Yjc4LTliNTItZWNiNTBiMTJjNmQ4%40thread.v2/0?context=%7b%22Tid%22%3a%22587c02ce-b294-44bb-8fd6-0f5695508d28%22%2c%22Oid%22%3a%2222bcaa93-fd1f-4a8a-8ed9-fb2331e2cb8d%22%7d " target={"_blank"}>
    <div className='bg-[#e1e5f7] p-2 w-[350px] rounded-md shadow-md hover:bg-[#c5cbfa] ease-in duration-150' style={{
        border:"none",
        borderLeft :"10px solid #5b5fc7"
    }}>
        <h3 className='text-[#413e89] font-semibold'>All Hands Meet!</h3>
        <h3 className='text-[#413e89] text-[12px]'>3:00 Pm - 5:00 Pm</h3>
        <h3 className='text-[#413e89] text-[12px]'>Board Room Noida</h3>
        <h3 className='text-[#413e89] text-[12px]'>Kajala Madhawal</h3>
        
    </div>
     </a>
  )
}

export default MeetingCard


