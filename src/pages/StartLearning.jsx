import React from "react";
import { NavLink } from "react-router-dom";
import book from "../assets/book.png"
import start from "../assets/start.png"
import tutorial from "../assets/tutorial.png"

const StartLearning = () => {
  return (
    <div className="w-10/12 mx-auto pt-20">
      <div className="flex flex-col items-center">
      <img className="size-10" src={start} alt="" />
      <h2 className="text-3xl font-bold mb-4 text-blue-600  text-center ">Start Learning</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-16">
        <NavLink to="/lesson/1">
          <div className="card  bg-gradient-to-r from-purple-500 to-blue-500 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-gray-200">Lesson 1 <img className="size-5" src={book} alt="" /></h2>
              <p className="text-gray-200">Explore Vocabularies</p>
            </div>
          </div>
        </NavLink>
        <NavLink to="/lesson/2">
          <div className="card  bg-gradient-to-r from-purple-500 to-blue-500  shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-gray-100">Lesson 2 <img className="size-5" src={book} alt="" /></h2>
              <p className="text-gray-200">Explore Vocabularies</p>
            </div>
          </div>
        </NavLink>
        <NavLink to="/lesson/3">
          <div className="card  bg-gradient-to-r from-purple-500 to-blue-500  shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-gray-100">Lesson 3 <img className="size-5" src={book} alt="" /></h2>
              <p className="text-gray-200">Explore Vocabularies</p>
            </div>
          </div>
        </NavLink>
        <NavLink to="/lesson/4">
          <div className="card  bg-gradient-to-r from-purple-500 to-blue-500 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-gray-100">Lesson 4 <img className="size-5" src={book} alt="" /></h2>
              <p className="text-gray-200">Explore Vocabularies</p>
            </div>
          </div>
        </NavLink>
        <NavLink to="/lesson/5">
          <div className="card  bg-gradient-to-r from-purple-500 to-blue-500  shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-gray-100">Lesson 5 <img className="size-5" src={book} alt="" /></h2>
              <p className="text-gray-200">Explore Vocabularies</p>
            </div>
          </div>
        </NavLink>
        <NavLink to="/lesson/6">
          <div className="card  bg-gradient-to-r from-purple-500 to-blue-500  shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-gray-100">Lesson 6 <img className="size-5" src={book} alt="" /></h2>
              <p className="text-gray-200">Explore Vocabularies</p>
            </div>
          </div>
        </NavLink>
        <NavLink to="/lesson/7">
          <div className="card  bg-gradient-to-r from-purple-500 to-blue-500 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-gray-100">Lesson 7 <img className="size-5" src={book} alt="" /></h2>
              <p className="text-gray-200">Explore Vocabularies</p>
            </div>
          </div>
        </NavLink>
        <NavLink to="/lesson/8">
          <div className="card  bg-gradient-to-r from-purple-500 to-blue-500  shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-gray-100">Lesson 8 <img className="size-5" src={book} alt="" /></h2>
              <p className="text-gray-200">Explore Vocabularies</p>
            </div>
          </div>
        </NavLink>
        <NavLink className="md:col-span-2" to="/lesson/9">
          <div className="card  bg-gradient-to-r from-purple-500 to-blue-500  shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-gray-100">Lesson 9 <img className="size-5 " src={book} alt="" /></h2>
              <p className="text-gray-200">Explore Vocabularies</p>
            </div>
          </div>
        </NavLink>
        <NavLink className="md:col-span-2" to="/lesson/10">
          <div className="card  bg-gradient-to-r from-purple-500 to-blue-500  shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-gray-100">Lesson 10 <img className="size-5" src={book} alt="" /></h2>
              <p className="text-gray-200">Explore Vocabularies</p>
            </div>
          </div>
        </NavLink>
      </div>
      <div className=" ">
          <div className="flex flex-col items-center mt-5">
          <img className="size-10" src={tutorial} alt="" />
          <h2 className="font-bold text-3xl text-blue-500 mb-5 text-center">Tutorial</h2>
          </div>
      <div>
      <iframe className="rounded-xl w-full" width="560" height="315" src="https://www.youtube.com/embed/1lrz11BbqCA?si=DCSO5KXUKp490bhY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      </div>

      <button className='btn bg-gradient-to-r from-purple-500 to-blue-500 mx-auto block my-6 text-white'><NavLink to="/tutorials">View More</NavLink></button>

    </div>
  );
};

export default StartLearning;
