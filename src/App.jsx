import Home from './views/Home.jsx';
import Header from './views/Header.jsx';
import About from './views/About';
import Projects from './views/Projects';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <main>
          <Home />
          <About />
          <Projects />
        </main>
      </div>
    </div>
  );
}

export default App;
