import React from 'react';

const About = () => {
    return (
        <div name='about' className='w-full my-32'>
            <div className='max-w-[1240px] mx-auto'>
                <div className='text-center'>
                    <h2 className='text-5xl font-bold'>Trusted by developers all over the world</h2>
                    <p className='text-gray-500 py-6 text-3xl'>It has been awesome getting to know all the developers around the globe and each trying their best to make the world a better place.</p>
                </div>

                <div className='grid md:grid-cols-3 gap-2 px-2 text-center'>
                    <div className='border py-8 rounded-xl shadow-xl'>
                        <p className='text-6xl font-bold text-indigo-600'>100%</p>
                        <p className='text-gray-400 mt-2'>Completion</p>
                    </div>
                    <div className='border py-8 rounded-xl shadow-xl'>
                        <p className='text-6xl font-bold text-indigo-600'>24/7</p>
                        <p className='text-gray-400 mt-2'>Delivery</p>
                    </div>
                    <div className='border py-8 rounded-xl shadow-xl'>
                        <p className='text-6xl font-bold text-indigo-600'>100K</p>
                        <p className='text-gray-400 mt-2'>Transactions</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About