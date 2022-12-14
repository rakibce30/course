import React from 'react';

const carts = (props) => {
    const carts = props.cart;
    let total = 0;
    for (let i = 0; i < carts.length; i++) {
         const cart = carts[i];
         total = total + cart.price;
    }

    const shipping = 12.99;
    const tax = (total/10);
    const grandTotal = total + shipping + tax;
    const roundNum = (data)=> {
        return Number(data.toFixed(2));
    }

    return (
        <div className='flex flex-col space-y-6'>
            <h2 className='text-gray-800 font-bold text-lg rounded-t-lg m-2 text-center border-b-4 border-gray-800'>Order Summary</h2>
            <div>
                <div className="flex flex-row justify-between mx-4 border-b-2">
                    <div>
                        <p className='text-sm font-semibold'>Total:</p>
                        <p className='text-sm font-semibold'>Shipping:</p>
                        <p className='text-sm font-semibold'>Tax <span className='text-xs'>(10%)</span>: </p>
                    </div>
                    <div>
                        <p className='text-sm text-right'>${roundNum(total)}</p>
                        <p className='text-sm text-right'>${roundNum(shipping)}</p>
                        <p className='text-sm text-right'>${roundNum(tax)}</p>
                    </div>
                </div>
                <div className="flex flex-row justify-between mx-4 ">
                    <div>
                        <p className='text-sm font-semibold'>Grand Total:</p>
                    </div>
                    <div>
                        <p className='text-sm text-right'>${roundNum(grandTotal)}</p>
                
                    </div>
                </div>
            </div>
            <button className='border w-full rounded bg-gray-800 text-white font-bold tracking-wider text-lg hover:bg-gray-600'>Order Now</button>
        </div>
    );
};

export default carts;