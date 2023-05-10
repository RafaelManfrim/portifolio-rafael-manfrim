import { Routes, Route } from 'react-router-dom'
import { Portifolio } from './Portifolio'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Portifolio />} />
    </Routes>
  )
}