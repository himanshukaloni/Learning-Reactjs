import React from "react";
import { ArrowRight } from "lucide-react";

const Card = (props) => {
  return (
    <div className="overflow-hidden w-70 rounded-4xl h-[75vh] flex flex-col justify-between relative">

      <img
        src={props.img}
        alt="card"
        className="absolute inset-0 w-full h-full object-cover"
      />


      <div className="relative z-10 flex flex-col justify-between h-full">
        <h1 className="pl-3 pr-3 flex justify-center m-8 bg-amber-50 w-10 h-10 items-center rounded-full">
          {props.sno}
        </h1>

        <div className="flex flex-wrap p-10 gap-1 ">
          <p className="text-white mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, perspiciatis neque provident illum corporis dolores!.
          </p>

          <h1 className="text-white  bg-purple-500 p-2 pl-7 pr-7 rounded-3xl">
            {props.tag}
          </h1>

          <button onClick={btnclick} className="text-white bg-purple-500 p-2 rounded-3xl">
            <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};
function btnclick() {
  window.location.href = 'https://imgs.search.brave.com/-uldWOfOAvD6iW9LFyurKeUJIMzUtiZmhYneG-vJGxQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9m/dW5ueS1tb25rZXkt/d2VhcmluZy1oYXRf/MjMtMjE1MDg0Mzk4/OS5qcGc_c2VtdD1h/aXNfaHlicmlkJnc9/NzQwJnE9ODA';
}

export default Card;