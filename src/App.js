import './App.css'
import { Routes } from './components/Routes/Routes'
import AuthContext from './Context/AuthContext/AuthContext'

function App() {
  
  return (
    <AuthContext>
      <Routes />
    </AuthContext>);
}

export default App;
