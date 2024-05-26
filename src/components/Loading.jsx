import React from "react";
import loader from "../../public/loader.gif";

const Loading = () => {
  return (
    <div className="w-screen h- screen  flex justify-center items-center bg-[#161519]">
      <img className="h-[40%] object-cover transparent-bg" src={loader} alt="" />
    </div>
  );
};

export default Loading;
