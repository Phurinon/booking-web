import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router'
import logo from '../../assets/hotel-information-svgrepo-com.svg'

function Logo() {
  return (
    <Button asChild>
        <Link to='/'>
          <img src={logo} alt="" className="h-8 w-auto" />
        </Link>
    </Button>
  )
}

export default Logo