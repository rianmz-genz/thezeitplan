import Image from 'next/image'
import React from 'react'

const Navbrand = () => {
  return (
    <div className='w-fit h-fit flex items-center'>
        <Image src='/images/brand.svg' width={35} height={35} alt="brand" className='mr-3' />
        <p className='font-bold'>ZEITPLAN</p>
    </div>
  )
}

export default Navbrand