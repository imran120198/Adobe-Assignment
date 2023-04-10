import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import UserForm from "./Components/UserForm";
import PostForm from "./Components/PostForm";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<UserForm />} />
        <Route path="/posts" element={<PostForm />} />
      </Routes>
    </div>
  );
}

export default App;
