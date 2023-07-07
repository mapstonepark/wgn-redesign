import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <div className='test'>
    <Image
      src='/Web_Header_Filled.png'
      fill={true} // {true} | {false}
      alt='WGN Radio Logo'
      />
      </div>
  )
}

export default Header