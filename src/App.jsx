import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
{
  /* The following line can be included in your src/index.js or App.js file */
}
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './Components/Navbar';
import Science from './Components/Science';
import Accueil from './Components/Accueil';


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Science />
        <Routes>
          {/* <Route path='/home' element={<h1 className="text-center pt-5">Home Pages</h1>}></Route> */}
          <Route path='/Science' element={<Science />}></Route>
          <Route path='/Accueil' element={<Accueil />}></Route>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
