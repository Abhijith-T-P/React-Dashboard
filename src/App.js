import React from 'react'

import { Route, Routes} from 'react-router-dom'

import Admin from './Admin/App'
function App() {

  return (
    <div>
      <Routes>
        <Route path="/*" element={<Admin/>} />
        
      </Routes>
    </div>
  )
}

export default App