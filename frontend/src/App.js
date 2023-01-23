
import { Button } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Cart from './Components/Cart/Cart';



import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Men from './Pages/All_Products _Pages/Men';
import Women from './Pages/All_Products _Pages/Women';
import MainRoutes from './Pages/MainRoutes';


function App() {

  return (
    <div>
      <div className='_nav__position__sticky__'>
        <Navbar />
      </div>
      <MainRoutes />
      <Footer />
    </div>
  );
}

export default App;
