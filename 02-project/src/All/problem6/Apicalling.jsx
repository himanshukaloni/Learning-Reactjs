import React, { useState } from "react";
import axios from "axios";

const Data = () => {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);

  async function Getdata() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );

    const result = await response.json();

    setData(result);
  }

  async function Getdata2() {
    const result2 = await axios("https://jsonplaceholder.typicode.com/users");
    setData2(result2.data);
  }

  return (
    <div>
    <div className="flex flex-col justify-evenly bg-blue-100 rounded-2xl px-10 ">
      <h1 className="font-bold text-3xl text-center  my-5">API CALLING METHODS</h1>
      <h1 className="font-bold text-2xl my-5">FETCH</h1>
      {data.map((e, idx) => {
        return (
          <div key={e.id} className="flex">
            <h1>Name: {e.name}</h1>
            <h2>Username: {e.username}</h2>
            <p>Email: {e.email}</p>
            
          </div>
        )

      })}
      <h1 className="font-bold text-2xl my-5">AXIOS</h1>
      {
        
        data2.map((e,idx)=>{
          return(
            <div key={e.id} className="flex">
            <h1>Name: {e.name}</h1>
            <h2>Username: {e.username}</h2>
            <p>Email: {e.email}</p>
            
            </div>
          )
        })
      }

      

<div className="flex gap-5 justify-evenly py-5">
  <button
        className="bg-gray-500 p-1 px-8 rounded-[10px] border-2"
        onClick={Getdata}
      >
        FETCH
      </button>
      <button
      className="bg-gray-500 p-1 px-8 rounded-[10px] border-2"
      onClick={Getdata2}
      >
        AXIOS</button>
</div>
      
    </div>
  </div>);
  
  
};

export default Data;