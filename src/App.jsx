import Home from './views/Home.jsx';
import Header from './views/Header.jsx';
import About from './views/About';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <main>
          <Home />
          <About />
        </main>
      </div>
    </div>
  );
}

export default App;
