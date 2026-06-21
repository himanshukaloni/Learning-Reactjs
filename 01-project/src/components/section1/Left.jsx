import React from "react";
import Arrow from './Arrow';
import Hero from './Hero';


function Left(){
          return(
                    <div className="w-1/3 flex h-[84vh] justify-between flex-col p-10">
                              <Hero/>
                              <Arrow/>

                    </div>
          )
}
export default Left;