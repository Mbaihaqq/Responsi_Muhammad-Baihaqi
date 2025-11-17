import React, { useState } from 'react'
import HomePage from './pages/HomePage'
import ProdukPage from './pages/ProdukPage'
import ProfilePage from './pages/ProfilePage'
import Navbar from './components/Navbar'
import PWABadge from './PWABadge'

export default function App(){
  const [page, setPage] = useState('home')
  return (
    <div className="min-h-screen">
      <Navbar current={page} onNavigate={setPage} />
      <main>
        {page === 'home' && <HomePage />}
        {page === 'produk' && <ProdukPage />}
        {page === 'profile' && <ProfilePage />}
      </main>
      <PWABadge />
    </div>
  )
}
