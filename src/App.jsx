import './App.css';
import Forms from './Components/Forms';
import {Routes, Route} from "react-router-dom";
import Home from './Components/Home';



function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Forms/>}/>
        <Route path="/survey" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
