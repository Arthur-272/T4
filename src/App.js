import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./login";
import UsersList from "./UsersList";
import UserProfile from "./UserProfile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/user-list" element={<UsersList />} />
            <Route path="/user-profile" element={<UserProfile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
