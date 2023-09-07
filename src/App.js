import './App.css';
import LoginComponent from "./components/login-component/login.component";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeComponent from "./components/home-component/home.component";
import RegisterComponent from "./components/register-component/register.component";
import MainComponent from "./components/main-component/main.component";


function App() {
  return (
    <>
        <Router>
            <Routes>
                <Route path="/" element={<HomeComponent />} />
                <Route path="/login" element={<LoginComponent />} />
                <Route path="/register" element={<RegisterComponent />} />
                <Route path="/welcome" element={<MainComponent />} />
            </Routes>
        </Router>
    </>
  );
}

export default App;
