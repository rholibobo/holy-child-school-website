"use client"

const Nav = ({onclick}) => {
  return (
    <nav className="flex w-11/12 md:ml-4 md:w-1/4 justify-between items-center border-b-2 border-blue-300 p-2 my-3">
        <button className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-[16px] px-4 py-2.5 text-center" onClick={()=>onclick("student")}>Students</button>
        <button className="bg-blue-700 text-white hover:text-blue-700 border border-blue-700 hover:bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-[16px] px-4 py-2.5 text-center" onClick={()=>onclick("staff")}>Teachers</button>
    </nav>
  )
}

export default Nav