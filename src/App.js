import wallpaper from './wallpaper.jpg';
import './styles.css';
import {Forms} from './components/form'


function App() {
  return (
  <div className='container'>
    <div className="form">
      <div className='login'>
          <div className='innerLogin'>
            <h1 className='titulo'>Faça seu login</h1>
            <p className='texto'>Entre com suas informações de cadastro.</p>
            <Forms/>
          </div>
      </div>
    </div>
    <div className="image">
      <img id='imagem-wallpaper' src={wallpaper} alt='wallpaper'/>
    </div>
  </div>
  );
}

export default App;
