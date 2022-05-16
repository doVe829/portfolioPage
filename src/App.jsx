import { useState } from 'react';
import logo from './logo.svg';
// import './App.css';
import Home from './views/Home.jsx';
import Header from './views/Header.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <div className="container">
        <Home />
      </div>
    </div>
  );
}

export default App;
