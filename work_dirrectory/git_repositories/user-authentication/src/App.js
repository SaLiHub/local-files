import logo from './logo.svg';
import './App.css';
import SignIn from "./auth/SignIn";
import {Route, Routes} from "react-router-dom";

function SignUp() {
    return null;
}

function App() {
  return (
      <div className="App">
          <Routes>
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Routes>
      </div>
  );
}

export default App;
