
// import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Navbar from './Components/Navbar';
import { Provider } from 'react-redux';
import store from './store/store';
function App() {
  return (
    <div className="App">
      <Provider store={store}>
<Router>
  <Navbar/>
  <Routes>
    <Route path='/Home' element={<Home/>}></Route>
    <Route path='/Cart' element={<Cart/>}></Route>
  </Routes>
</Router>
</Provider>
    </div>
  );
}

export default App;
