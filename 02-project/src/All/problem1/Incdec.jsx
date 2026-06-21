import React from "react";
import { useState } from "react";

function Incdec() {
          const [num, setnum] = useState(0);
          function Inc() {
                    setnum(prev => (prev + 1));
          }
          function Dec() {
                    setnum(prev => (prev - 1));
          }
          return (
                    <div>
                              <div className="flex flex-col gap-2 p-10">
                                        <h1 className="text-white bg-gray-500 p-5 text-center rounded-2xl border-black border-2 text-3xl font-bold ">{num}</h1>
                                        <div className="text-white gap-2 flex">
                                                  <button className="p-5 rounded-2xl border-2 border-black bg-gray-500" onClick={Inc}>INCREMENT</button>
                                                  <button className="p-5 rounded-2xl bg-gray-500  border-2 border-black " onClick={Dec}>DECREMENT</button>

                                        </div>
                              </div>
                    </div>
          )
}

export default Incdec;