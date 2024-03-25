import { Avatar } from "./BlogCard"
import { Link, useNavigate } from "react-router-dom"
import MenuItem from '@mui/material/MenuItem';
import Logout from '@mui/icons-material/Logout';

export const Appbar = () => {
    const navigate =useNavigate()
    return <div className="border-b flex justify-between px-10 py-4">
        <Link to={'/blogs'} className="flex flex-col justify-center cursor-pointer">
        <img src="https://logos-world.net/wp-content/uploads/2023/07/Medium-Logo.png" className="w-30 h-20" alt="" />
        </Link>
        <div>
            <Link to={`/publish`}>
                <button type="button" className="mr-4 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 ">New</button>
            </Link>
            <button onClick={function logout(){
                confirm("aare u sure")
                window.localStorage.removeItem("token")
                navigate("/")
            }}>
                
       
            
       
        <MenuItem >
        
          <Avatar size={"big"} name="tushar" />

            <Logout fontSize="small" />
          
          Logout
        </MenuItem>

            </button>

        </div>
    </div>
}