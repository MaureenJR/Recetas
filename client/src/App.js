import {Routes, Route} from 'react-router-dom';
import './App.css';
import Principal from './componentes/Principal';
import Nueva from './componentes/Nueva';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' exact element={<Principal/>}/>
        <Route path='/receta/nueva' element={<Nueva/>}/>
      </Routes>
    </div>
  );
}

export default App;
