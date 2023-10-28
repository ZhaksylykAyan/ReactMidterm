import Navbar from "./components/Navbar";
import {Route, Routes} from "react-router-dom"
import Home from "./pages/Home";
import Post from "./pages/Post";
import Profile from "./pages/Profile";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Post' element={<Post />} />
          <Route path='/Profile' element={<Profile />} />
      </Routes>
        
    </>
  );
}

export default App;
