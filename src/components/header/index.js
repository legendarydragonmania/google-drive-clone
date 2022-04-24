import React from 'react'
import googleDriveLogo from '../../media/google-drive-logo.png'

const index = () => {
  return (
    <div className='header'>
      <div className='header_logo'>
        <img src={googleDriveLogo} alt='' />
      </div>
      <div className='header_search-container'></div>
      <div className='header_icons'></div>
    </div>
  )
}

export default index
