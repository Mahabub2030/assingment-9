import React from "react";
import { NavLink } from "react-router-dom";
import tutorial from "../assets/tutorial.png"

const Tutorials = () => {
  return (
    <div className="w-10/12 mx-auto">
      <div className="flex flex-col items-center mt-5">
          <img className="size-10" src={tutorial} alt="" />
          <h2 className="font-bold text-3xl text-blue-500 mb-5 text-center">Tutorials</h2>
          </div>
      <div className=" mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div>
          <iframe
            className="rounded-xl w-full h-60"
            width=""
            height=""
            src="https://www.youtube.com/embed/MLpvXcR4g_4?si=8ElttduPgBGpV-2Y"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>

        <div>
          <iframe
            className="rounded-xl w-full h-60"
            width=""
            height=""
            src="https://www.youtube.com/embed/FracDV3yuqs?si=FnD26nYa143IhBlF"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>

        <div>
          <iframe
            className="rounded-xl w-full h-60"
            width=""
            height=""
            src="https://www.youtube.com/embed/6T0NWKiXe4Y?si=7XkTk8yP21XOGX2l"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>

        <div>
          <iframe
            className="rounded-xl w-full h-60"
            width=""
            height=""
            src="https://www.youtube.com/embed/gGh9uKKcDRw?si=rycdpLct5iBeTHVm"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>

        <div>
          <iframe
            className="rounded-xl w-full h-60"
            width=""
            height=""
            src="https://www.youtube.com/embed/ogRk5dbT8q0?si=QMNOnkEci0jqt5ga"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>

        <div>
          <iframe
            className="rounded-xl w-full h-60"
            width=""
            height=""
            src="https://www.youtube.com/embed/OvIrPzuvIfE?si=O-ro0D36kp_hIOWV"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <button className="btn bg-gradient-to-r from-purple-500 to-blue-500 mx-auto block mb-4 text-gray-100">
        <NavLink to="/startLearning">Learn Vocabularies</NavLink>
      </button>
    </div>
  );
};

export default Tutorials;
