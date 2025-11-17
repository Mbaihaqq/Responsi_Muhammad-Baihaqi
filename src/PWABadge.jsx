import { useRegisterSW } from 'virtual:pwa-register/react'

export default function PWABadge(){
  const { offlineReady, needRefresh, updateServiceWorker } = useRegisterSW();
  if(!offlineReady && !needRefresh) return null;
  return (
    <div className="fixed bottom-4 right-4 bg-white p-3 rounded shadow">
      {offlineReady ? <div>App ready to work offline</div> : null}
      {needRefresh ? <button onClick={()=>updateServiceWorker(true)}>Reload</button> : null}
    </div>
  )
}
