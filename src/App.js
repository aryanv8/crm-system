import "./App.css";

// import of libraries
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// import of react libraries
import { HashRouter as Router, Routes, Route } from "react-router-dom";

// import of components
import Navbar from "./components/Navbar2";
import Footer from "./components/Footer";
import Forgotpwd from "./components/Forgotpwd";

// import of pages
import Contact from './pages/Contact';
import FeedbackPage from "./pages/FeedbackPage";
import Signup from "./pages/Signup";
import UserProfilePage from "./pages/UserProfilePage";
import EditUser from "./pages/EditUser";
import UserLogin from "./pages/UserLogin";
import AdminLogin from "./admin/AdminLogin";
import Home from "./pages/Home";
import About from "./pages/About";
import ViewProduct from "./pages/ViewProduct";

// import admin pages
import Dashboard from "./admin/Dashboard";
import Customers from "./admin/Customers";
import Insights from "./admin/InsightsFromDB";
import FeedBackShow from "./admin/FeedBackShow";
import ViewProf from "./admin/ViewProf";

function App() {
  return (
    <div className="App">
      
      <Router>
        
        <Navbar />

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about'  element={<About />} />
          <Route path='/contact' element={<Contact />}/>
          <Route path='/feedback' element={<FeedbackPage />} />
          <Route path='/login' element={<UserLogin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/profile' element={<UserProfilePage/> } />

          <Route path='/edit-user' element={<EditUser />} ></Route>
          <Route path="/admin-login" element={<AdminLogin /> } ></Route>
          <Route path="/forgotpwd" element={<Forgotpwd />} ></Route>
          <Route path="/products" element={<ViewProduct />} ></Route>
          <Route path="/view-profile" element={<ViewProf />} ></Route>

          <Route path='/dashboard' element={<Dashboard />} ></Route>
          <Route path='/customers' element={<Customers />} ></Route>
          <Route path='/insights' element={<Insights />} ></Route>
          <Route path='/feedbackshow' element={<FeedBackShow />} ></Route>
        </Routes>
        
      </Router>

      <Footer />
      {/* <RedButton>Ok</RedButton>
      <BlueButton>Stop</BlueButton>
      <TempButton colorClass="btn-info">Temp Info</TempButton>
      <TempButton color="rgb(255, 255, 255)">Temp</TempButton> */}

      {/* Tempbutton with color yellow in rgb */}
      {/* <TempButton color="rgb(255, 255, 0)">Temp</TempButton> */}

      {/* RedOutlineButton with text Red Outline Button */}
      {/* <RedOutlineButton>Red Outline Button</RedOutlineButton>
      <WhiteOutlineButton>White Outline Button</WhiteOutlineButton> */}
    </div>
  );
}

export default App;
