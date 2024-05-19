import React from 'react'

const Sidebar = () => {
  return (
    <div className='hidden lg:block lg:fixed top-0 left-0 bottom-0 w-12 bg-form-input z-50 '>
        <ul className='flex flex-col items-center'>
            <li className='w-full h-full flex items-center justify-center p-2 hover:bg-teal-700 cursor-pointer'>
                <a href="#">
                    <img src="./assets/home.svg" className='w-12' alt="home" />
                </a>
            </li>
            <li className='w-full h-full flex items-center justify-center hover:bg-teal-700 p-2 cursor-pointer'>
                <a href="#">
                    <img src="./assets/settings.svg" className='w-12' alt="settings" />
                </a>
            </li>
        </ul>
    </div>
  )
}

export default Sidebar