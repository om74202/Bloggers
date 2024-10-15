import { useState } from "react"
import { Appbar } from "../components/Appbar"
import axios from "axios";
import { Backend } from "../config";
import { useNavigate } from "react-router-dom";

export const Publish=()=>{
    const [title,setTitle]=useState("");
    const [content,setContent]=useState("");
    const navigate=useNavigate();

    return <div className=" px-14">
        <Appbar/>

<div className="my-9 ">
    <input onChange={(e)=>{
        setTitle(e.target.value);
    }}
     type="text" id="large-input" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base
     focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
      dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Title"/>
</div>



        <div>
    <textarea onChange={(e)=>{
        setContent(e.target.value);
    }}
     rows={5} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300
 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your content here..."></textarea>
  </div>


  <div>
  <button
   onClick={async ()=>{
    const response=await axios.post(`${Backend}/api/v1/blog`,{
        title,
        content
    },{
        headers:{
            Authorization:localStorage.getItem("token")
        }
    });
    navigate(`/blog/${response.data.id}`)
   }} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5
   py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Publish</button>
  </div>
    </div>
}

