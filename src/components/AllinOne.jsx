import React from 'react';

const AllinOne = () => {
    return (
        <div name='platform' className='w-full my-32'>
            <div className='max-w-[1240px] mx-auto'>
                <h2 className='text-5xl font-bold mx-auto px-2 text-center'>All-In-One Platform</h2>
                <p className='text-2xl py-8 text-center'>In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best.</p>
                
                <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 px-4 lg:px-0'>
                    {Array(8).fill().map((_, key) => (
                        
                    <div className='flex' key={key}>
                        <div>   
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-600 mr-1">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                        </div>
                        <div>
                            <h3 className='font-bold text-lg'>Notification</h3>
                            <p className='text-lg pt-2 pb-4'>Which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour.</p>
                        </div>
                    </div>
                    ))}
                 </div>
            </div>
        </div>
    )
}

export default AllinOne