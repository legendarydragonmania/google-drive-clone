import React, { useState } from 'react'
import './App.css'
import Header from './components/header/index'

function App() {
  // authentication
  const [user, setUser] = useState({
    displayName: 'David Rakosi',
    email: 'david@cleverprogrammer.com',
    emailVerified: true,
    phoneNumber: null,
    photoURL:
      'https://lh6.googleusercontent.com/-KyLTWqvDIHQ/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclcWGWqkt6YUAan32YO4CSR07Y2jw/s96-c/photo.jpg',
  })
  return (
    <div className='App'>
      <Header userPhoto={user.photoURL} />
      {/* authenticated
        sidebar
        files view
        side icons
      */}
    </div>
  )
}

export default App
