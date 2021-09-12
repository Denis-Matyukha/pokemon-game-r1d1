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
      >
        <p>Header_Description_In_a_Child-Paragraph</p>
      </Header>

      <Layout
        urlBg={bg2}
        title='Layout_1__Title'
      >
        <p>Layout_1__Description_In_a_Child-Paragraph</p>
      </Layout>

      <Layout
        colorBg='#009688'
        title='Layout_2__Title'
      >
        <p>Layout_2__Description_In_a_Child-Paragraph</p>
      </Layout>

      <Layout
        urlBg={bg3}
        title='Layout_3__Title'
      >
        <p>Layout_3__Description_In_a_Child-Paragraph</p>
      </Layout>

      <Footer />

    </div>
  );
}

export default App;
