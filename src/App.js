
import './scss/app.scss';
import Header from './components/Header'
import Home from './pages/Home'
import Error from './pages/Error'
import {  Routes, Route } from 'react-router';


const App = () => {

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
      <div className="container">
      <Routes>
      <Route path="/" exact element={<Home/>}/>
      <Route path="error" exact element={<Error/>}/>
      </Routes>
      </div>
    </div>
    </div>
  );
}

export default App;
