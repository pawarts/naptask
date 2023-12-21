import Login from './LoginSignup/Login';
import Signup from './LoginSignup/Signup';

import TaskPage from './TaskPage/TaskPage';
import Goal from './Goals/Goals';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/nullystyle/fonts.css';



function App() {
  return (
    <div>
      <Router>
        <Routes>

          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/task' element={<TaskPage />} />
          <Route path='/goal' element={<Goal />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
