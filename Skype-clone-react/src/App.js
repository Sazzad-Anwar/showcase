import './App.css';
import { Route, Routes } from 'react-router';
import Login from './Screens/Login';
import Registration from './Screens/Registration';
import Dashboard from './Screens/Dashboard';
import ProtectedRoute from './Components/ProtectedRoute';
import Test from './Screens/Test';

function App() {

  return (
    <Routes>
      <Route path="/registration" element={<Registration />} />
      <Route path="/dashboard" element={
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      }
      />
      <Route path="/test" element={<Test />} />
      <Route path="/" element={<Login />} />
    </Routes>
  );
}

export default App;
