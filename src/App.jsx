import './App.css';
import Posts from './Posts';
import About from './About';
import Home from './Home';
import { BrowserRouter , Route , Routes , Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/">Home</Link>Doungkamol</li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </div>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/posts' element={<Posts/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
