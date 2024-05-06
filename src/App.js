import logo from './logo.svg';
import './App.css';
import Login from './Components/Login/Login'
import Dashboard from './Components/Dashboard/Dashboard'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Login} />
          <Route path='/Dashboard' Component={Dashboard} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
