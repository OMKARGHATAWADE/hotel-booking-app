import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.tsx'
import { BrowserRouter as Router,
 Navigate, 
 Route,
 Routes } from 'react-router-dom'
import Layout from './layouts/Layout'
import Register from './pages/Register.tsx'
import SignIn from './pages/SignIn.tsx'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout>
          <p>Home Page</p>
        </Layout>}/>

        <Route path="/search" element={<Layout>
          <p>Search Page</p>
        </Layout>}/>

        <Route path="/register" element={<Layout>
          <Register/>
          </Layout>}/>

        <Route path="/sign-in" element={ <Layout>
          <SignIn/>
          </Layout>}/>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  )
}

export default App
