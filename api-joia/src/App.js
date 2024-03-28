
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar.js';
import Create from './components/Create/Create.js';
import Getting from './components/Getting/Getting.js'
import List from './components/List/List.js'
import Updating from './components/Updating/Updating.js'
import Delete from './components/Delete/Delete.js'



function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar></NavBar>}>
            <Route index element={<List></List>}></Route>
            <Route path="create" element={<Create></Create>}></Route>
            <Route path="getting" element={<Getting></Getting>}></Route>
            <Route path="updating" element={<Updating></Updating>}></Route>
            <Route path="delete" element={<Delete></Delete>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
