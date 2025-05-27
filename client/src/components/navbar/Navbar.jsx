import React from 'react'
import Logo from './Logo'
import Searchbar from './Searchbar'
import DropdownListMenu from './DropdownListMenu'

function Navbar() {
  return (
    <nav>
        <div className='flex flex-col justify-between items-center p-5 sm:flex-row gap-4 bg-gray-800 text-white'>
            <Logo/>
            <Searchbar/>
            <DropdownListMenu/>
        </div>
    </nav>
  )
}

export default Navbar