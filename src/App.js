import '../src/assets/css/master.min.css';
import Header from './assets/components/Header/Header';
import Hero from './assets/components/Hero/Hero';
import SideInfo from './assets/components/Info/SideInfo';
import Modal from './assets/components/Hero/Modal/Modal';

function App() {
  return (
    <main>
      <Header />
      <Modal />
      <div className='hero-main'>
        <Hero />
        <SideInfo />
      </div>
    </main>
  );
}

export default App;
