import React from "react";
import Incdec from './problem1/Incdec';
import Obj from './problem2/Obj'
import Form from './problem3/Form';
import TwoWay from "./problem4/TwoWay";
import Task from "./problem5/Task";

function Allprobs(){
          return(
                    <div className="m-10 min-h-[90vh]  bg-gray-100 rounded-4xl w-full flex flex-wrap justify-evenly">
                              <Incdec/>
                              <Obj/>
                              <Form/>
                              <TwoWay />
                              <Task/>
                              
                              
                             
                    </div>
          )
}
export default Allprobs;