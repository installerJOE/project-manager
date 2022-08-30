// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// Components for Routing
import { Routes, Route, Link} from 'react-router-dom'
import Home from './pages/Home/Home';
import Dashboard from './pages/Dashboard/Dashboard';
import NotFound from './pages/Error/NotFound';
import './assets/css/main.css'
import logo from './assets/images/logo.png'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home logo={logo}/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
