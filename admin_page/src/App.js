
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Menu from './Menu';
import Dashboard from './Dashboard';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './Sidebar';
import Login from './Login';
import ReactDOM from 'react-dom';
import Addcourse from './AddCourse';
import { Routes, Route } from "react-router-dom"
import Viewcourse from './ViewCourse';
import Updatecourse from './Updatecourse';



function App() {
  return (
    
    <div className="wrapper">
      {/* <Login/> */}
      <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path="/dashboard" element={ <Dashboard/> } />
      <Route path="/sidebar" element={<Sidebar/> }></Route>
     
       <Route path="/addcourse" element={ <Addcourse/> } />
       <Route path="/ViewCourse" element={ <Viewcourse/> } />
       <Route path="/Updatecourse/:id" element={ <Updatecourse/> } />
      </Routes>
      {/* <Sidebar/> */}

       {/* <Login /> */}
       
      
    </div>
  );
}

export default App;


