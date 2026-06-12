import {Routes, Route} from 'react-router';
import {HomePage} from './Components/HomePage';
import './App.css'

function App() {
 

  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/checkout" element={<h1>Checkout Page</h1>} />
    </Routes>
  )
}

export default App
