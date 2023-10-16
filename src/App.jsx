import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import Coctail from './pages/coctail';


function App() {

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Coctail/>} />
        
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
