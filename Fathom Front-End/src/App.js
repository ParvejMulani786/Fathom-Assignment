import logo from './logo.svg';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './App.css';
import Layout from './Components/Include/Layout';
import Home from './Components/Pages/Home/Home'
import Registration from './Components/Pages/Register/Registration'
import LogIn from './Components/Pages/Login/LogIn'
import Dashboard from './Components/Pages/Dashboard/Dashboard'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Layout></Layout>}>
            <Route index element={<Home/>}></Route>
            <Route path='/registration' element={<Registration></Registration>}></Route>
            <Route path='/login' element={<LogIn></LogIn>}></Route>
            <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>

          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
