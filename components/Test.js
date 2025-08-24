"use client"

import { useState } from "react"

export default function Test(){
    const [data,setData] = useState([])
    function addButton(){
        setData(prev=>{
            return [...prev,"button"]
        })
    }
    function render(current){
        if (current === "button"){
            return <button className="bg-red-500 rounded-lg p-4">Button</button>
        }
    }
    return (
        <div className="flex flex-col p-4 gap-2">
        <button className="bg-blue-500 rounded-lg p-4 hover:bg-blue-600 cursor-pointer transition duration-500" onClick={addButton}>Add Button</button>
        {data.map(current=>{
            return render(current)
        })}
        </div>
    )
}