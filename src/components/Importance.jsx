import React from "react";

const Importance = () => {
  return (
    <div className="join join-vertical w-full mb-10">
        <h2 className="animate__animated animate__fadeIn animate__repeat-2 text-center font-bold text-3xl text-blue-600 mb-8">The Importance Of Learning A Foreign Language</h2>
      <div className="collapse collapse-arrow join-item border-base-300 border">
        <input type="radio" name="my-accordion-4" defaultChecked />
        <div className="collapse-title text-xl font-medium">
          Improves Communication Skills
        </div>
        <div className="collapse-content">
          <p>
            Learning another language improves your ability to communicate more
            effectively, not just in the foreign language but also in your
            native language, by strengthening vocabulary and grammar
            understanding. <br />
            Language is deeply connected to culture. Learning a foreign language
            allows you to better understand different cultures, traditions, and
            perspectives, making communication more empathetic and meaningful.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow join-item border-base-300 border">
        <input type="radio" name="my-accordion-4" />
        <div className="collapse-title text-xl font-medium">
          Global Job Market
        </div>
        <div className="collapse-content">
          <p>
            In an increasingly globalized world, many employers seek candidates
            who can communicate with clients, customers, and partners from
            different countries. Being multilingual can open doors to job
            opportunities in international businesses, tourism, translation,
            diplomacy, and more. <br />
            Speaking multiple languages can set you apart in a competitive job
            market. It shows adaptability, initiative, and a willingness to
            engage with diverse groups, making you more attractive to employers.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow join-item border-base-300 border">
        <input type="radio" name="my-accordion-4" />
        <div className="collapse-title text-xl font-medium">
          Enhanced Travel Experiences
        </div>
        <div className="collapse-content">
          <p>
            
            Knowing the language of the country you're visiting allows for a
            more immersive travel experience. It enables you to interact with
            locals, understand signs, read menus, and explore regions that may
            not be as accessible to non-speakers. <br />F
            Understanding
            the language gives you direct access to local history, literature,
            traditions, and music, making your travel more enriching.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Importance;
