import logo from './logo.svg';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './App.css';
import Layout from './Components/Include/Layout';
import Home from './Components/Pages/Home/Home'
import Registration from './Components/Pages/Register/Registration'
import LogIn from './Components/Pages/Login/LogIn'
import Dashboard from './Components/Pages/Dashboard/Dashboard'
import AboutUS from './Components/Pages/AboutUS/AboutUS';
import ContactUS from './Components/Pages/ContactUS/ContactUS';

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
            <Route path='/aboutus' element={<AboutUS></AboutUS>}></Route>
            <Route path='/contactus' element={<ContactUS></ContactUS>}></Route>

          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
