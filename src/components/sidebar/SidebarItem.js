import React from 'react'
import { MdPlayArrow } from 'react-icons/md'
import '../../styles/SidebarItem.css'

const SidebarItem = ({ arrow, icon, label }) => {
  return (
    <div className='sidebarItem'>
      <div className='sidebarItem__arrow'>
        {arrow && <MdPlayArrow />}

        <div className='sidebarItem__main'>
          <i>{icon}</i>
          <p style={{fontWeight: "600", color: ""}}>{label}</p>
        </div>
      </div>
    </div>
  )
}

export default SidebarItem
