import './App.css';
//to run bootstrap we have to add css an javascript file in App
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import Home from './component/Home';
import Navbar from './component/Navbar'
import Register from './component/Register';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Update from './component/Update';
import Details from './component/Details';


function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/register" element={<Register/>}/>
        <Route exact path="/update/:id" element={<Update/>}/>
        <Route exact path="/view/:id" element={<Details/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
