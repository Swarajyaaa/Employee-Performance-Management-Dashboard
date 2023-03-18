import React, { useState, useEffect } from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import ReactTooltip from "react-tooltip";
import Chart_Pie from "../Charts/Chart_Pie";
import MeetingCard from "../MeetingCard/MeetingCard";
import axios from 'axios'
const BASE_URL = 'http://localhost:5000/api'

function UserPage({ user, projectDate }) {
  const [allMeetingByPerson, setAllMeetingByPerson] = useState([]);
  const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];
  const today = new Date();
  const randomValues = getRange(200).map((index) => {
    return {
      date: shiftDate(today, -index),
      count: getRandomInt(1, 3),
    };
  });

  function shiftDate(date, numDays) {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + numDays);
    return newDate;
  }

  function getRange(count) {
    return Array.from({ length: count }, (_, i) => i);
  }

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  useEffect(() => {
    const fetchAllMeetings = async () => {
        console.log('sshs')
        const responseData = await axios.get(BASE_URL + '/meetings');
        let allMeeting = responseData.data.value;
        setAllMeetingByPerson(allMeeting)
    }
    fetchAllMeetings();
    return () => {
      
    }
  }, [])
  

  return (
    <div className="flex space-x-4">
      <div className="w-[800px]">
        <div className="flex justify-between rounded-md bg-gray-50 p-4 w-[100%]">
          <div className=" w-[400px]  ">
            <div className="projectMember mb-4  p-2 w-[100%] flex items-center">
              <img
                className="h-10 w-10 mr-4 rounded-full object-cover"
                src="https://via.placeholder.com/150"
                alt="User Avatar"
              />
              <div>
                <h2 className="text-md font-semibold text-gray-900 ">
                  {user.user.name}
                </h2>
                <p className="text-gray-700 text-sm">{user.roles[0].name}</p>
              </div>
            </div>
            <div className="pl-2">
              <h2 className="text-[1vw]  mb-[0.5vw]">
                {user.user.name.split(" ")[0] + `'s` + " contribution in "}
                <strong>{user.project.name}</strong>
                {" since " + new Date(projectDate).toLocaleDateString()}
              </h2>
            </div>
            <div className="flex space-x-[1vw] w-[100%] mt-4">
              <div className="flex-1">
                <h6 className="font-semibold pt-[0.5vw] pl-2 text-[1vw]">
                  Time Elapsed
                </h6>
                <h1 className="text-[3vw] text-center mt-[-0.625vw] text-[#FFC300]">
                  {32}
                  <span className="text-[1vw]"> Hrs.</span>
                </h1>
              </div>
              <div className="flex-1">
                <h6 className="font-semibold pt-[0.5vw] pl-[1vw] text-[1vw]">
                  Total Issues
                </h6>
                <h1 className="text-[3vw] text-center mt-[-0.625vw] text-[#2ECC71]">
                  {45}
                </h1>
              </div>
              <div className=" flex-1">
                <h6 className="font-semibold  pt-[0.5vw] pl-[1vw] text-[1vw]">
                  Total Blockers
                </h6>
                <h1 className="text-[3vw] text-center mt-[-0.625vw] text-[#E74C3C]">
                  {35}
                </h1>
              </div>
            </div>
          </div>
          <div>
            <h6 className="font-semibold  text-base text-center">
              Time Allocation Graph
            </h6>
            <Chart_Pie data={data} height={220} width={360} />
          </div>
        </div>
        <div className="heatMap w-[100%] mt-4">
          <h6 className="font-semibold pt-4 pl-4 text-base">
            {user.user.name.split(" ")[0] + `'s` + " Heatmap"}
          </h6>
          <CalendarHeatmap
            startDate={shiftDate(today, -150)}
            endDate={today}
            values={randomValues}
            classForValue={(value) => {
              if (!value) {
                return "color-empty";
              }
              return `color-github-${value.count}`;
            }}
            tooltipDataAttrs={(value) => {
              return {
                "data-tip": `${value.date
                  .toISOString()
                  .slice(0, 10)} has count: ${value.count}`,
              };
            }}
            showWeekdayLabels={true}
            onClick={(value) =>
              alert(`Clicked on value with count: ${value.count}`)
            }
          />
          <ReactTooltip />
        </div>
      </div>
      <div className="w-[400px] rounded-md bg-gray-50 p-4 ">
      <h6 className='font-semibold mb-4 text-base'>{user.user.name.split(' ')[0] + `'s Upcoming Meetings` }</h6>
        <div className="meetingContainer space-y-4 h-[82vh] py-2 overflow-y-auto">
            {allMeetingByPerson.map(meeting => <MeetingCard meeting = {meeting} key={meeting.id} />)}

      
        </div>
      </div>
    </div>
  );
}

export default UserPage;