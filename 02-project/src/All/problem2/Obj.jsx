import React from "react";
import { useState } from "react";

const Obj = () => {
          const [num, setnum] = useState({ user: 'Himanshu', age: 20 });

          function setobj() {
                    const newNum = { ...num };// it copy the entire obj
                    newNum.user = 'Shailendra';
                    newNum.age = 22;
                    setnum(newNum);

          }

          return (
                    <div>
                              <div className=" flex flex-col gap-3 p-10">
                                        <div className="bg-gray-500 text-white text-2xl p-2 rounded-2xl border-2 border-black">
                                                  <h1 className="font-bold ">Name : {num.user}</h1>
                                                  <h1 className="font-bold">Age : {num.age}</h1>
                                        </div>
                                        <button className="p-3 bg-gray-500 border-2 text-white border-black rounded-2xl" onClick={setobj}>Click NewObj</button>
                              </div>
                    </div>
          )

}
export default Obj;