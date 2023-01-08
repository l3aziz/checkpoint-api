import logo from './logo.svg';
import './App.css';
import Home from "./components/Home";
import UserList from './components/UserList';
import { Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Users from './components/Users';

function App() {
  return (
   <Routes className="App">
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="users" element={<Users />} />
                <Route path="posts/:id" element={<UserList />} />
            </Route>
        </Routes>
    );
 }
export default App;
