import React from "react";

const DataCard = ({ d }) => {

  function pronounceWord(word) {
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'hi-IN'; // Japanese
    window.speechSynthesis.speak(utterance);
  }
  // console.log(d);
  return (
    <div  className={`card  shadow-xl ${d.difficulty ==="easy"?'bg-green-300 text-black': d.difficulty==="medium"?"bg-blue-300 text-black": "bg-red-300 text-black"}`}>
        <div className="card-body">
        <h2 onClick={()=>pronounceWord(d.word)} className="card-title">Word: {d.word}</h2>
        <p className="font-semibold">Meaning: {d.meaning}</p>
        <p className="font-semibold">Pronunciation: {d.pronunciation}</p>
        <p className="font-semibold"> Part Of Speech: {d.part_of_speech}</p>
        {/* You can open the modal using document.getElementById('ID').showModal() method */}
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <button
          className="btn bg-blue-300"
          onClick={() => document.getElementById("my_modal_5").showModal()}
        >
          When To Say
        </button>
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle ">
          <div className="modal-box bg-blue-100">
            <h3 className="font-bold text-lg">Word: {d.word}</h3>
            <p className="font-semibold mb-4">Meaning: {d.meaning}</p>
            <p className="font-semibold mb-4">When To Say: {d.when_to_say}</p>
            <p className="font-semibold mb-4">Example: {d.example}</p>
            
            <div className="modal-action">
              <form className="mx-auto" method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn bg-blue-200 w-40">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default DataCard;

<h2 className="text-center font-bold text-3xl text-blue-600 mb-8">Lessons</h2>
