import React from 'react'

const filesView = () => {
  return (
    <div className='filesView'>
      <div className='filesView__row'>{/* files card */}</div>
      <div className='filesView_titles'>
        <div className='fileView_titles--left'>
          <p>Name</p>
        </div>
        <div className='filesView_titles--right'>
          <p>Last modified</p>
          <p>Files size</p>
        </div>
      </div>
      {/* files items */}
    </div>
  )
}

export default filesView
