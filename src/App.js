import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import { Routes, Route } from "react-router-dom";
import ChatRoom from './components/ChatRoom';
import AddRoomModal from './components/Modals/AddRoomModal';
import InviteMemberModal from './components/Modals/InviteMemberModal';


function App() {
  return (
   <div>
    <Routes>
      <Route path="/Login" element={<Login />} />
      <Route path="/" element={<ChatRoom />} />
    </Routes>
    <AddRoomModal />
    <InviteMemberModal />
   </div>
  );
}

export default App;
