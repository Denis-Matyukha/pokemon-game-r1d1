import './App.css';
import Header from './components/Header';
import Layout from './components/Layout';
import Footer from './components/Footer';

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
        urlBg=''
      />

      <Layout 
        title='Layout_2__Title'
        descr='Layout_2__Description'
        colorBg='#009688'
      />

      <Layout 
        title='Layout_3__Title'
        descr='Layout_3__Description'
        urlBg=''
      />

      <Footer />

    </div>
  );
}

export default App;


/*
[]Первый и последний `Layout` должны принимать картинки, второй только цвет фона.

[]`Layout` в котором должна быть картинка на фоне, вы должны использовать *inline* стиль `background` либо `backgroundImage`
advise - Вы должны в компоненте App получить картинку, так как показано в уроке, и передать ее в соответсвующий props в компонент Layout

[]Ты можешь выбрать одну из этих картинок, чтобы передать ее на фон для `Layout` или взять любую свою картинку, *as you wish...*
*/
