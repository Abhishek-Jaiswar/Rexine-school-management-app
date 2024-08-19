import Image from 'next/image'
import React from 'react'

const Navbar = () => {
    return (
        <div className='flex items-center justify-between p-4'>
            <div className='hidden md:flex'>
                <Image src='/search.png' alt='search' width={14} height={14} />
                <input type="text" placeholder='Search...' />
            </div>
            <div>
                <div className='bg-white flex items-center justify-center w-7 h-7 rounded-full cursor-default'>
                    <Image src='/message.png' alt='message' width={20} height={20} />
                </div>
                <div className='bg-white flex items-center justify-center w-7 h-7 rounded-full cursor-default'>
                    <Image src='/announcement.png' alt='message' width={20} height={20} />
                </div>
                <div className='flex flex-col items-center justify-center gap-1'>
                    <span>John doe</span>
                    
                </div>
            </div>
        </div>
    )
}

export default Navbar