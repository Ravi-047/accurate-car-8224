import './App.css';



import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
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
