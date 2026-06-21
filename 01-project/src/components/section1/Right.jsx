import React from "react";
import Card from "./Rightcard";

function Right(props) {
  return (
    <div className="flex gap-4">
      {props.users.map((ele, indx) => (
        <Card
          key={indx}
          img={ele.img}
          sno={ele.sno}
          tag={ele.tag}
        />
      ))}
    </div>
  );
}

export default Right;