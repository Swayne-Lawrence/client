import './App.css';
import DisplayAll from './components/DisplayAll';
import CreateProduct from './components/CreateProduct';
import DisplayOne from './components/DisplayOne';
import {BrowserRouter, Route, Routes} from "react-router-dom";




function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes> 
          <Route path="/" element={<DisplayAll/>}/>
          <Route path="/create" element={<CreateProduct/>}/>
          <Route path="/products/:id" element={<DisplayOne/>}/>
        </Routes>

        
      </div>
    </BrowserRouter>

  );
}

export default App;
