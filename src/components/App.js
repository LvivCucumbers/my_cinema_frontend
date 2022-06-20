
import React, { useState } from 'react'

import Users from './Users';
import Login from './auth/SignIn'
import Navbar from './Navbar';
import {AuthProvider} from './auth/AuthContext'

const App = () => {
  const [token, setToken] = useState();
  const [user, setState] = useState();
  if(!token) {
    return <Login setToken={setToken} />
  }
  const selectUser = (user) => {
    setState(user)
  }

  return (
    //TODO: make its layout
   
    <div>
      <Navbar />
      
      <div className="container mx-auto px-4">
        <Users selectUser={selectUser} />
      </div>
    </div>
   
  )

}

export default App
