import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Course from '../Course/Course';
import fakeData from '../../Fake_Data/FAKE_DATA.json';

const Shop = () => {
    const [courses, setCourses] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        setCourses(fakeData);
    }, []);
    
    const handleAddCourse = (course) => {
        const newCousrse = [...cart, course]
        setCart(newCousrse);
    }
    // console.log(cart);

    return (
        <div className='max-w-[1280px] mx-auto px-4 my-12 flex flex-col md:flex-row'>
            <div className="w-full grid justify-center grid-cols-1 gap-8 md:pr-8 md:border-r  md:grid-cols-2 lg:grid-cols-3 md:w-3/4">
                {
                    courses.map((course) => <Course handleAddCourse={handleAddCourse} course={course} key={course.id}></Course>)
                }
  

            </div>
            <div className='w-full  rounded shadow-lg h-full p-6 md:mx-4 md:w-1/4'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;