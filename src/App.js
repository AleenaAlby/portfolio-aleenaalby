import './App.css';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Particle from './components/Particle';

function App() {
  return (
    <div className="App">
      {/* <Header/> */}
      <Particle />
      <Banner />
      <Particle />
      <Footer />

    </div>
  );
}

export default App;
