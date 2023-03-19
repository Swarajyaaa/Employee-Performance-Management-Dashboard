import React from 'react'
import {Link} from 'react-router-dom'

function MeetingCard({meeting}) {
  let startTime = new Date(meeting.start.dateTime).toLocaleTimeString();
  let endTime = new Date(meeting.end.dateTime).toLocaleTimeString();
  let meetingDate = new Date(meeting.start.dateTime).toDateString();
  return (
    <div className='bg-[#e1e5f7] p-2 w-[350px] rounded-md shadow-md hover:bg-[#c5cbfa] ease-in duration-150' style={{
        border:"none",
        borderLeft :"10px solid #5b5fc7"
    }}>
        {/* <h3 className='text-[#413e89] font-semibold'>{meeting.subject}</h3> */}
        <h3 className='text-[#413e89] text-[12px]'>{meetingDate}</h3>
        <h3 className='text-[#413e89] text-[12px]'>{startTime.slice(0,-6) + ' ' + startTime.slice(-2) + ' - ' + endTime.slice(0,-6) + ' ' + endTime.slice(-2)}</h3>
        {/* <h3 className='text-[#413e89] text-[12px]'>{meeting.location.displayName}</h3> */}
        {/* <h3 className='text-[#413e89] text-[12px]'>{meeting.organizer.emailAddress.name}</h3> */}
        
    </div>
  )
}

export default MeetingCard


