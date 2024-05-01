import React from 'react'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { About, Home, Layout } from '../pages'

const AppRouter:React.FC<{}> = () => {
  return (
    <Router>
        <Routes>
        {/* Resto de las páginas con Layout */}
            <Route  element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="about" element={< About />} />
                <Route path="blog" element={<>Blog </>} />
                <Route path="blog/:nameblog" element={<>Blog </>} />
                <Route path="portfolio" element={<>Portfolio </>} />
                <Route path="publications" element={<>Publications </>} />
                <Route path="*" element={<>NotFound </>} />
            </Route>
        </Routes>
    </Router>
  )
}

export default AppRouter