import '../src/assets/css/master.min.css';
import Header from './assets/components/Header/Header';
import Hero from './assets/components/Hero/Hero';
import ProductInfo from './assets/components/Info/ProductInfo';
import AddToCart from './assets/components/Cart/AddToCart';

function App() {
  return (
    <main>
      <Header />
      <div className='hero-main'>
        <Hero />
        <div className='side-hero'>
          <ProductInfo />
          <AddToCart />
        </div>
      </div>
    </main>
  );
}

export default App;
