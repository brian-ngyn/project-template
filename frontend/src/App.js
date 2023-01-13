import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserAuthContextProvider } from './context/UserAuthContext';
import Login from './pages/Login';
import Home from './pages/Home';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <div>
      <BrowserRouter>
        <UserAuthContextProvider>
          <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/home" element={<Home/>}/>
            {/* <Route path="/home" element={<ProtectedRoute><Home/></ProtectedRoute>}/> */}
          </Routes>

        </UserAuthContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
