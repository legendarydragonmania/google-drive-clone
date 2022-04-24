import React from 'react'
import NewFile from './NewFile'
import { MdInsertDriveFile, MdPeopleAlt } from 'react-icons/md'
import { BiDevices, BiTimeFive, BiCloud } from 'react-icons/bi'
import { AiOutlineStar } from 'react-icons/ai'
import { BsTrash } from 'react-icons/bs'
import SidebarItem from './SidebarItem'
import '../../styles/Sidebar.css'

const index = () => {
  return (
    <div className='sideBar'>
      <NewFile />

      <div className='sidebar__itemsContainer'>
        <SidebarItem arrow icon={<MdInsertDriveFile />} label={'My Drive'} />
        <SidebarItem arrow icon={<BiDevices />} label={'Computers'} />
        <SidebarItem icon={<MdPeopleAlt />} label={'Shared with me'} />
        <SidebarItem icon={<BiTimeFive />} label={'Recent'} />
        <SidebarItem icon={<AiOutlineStar />} label={'Starred'} />
        <SidebarItem icon={<BsTrash />} label={'Bin'} />

        <hr />

        <SidebarItem icon={<BiCloud />} label={'Storage'} />
      </div>
    </div>
  )
}

export default index
