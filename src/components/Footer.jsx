import React from 'react';
import {
    FaFacebook,
    FaGithub,
    FaInstagram,
    FaTwitter,
    FaTwitch
} from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='w-full mt-24 text-gray-300 py-y px-2 bg-slate-900'>
            <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8'>
                <div>
                    <h6 className='font-bold pt-2 uppercase'>Solutions</h6>
                    <ul>
                        <li className='py-1'>Marketing</li>
                        <li className='py-1'>Cloud</li>
                        <li className='py-1'>Data</li>
                        <li className='py-1'>Analytics</li>
                        <li className='py-1'>Commerce</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-bold pt-2 uppercase'>Support</h6>
                    <ul>
                        <li className='py-1'>Pricing</li>
                        <li className='py-1'>Documentation</li>
                        <li className='py-1'>Guides</li>
                        <li className='py-1'>API Status</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-bold pt-2 uppercase'>Company</h6>
                    <ul>
                        <li className='py-1'>About</li>
                        <li className='py-1'>Blog</li>
                        <li className='py-1'>Jobs</li>
                        <li className='py-1'>Press</li>
                        <li className='py-1'>Partners</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-bold pt-2 uppercase'>Legal</h6>
                    <ul>
                        <li className='py-1'>Claims</li>
                        <li className='py-1'>Privacy</li>
                        <li className='py-1'>Terms</li>
                        <li className='py-1'>Policies</li>
                        <li className='py-1'>Conditions</li>
                    </ul>
                </div>
                <div className='col-span-2 pt-8 md:pt-2'>
                    <p className='font-bold uppercase'>Subscribe to our newsletter</p>
                    <p className='py-4'>The latest news, and resources, sent to you inbox weekly</p>
                    <form className='flex flex-col sm:flex-row'>
                        <input type='email' placeholder='Enter email' className='w-full p-2 mr-4 rounded-md mb-4'/>
                        <button className='p-2 mb-4'>Subscribe</button>
                    </form>
                </div>
            </div>

            <div className='flex max-w-[1240px] px-2 py-4 m-auto justify-between items-center flex-col sm:flex-row text-center text-gray-500'>
                <p>2022 Winnard, LLC. All rights reserved</p>
                <span className='flex justify-between w-[80%] sm:w-[300px] pt-4 text-2xl'>
                    <FaFacebook />
                    <FaTwitter />
                    <FaInstagram />
                    <FaGithub />
                    <FaTwitch /> 
                </span>
            </div>
            
        </div>
    )
}

export default Footer;