import React, { useEffect, useState } from 'react';
import './App.css';
import News from './Components/News/News';

function App() {
  const styles = {
    display: 'flex',
    flexWrap: 'wrap',
    margin: '10px',
    padding: '10px',
    height: 'auto',
    justifyContent: 'center',
    gap: '10px'
  }
  const h = {
    textAlign: 'center',
    color: 'White',
    backgroundColor: 'Black',
    border: '3px solid black',
  }
  const [articles, setArticles] = useState([])
  useEffect( () => {
    fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=1e6ce21a301f458690f983559d725963')
    .then(res => res.json())
    .then(data => setArticles(data.articles))
  },[])
  return (
    <div>
      <h1 style={h}>Latest Breaking News</h1>
      <div style = {styles}>
      {
       articles && articles.map(article => <News article={article}></News>)
      }
      </div>
    </div>
  );
}
export default App;
