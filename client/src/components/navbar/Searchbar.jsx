import React from 'react'
import { Input } from '../ui/input'

function Searchbar() {
  return (
    <Input 
        type={'text'}
        placeholder={'Search...'}
        className='w-full sm:w-64 bg-gray-700 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-2'
    />
  )
}

export default Searchbar