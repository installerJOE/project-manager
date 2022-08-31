// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// Other assets to be used
import './assets/css/main.css'

// Components for Routing
import { Routes, Route, Link} from 'react-router-dom'
import Dashboard from './pages/Dashboard/Dashboard';
import NotFound from './pages/Error/NotFound';

// import authentication components
import Layout from './components/Auth/Layout';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register'
import ForgotPassword from './pages/Auth/ForgotPassword'
import EmailVerification from './pages/Auth/EmailVerification'
import ResetPassword from './pages/Auth/ResetPassword'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/auth">
          <Route index element={<NotFound/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="create-account" element={<Register/>}/>
          <Route path="forgot-password" element={<ForgotPassword/>}/>
          <Route path="email-verification" element={<EmailVerification/>}/>
          <Route path="reset-password" element={<ResetPassword/>}/>
        </Route>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
