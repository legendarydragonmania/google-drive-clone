import React from 'react'
import googleDriveLogo from '../../media/google-drive-logo.png'
import { GoSearch } from 'react-icons/go'
import { MdExpandMore, MdSettings, MdOutlineApps } from 'react-icons/md'
import { BiHelpCircle } from 'react-icons/bi'
import '../../styles/Header.css'

const index = ({ userPhoto }) => {
  return (
    <div className='header'>
      <div className='header_logo'>
        <img src={googleDriveLogo} alt='' />
        <span>Drive</span>
      </div>
      <div className='header_search-container'>
        <div className='header_searchBar'>
          <GoSearch
            className='search-icon'
            style={{ color: 'rgb(82, 82, 82)' }}
          />
          <input type='text' placeholder='Search in Drive' />
          <MdExpandMore style={{ color: 'rgb(82, 82, 82)' }} />
        </div>
      </div>
      <div className='header_icons'>
        <span>
          <BiHelpCircle
            style={{
              color: 'rgb(82, 82, 82)',
              fontSize: '28px',
              margin: '4px',
            }}
          />
          <MdSettings
            style={{
              color: 'rgb(82, 82, 82)',
              fontSize: '28px',
              margin: '4px',
            }}
          />
        </span>
        <MdOutlineApps
          style={{ color: 'rgb(82, 82, 82)', fontSize: '28px', margin: '4px' }}
        />
        <img src={userPhoto} alt='User Photo' />
      </div>
    </div>
  )
}

export default index
