import React from 'react'
import { Button } from '../ui/button'
import { LoaderCircle } from 'lucide-react';

function Buttons({text, isPending}) {
  return (
    <Button 
    variant={'ok'}
    className={'capitalize mt-10'}
    >
        {isPending ? 
        <>
            <LoaderCircle  className='animate-spin'/>
            <span>Please wait...</span>
        </> 
        : <p>{text}</p>}
    </Button>
  )
}

export default Buttons