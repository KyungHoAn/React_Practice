import logo from './logo.svg';
import './App.css';

function App() {
  const name = 'kyungho';
  const naver = {
    name: 'naver',
    url:'https://www.naver.com',
    
  }
  return (
    <div className='app'>
      <h1
        style={
          {color: 'purple',
          backgroundColor: 'green'}
        }
      >
        Welcome, {name}
        <p>{2+3}</p>
      </h1>
      <a href ={naver.url}>{naver.name}</a>
    </div>
  );
}

export default App;
