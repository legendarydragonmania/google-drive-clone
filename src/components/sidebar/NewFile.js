import React from 'react'
import { HiPlus } from 'react-icons/hi'
import '../../styles/NewFile.css'

const NewFile = () => {
  return (
    <div className='newFile'>
      <div className='newFile__container'>
        <HiPlus />
        <p>New</p>
      </div>
    </div>
  )
}

export default NewFile
