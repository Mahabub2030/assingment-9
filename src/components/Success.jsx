import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import success from "../assets/success.png"

const Success = () => {
  const [counterState, setCounterState] = useState(false);
  return (
    <div className="pb-10">
      <div className="flex flex-col items-center mt-5">
        <img className="size-10" src={success} alt="" />
        <h2 className="text-3xl font-bold mb-4 text-blue-600 animate__animated animate__bounce text-center ">
          Success
        </h2>
      </div>
      <ScrollTrigger
        onEnter={() => setCounterState(true)}
        onExit={() => setCounterState(false)}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 text-center">
          <div className="bg-gradient-to-r from-purple-500 to-blue-500 py-5 rounded-xl">
            <h2 className="text-5xl font-bold text-white">
              {counterState && <CountUp start={0} end={50}></CountUp>}
            </h2>
            <p className="font-semibold text-white pt-2">Users</p>
          </div>
          <div className="bg-gradient-to-r from-purple-500 to-blue-500 py-5 rounded-xl">
            <h2 className="text-5xl font-bold text-white">
              
              {counterState && <CountUp start={0} end={10}></CountUp>}
            </h2>
            <p className="font-semibold  pt-2 text-white"> Lesson</p>
          </div>
          <div className="bg-gradient-to-r from-purple-500 to-blue-500 py-5 rounded-xl">
            <h2 className="text-5xl font-bold text-white">
              
              {counterState && <CountUp start={0} end={200}></CountUp>}
            </h2>
            <p className="font-semibold  pt-2 text-white">Vocabulary</p>
          </div>
          <div className="bg-gradient-to-r from-purple-500 to-blue-500 py-5 rounded-xl">
            <h2 className="text-5xl font-bold text-white">
              
              {counterState && <CountUp start={0} end={6}></CountUp>}
            </h2>
            <p className="font-semibold text-white pt-2">Tutorial</p>
          </div>
        </div>
      </ScrollTrigger>
    </div>
  );
};

export default Success;
