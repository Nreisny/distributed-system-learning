import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Home from './Home.tsx'
import Sharding from './Sharding.tsx'
import './App.css';

function App(){
return (
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
