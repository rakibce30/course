import React from 'react';
import img from '../../Images/ielts.jpg'

const Course = (props) => {
    const course = props.course;
    const { name, price, promo} = course;
    return (
        <div className="flex flex-col space-y-4 shadow-lg rounded text-center">
            <img className='rounded-t-lg' src={img} alt="" />
            <div className='flex flex-col space-y-2 px-4 pb-4'>
                <h2 className='text-lg font-semibold'>{name}</h2>
                <h1 className='text-2xl font-bold text-gray-900'>${price}</h1>
                <p className='text-sm text-gray-400 uppercase'>promo: {promo}</p>
                <button onClick={()=> props.handleAddCourse(course)} className='border rounded bg-gray-800 text-white font-bold tracking-wider text-lg transition-all hover:bg-gray-600'>Enroll</button>
            </div>
        </div>
    );
};

export default Course;