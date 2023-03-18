import React from 'react'

function UserModal({toggleModal,setIsOpen}) {
  return (
    <div className="fixed z-30 inset-y-0  inset-x-0 top-0 left-0 flex justify-center items-center bg-gray-700 bg-opacity-50">
      <div className="z-30 top-30 relative bg-white w-5/6 h-5/6 p-6 overflow-y-auto rounded shadow-lg ">
        <button
          className="absolute top-0 right-0 text-gray-600 hover:text-gray-800 "
          onClick={() => setIsOpen(false)}
        >
          <svg
            className="w-10 h-10 mr-2 mt-2 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 8.586L6.707 5.293a1 1 0 10-1.414 1.414L8.586 10l-3.293 3.293a1 1 0 101.414 1.414L10 11.414l3.293 3.293a1 1 0 101.414-1.414L11.414 10l3.293-3.293a1 1 0 00-1.414-1.414L10 8.586z" />
          </svg>
        </button>
        <div className="">
          {/* <UserPage id={} /> */}
        </div>
      </div>
    </div>
  )
}

export default UserModal