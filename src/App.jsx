import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Search from './pages/Search'
import Info from './pages/Info'
import Layout from './layout'
import Admin from './pages/Admin'
import AdminLogin from './pages/AdminLogin'
import PrivateRoute from './components/PrivateRoute'
import './i18n';
import LilcuteptuteMSG from './components/LilcuteptuteMSG'


const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/Search" element={<Search />} />
            <Route path="/Info" element={<Info />} />

            {/* Protect Admin route */}
            <Route
              path="/Admin"
              element={
                <PrivateRoute>
                  <Admin />
                </PrivateRoute>
              }
            />

            <Route path="/AdminLogin" element={<AdminLogin />} />
            <Route path="/1" element={<LilcuteptuteMSG />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
