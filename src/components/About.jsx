import React, { useContext } from "react";
import mission from "../assets/mission.png"
import zoom from "../assets/zoom.png"
import { authContext } from "./AuthProvider";
import { useTypewriter, Cursor } from "react-simple-typewriter";


const About = () => {
  const [text] = useTypewriter({
    words: ["Let's Learn With Fun"],
    loop:{}
  });
  const {user}=useContext(authContext)
  return (
    <div className="mb-10">
      {
        user?<h2 className="font-bold text-center text-4xl py-3 bg-gradient-to-r from-purple-700 to-blue-500 bg-clip-text text-transparent ">Welcome {user?.displayName}. <span className="font-bold">{text}</span><span className="text-blue-800"><Cursor cursorStyle=">"></Cursor></span></h2>:""
      }
      <section id="mission" className=" p-6  ">
      <div className="flex flex-col items-center mt-5">
        <img className="size-10" src={mission} alt="" />
        <h2 className="text-3xl font-bold mb-4 text-blue-600  text-center animate__animated animate__bounce">
          Our Mission
        </h2>
      </div>
        <p className="text-lg text-justify">
          Our mission is to empower individuals worldwide to master new
          languages by making learning engaging, accessible, and personalized.
          We aim to inspire curiosity and foster confidence in communication,
          connecting people through the power of language. <br />
          We believe that language learning should be a journey of discovery,
          blending culture, creativity, and technology to unlock new
          possibilities. By offering innovative tools and immersive experiences,
          we strive to break barriers and build bridges between communities.{" "}
          <br />
          Our goal is to create a global community where learners feel
          supported, inspired, and connected. Through collaboration and
          continuous improvement, we are committed to transforming the way
          people engage with languages, one word at a time.
        </p>
      </section>

      {/* Vocabulary Learning Section  */}
      <section className="py-10">
      <div className="flex flex-col items-center mt-5">
        <img className="size-10" src={zoom} alt="" />
        <h2 className="text-3xl font-bold mb-4 text-blue-600  text-center animate__animated animate__bounce">
        We Can Learn Vocabulary In The Following Ways
        </h2>
      </div>
        <div className="text-center">
        <ul className="space-y-4 ">
          <li className="">
            <span className="font-semibold ">Interactive Exercises:</span> Engage
            with quizzes, flashcards, and matching games with real-time
            feedback.
          </li>
          <li>
            <span className="font-semibold">Daily Word Challenges:</span>{" "}
            Discover a new "Word of the Day" with examples and audio
            pronunciation.
          </li>
          <li>
            <span className="font-semibold">Contextual Learning:</span> Learn
            words through real-life scenarios like stories, conversations, and
            videos.
          </li>
          <li>
            <span className="font-semibold">Spaced Repetition:</span> Strengthen
            memory with reminders at optimal intervals.
          </li>
          <li>
            <span className="font-semibold">Personalized Word Lists:</span> Save
            and practice custom word lists with progress tracking.
          </li>
          <li>
            <span className="font-semibold">Gamification:</span> Earn rewards,
            unlock badges, and compete with others to stay motivated.
          </li>
          <li>
            <span className="font-semibold">Immersive Practice:</span> Practice
            vocabulary in interactive dialogues and role-playing exercises.
          </li>
        </ul>
        </div>
      </section>
    </div>
  );
};

export default About;
