import React, { useEffect } from 'react'
import NavigationRoutes from './routes'
import { Navigate } from 'react-router';
import { GlobalStyle } from './styles/global'

function App() {
  return (
    <>
      <GlobalStyle />
      <NavigationRoutes />
    </>
  )
}

export default App
