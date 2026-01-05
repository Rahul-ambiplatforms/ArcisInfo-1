import React from 'react'
import Navbar from './Navbar'
import Event from './Event'

const Header = ({ showEvent }) => {
  return (
    <>
      <Navbar />
      {showEvent && <Event />}
    </>
  )
}

export default Header
