import React from "react";
import { useState } from "react";

const Form = () => {
          function Formhandler(e) {
                    e.preventDefault();
                    console.log("form submit successfully")
          }
          return (
                    <div className="">
                              <form className='flex flex-col p-10  gap-11' onSubmit={(e)=>{
                                        Formhandler(e);
                              }}>
                                        <input className='bg-gray-300 border-black border-2 rounded p-2' type="text" placeholder='Enter name' />
                                        <button type="submit" className="p-2 border-black border-2 rounded-2xl bg-gray-500 text-white text-lg">Click</button>
                              </form>
                    </div>
          )
}
export default Form;