import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import './App.css';

function App(){
  function Home(){
    return(
      <h1>Home</h1>
    );
  }
  function Sharding(){
    return(
      <h1>Sharding</h1>
    );
  }
  return(
    <BrowserRouter>
      <nav>
        <Link to='/' className='home-li active-link'>Home</Link>
        <Link to='/Sharding'>Sharding</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Sharding' element={<Sharding />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
