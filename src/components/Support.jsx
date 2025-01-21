
import { NavLink } from "react-router-dom";
import support from "../assets/support.png"


const Support = () => {
  
  return (
    <div className=" mb-10">
      <div className="flex flex-col items-center mt-5">
        <img src={support} alt="" />
        <h2 className="animate__animated animate__fadeIn animate__repeat-2 text-center font-bold text-3xl text-blue-600 mb-8">
        Support
      </h2>
      </div>
      <p>
        Welcome to the Support Center! We're here to make your language learning
        journey as smooth and enjoyable as possible. Whether you're a beginner
        just starting out or an advanced learner refining your skills, our
        resources and dedicated team are ready to assist you every step of the
        way. <br />
        Learning a new language can be exciting but also challenging, and that’s
        why we’re here to ensure you have the support you need to stay motivated
        and focused. From resolving technical issues to providing guidance on
        using our features, our Support Center is designed to be your go-to
        resource. <br />
        Explore our FAQs for quick answers, dive into detailed how-to guides, or
        connect with our friendly support team for personalized assistance. We
        understand that every learner’s journey is unique, and we’re committed
        to helping you overcome any obstacles you may encounter.
      </p>
      <div className="text-center">
      <button className="btn my-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white "><NavLink>Go To Support</NavLink></button>
      </div>
    </div>
  );
};

export default Support;
