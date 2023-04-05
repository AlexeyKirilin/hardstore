import { useState, createContext } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';
import Order from './pages/Order';
import {Routes, Route} from 'react-router-dom';
 
import './scss/app.scss'

export const SearchContext = createContext()

const App = () => {

  const [searchValue, setSearchValue] = useState('')

  return (
    <div className="wrapper">
        <Header/>
        <div className='container'>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/cart' element={<Cart/>}/>
              <Route path='/order' element={<Order/>}/>
              <Route path='*' element={<NotFound/>}/>
            </Routes>
        </div>
    </div>
  );
}

export default App;


