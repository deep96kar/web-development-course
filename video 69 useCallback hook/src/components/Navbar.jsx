import React from 'react'
import {memo} from 'react'

const Navbar = ({adjective, getadjective}) => {
    console.log("navbar rendered")
  return (
    <div>
      i am {adjective} navbar
      <button onClick={()=>{getadjective()}}>{getadjective()}</button>
    </div>
  )
}

export default memo(Navbar)
