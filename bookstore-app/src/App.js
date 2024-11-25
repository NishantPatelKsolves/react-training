import React, {Suspense} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import NotFound from './pages/NotFound';

const Home = React.lazy(()=>import('./pages/Home'))
const About = React.lazy(()=>import('./pages/About'))
const Contact = React.lazy(()=>import('./pages/Contact'))
const Other = React.lazy(()=>import('./pages/Other'))
const BookDetail = React.lazy(()=>import('./components/BookDetail'))
// improving app with <Suspense> and lazy loading

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/other' element={<Other/>}/>
      <Route path='/*' element={<NotFound/>}/>
      <Route path='/book/:id' element={<BookDetail/>}/>
      </Routes>
    </Suspense>
    </BrowserRouter>
  );
}

export default App;
