export default function Navbar({current, onNavigate}){
  return (
    <nav className="bg-white p-4 shadow flex gap-4">
      <button onClick={()=>onNavigate('home')} className={current==='home'?'font-bold':''}>Home</button>
      <button onClick={()=>onNavigate('produk')} className={current==='produk'?'font-bold':''}>Produk</button>
      <button onClick={()=>onNavigate('profile')} className={current==='profile'?'font-bold':''}>Profile</button>
    </nav>
  )
}
