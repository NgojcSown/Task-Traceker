import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
function App() {
  return (
    <div
      style={{
        backgroundImage: 'url(https://cdn.pixabay.com/photo/2017/05/19/06/22/desk-2325627_960_720.jpg)',
        minWidth: '100%',
        minHeight: '900px',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position: 'relative'
      }}>
      <Header />
      <Footer />
    </div>
  );
}

export default App;
