
import './App.css';
import { useState } from 'react';
import AuthPage from './pages/AuthPage';
import OrderHistorypage from './pages/OrderHistoryPage';
import NewOrderPage from './pages/NewOrderPage';
import Nav from './components/Nav';
import { Routes, Route} from 'react-router-dom'

function App() {

  const [user, setUser] = useState({}) ; 

  return (
    <main className='App'>
      { user ? 
      <>
          <Nav/> 
          <Routes>
              <Route
                path = '/orders/new'
                element={ <NewOrderPage/> }
              />
              <Route
                path='/orders'
                element={ <OrderHistorypage/> }
              />
          </Routes>
      </>
          :
          <AuthPage />
      }
      
    </main>
  );
}

export default App;
