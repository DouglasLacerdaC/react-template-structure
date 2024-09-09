import { BrowserRouter } from 'react-router-dom'
import { Router } from './shared/routes'

export function App() {
  return (
    <div className="h-screen w-screen grid place-items-center">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  )
}
