import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import PageNotFound from './PageNotFound'
import ContactSeoul from './ContactSeoul'
import ContactBusan from './ContactBusan'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>{' | '}
          <Link to="/contact">Contact</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contact" element={<Contact />}>
            <Route path='seoul' element={<ContactSeoul />}></Route>
            <Route path='busan' element={<ContactBusan />}></Route>
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
