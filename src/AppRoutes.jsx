import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

const AppRoutes = ({ routes }) => (
  <Routes>
    {routes.map((item, idx) => (
      <Route key={`route-${idx}`} path={item.url} element={item.element} />
    ))}
    <Route path='*' element={<Navigate to='/' replace />} />
  </Routes>
)

export default AppRoutes
