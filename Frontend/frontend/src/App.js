import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import UserForm from "./Components/UserForm";
import PostForm from "./Components/PostForm";
import UserList from "./Components/UserList";
import PostList from "./Components/PostList";
import UserAnalytics from "./Components/UserAnalytics";
import PostAnalytics from "./Components/PostAnalytics";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<UserForm />} />
        <Route path="/posts" element={<PostForm />} />
        <Route path="/userlist" element={<UserList />} />
        <Route path="/postlist" element={<PostList />} />
        <Route path="/useranalytics" element={<UserAnalytics />} />
        <Route path="/postanalytics" element={<PostAnalytics />} />
      </Routes>
    </div>
  );
}

export default App;
