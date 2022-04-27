import './App.css';
import { Login } from './components/Login';
import { Navbar } from './components/navbar';
import { Routes, Route } from "react-router-dom"
import Burger from './components/burger/Burger';
import OrderHistory from './components/burger/orderHistory';
import OrderDetails from './components/burger/orderDetails';
import PrivateRoute from './components/burger/PrivateRoute';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/home' element={
          <PrivateRoute>
          <Burger/>
          </PrivateRoute>}>
          </Route>
        <Route path='/orderHistory' element={
          <PrivateRoute>
        <OrderHistory/>
        </PrivateRoute>
        }></Route>
        <Route path='/orderDetails/:id' element={
        <PrivateRoute>
        <OrderDetails/>
        </PrivateRoute>
        }></Route>
      </Routes>
    </div>
  );
}

export default App;
