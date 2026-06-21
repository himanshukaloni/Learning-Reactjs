import React from "react";
import { useState } from "react";

const Task = () => {
          const [Title, setTitle] = useState('');
          const [Details, setDetails] = useState('');
          const [Task , setTask] = useState([]);

          function Submithandler(e) {
                    const copytask = [...Task];
                    copytask.push({Title,Details});
                    setTask(copytask);
                    console.log(copytask);
                    e.preventDefault();
                    console.log("form submitted");
                    
                    setTitle('');
                    setDetails('');

          }
          return (
                    <div className="flex bg-blue-100 rounded-2xl mb-10">
                              <form onSubmit={(e) => {
                                        Submithandler(e);
                              }} className=" flex flex-col m-10 gap-3">
                                        <h1 className="text-black font-bold">Add Notes</h1>

                                        <div className="flex flex-col gap-0.5 ">

                                                  <input className="rounded p-2 bg-gray-300 border-2 " type="text" value={Title} onChange={(e) => {
                                                            setTitle(e.target.value);
                                                  }} placeholder="Enter Task" />
                                                  <textarea value={Details} onChange={(e)=>{
                                                            setDetails(e.target.value);
                                                  }} className="p-4 bg-gray-300 border-2" placeholder="Write details"></textarea>
                                        </div>
                                        <button type="submit" className=" active:bg-amber-50 rounded-2xl  p-2 bg-gray-500 text-white">Submit</button>
                              </form>
                              <div className="m-10 felx ">
                                        <h1 className="text-black font-bold mb-3">Recent Notes</h1>
                                        <div className=" overflow-auto flex flex-wrap gap-2 max-w-90">
                                                  {
                                                  Task.map((ele)=>{
                                                            return(
                                                            <div className="bg-blue-500 flex flex-col min-w-20 max-w-40 max-h-40 min-h-20 p-3 rounded-2xl text-sm ">
                                                            <h2 className=" text-white font-bold text-center">{ele.Title}</h2>
                                                            <p className=" text-white overflow-auto">{ele.Details}</p>

                                                  </div>

                                                            )
                                                  })        
                                                  }
                                                  
                                                  
                                        </div>

                              </div>
                    </div>
          )
}
export default Task;