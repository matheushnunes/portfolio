import { useState } from 'react'
import Layout from './components/layout.jsx'
import Principal from './components/principal.jsx'
import ProjectDetails from './components/projectDetails.jsx'
import { Routes, Route } from 'react-router-dom'

function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path='/' element={<Principal />} />
                <Route path="/projectDetails" element={<ProjectDetails/>} />
            </Route>
        </Routes>
    )
}

export default App
