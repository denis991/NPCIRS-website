import './App.css';
import MainPagae from './components/Pages/MainPagae';
import Navbar from './components/UI/Navbar/Navbar';
/**
 * @description
 * все статические части сайта должны быть в одном месте
 */
function App() {
  return (
    <>
      <Navbar />
      <MainPagae />
    </>
  );
}

export default App;
