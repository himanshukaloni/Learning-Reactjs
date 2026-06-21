import React from "react";
import Left from "./Left";
import Right from "./Right";

const Page1 = (props) =>{
          return (
                    <div className="flex">
                              <Left/>
                              <Right users = {props.users}/>

                    </div>
          )
}
export default Page1;