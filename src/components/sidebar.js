import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const Sidebar = () => {
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
    const [isHovered, setIsHovered] = useState(false);
    const baseClass = 'overflow-x-auto my-custom-scrollbar';
    const dynamicClass = isHovered ? ' visible-scrollbar' : '';
    const scrollbarClass = baseClass + dynamicClass;
    return (
        isMenuOpen && (
            <div className={scrollbarClass}>
                <div className='mt-2 mb-8 m-6'>
                    <ul>
                        <li className='my-2'>Home</li>
                        <li className='my-2'>Shorts</li>
                        <li className='my-2'>Subscriptions</li>
                    </ul>
                </div>
                <div className='mt-8 mb-8 m-6'>
                    <h1 className='font-semibold text-xl'>For You</h1>
                    <ul>
                        <li className='mx-2 my-2'>Your Channel</li>
                        <li className='mx-2 my-2'>History</li>
                        <li className='mx-2 my-2'>Your Videos</li>
                    </ul>
                </div>
                <div className='mt-8 mb-8 m-6'>
                    <h1 className='font-semibold text-xl'>For You</h1>
                    <ul>
                        <li className='mx-2 my-2'>Your Channel</li>
                        <li className='mx-2 my-2'>History</li>
                        <li className='mx-2 my-2'>Your Videos</li>
                    </ul>
                </div>
                <div className='mt-8 mb-8 m-6'>
                    <h1 className='font-semibold text-xl'>For You</h1>
                    <ul>
                        <li className='mx-2 my-2'>Your Channel</li>
                        <li className='mx-2 my-2'>History</li>
                        <li className='mx-2 my-2'>Your Videos</li>
                    </ul>
                </div>
                <div className='mt-8 mb-8 m-6'>
                    <h1 className='font-semibold text-xl'>For You</h1>
                    <ul>
                        <li className='mx-2 my-2'>Your Channel</li>
                        <li className='mx-2 my-2'>History</li>
                        <li className='mx-2 my-2'>Your Videos</li>
                    </ul>
                </div>
                <div className='mt-8 mb-8 m-6'>
                    <h1 className='font-semibold text-xl'>For You</h1>
                    <ul>
                        <li className='mx-2 my-2'>Your Channel</li>
                        <li className='mx-2 my-2'>History</li>
                        <li className='mx-2 my-2'>Your Videos</li>
                    </ul>
                </div>
                <div className='mt-8 mb-8 m-6'>
                    <h1 className='font-semibold text-xl'>For You</h1>
                    <ul>
                        <li className='mx-2 my-2'>Your Channel</li>
                        <li className='mx-2 my-2'>History</li>
                        <li className='mx-2 my-2'>Your Videos</li>
                    </ul>
                </div>
            </div>
        )
    )
}

export default Sidebar;
