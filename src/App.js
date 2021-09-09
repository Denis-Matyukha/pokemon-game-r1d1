import './App.css';
import Header from './components/Header';
import Layout from './components/Layout';
import Footer from './components/Footer';

// import bg1 from './assets/bg1.jpg'
import bg2 from './assets/bg2.jpg'
import bg3 from './assets/bg3.jpg'

function App() {
  return (
    <div className="App">

      <Header 
        title='Header_Title'
        descr='Header_Description'
      />

      <Layout 
        title='Layout_1__Title'
        descr='Layout_1__Description'
        urlBg={bg2}
      />

      <Layout 
        title='Layout_2__Title'
        descr='Layout_2__Description'
        colorBg='#009688'
      />

      <Layout 
        title='Layout_3__Title'
        descr='Layout_3__Description'
        urlBg={bg3}
      />

      <Footer />

    </div>
  );
}

export default App;
