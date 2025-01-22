import React from 'react';
import { NavLink, useLoaderData, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DataCard from '../components/DataCard';

const Lesson = () => {
    const obj = useParams()
    // console.log(obj)
    
    const data = useLoaderData()
    // console.log(data)

    return (
        <div>
            <nav>
                <Navbar></Navbar>
            </nav>
            <h2 className="text-center font-bold text-3xl text-blue-500 pt-24 bg-sky-300">Lesson-{obj.lesson_no}</h2>
            <h2 className='w-10/12  mx-auto text-center font-semibold text-4xl bg-gradient-to-r from-purple-500 pb-3 to-blue-500 bg-clip-text text-transparent mb-5'>Clicking On Each Word You Can Hear the Pronunciation of the word</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5  gap-5 w-10/12 mx-auto mb-10'>
                {
                    data.map((d,idx)=> <DataCard key={idx} d={d}></DataCard>)
                }
            </div>
            <button className='btn bg-gradient-to-r from-purple-500 to-blue-500 mx-auto block mb-4 text-white'><NavLink to="/startLearning">Back To Lesson</NavLink></button>
            <Footer></Footer>
        </div>
    );
};

export default Lesson;