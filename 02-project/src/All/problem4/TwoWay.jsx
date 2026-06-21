import React from "react";
import { useState } from "react";

const TwoWay = () =>{
          const [Title, setTitle] = useState('');
          function handler(e){
                    e.preventDefault();
                    console.log('form subimtted',Title)
                    setTitle('');
          }

          return(
                    <div>
                              <form   
                              onSubmit={(e) =>{
                                                  handler(e);
                                        }}   
                                        className="flex flex-col gap-11 mt-10" action="">
                                        <input className='bg-gray-300 p-2 border-2 rounded border-black' type="text" placeholder="Enter name" value={Title} onChange={(e)=>{
                                                  setTitle(e.target.value);
                                                  console.log(e.target.value);
                                        }}/>
                                        <button type="submit" className="border-2 p-2 text-lg rounded-2xl text-white bg-gray-500 border-black">Click</button>
                              </form>
                    </div>
          )
}
export default TwoWay;