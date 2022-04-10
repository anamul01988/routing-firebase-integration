import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Products from './components/Products/Products';

function App() {
  return (
    <div className="App">
      <Header/>
       <Routes>
      <Route path="/" element={<Home />}>  </Route>
     <Route path="/login" element={<Login/>}> </Route>
     <Route path="/register" element={<Register/>}> </Route>
     <Route path="/products" element={<Products/>}> </Route>
    </Routes>

    </div>
  );
}

export default App;
