import React from "react";
import Navbar from "./Navbar";
import Page1  from "./Page1";


function Section1(props){
          return(
                    <div className="">
                              <Navbar/>
                              <Page1 users = {props.users}/>
                              

                    </div>
          )
}
export default Section1;