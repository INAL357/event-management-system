import Login from "./pages/loginPage/Login.jsx";
import './App.css'
import {  Routes, Route } from 'react-router-dom';
import Register from "./pages/registrationPage/Register.jsx";
import Events from "./pages/events/Events.jsx";
function App() {
    return(
        <>
           <Routes>
               <Route path="/" element={<Events/>}/>
               <Route path="/login" element={<Login/>} />
                <Route path="/register" element={<Register/>} />
           </Routes>
        </>

    )
}

export default App
