import './App.css';
import React, {useState,useEffect} from 'react';
import Header from './components/Header';
import Intro from './components/Intro';
import GridList from './components/GridList';

function App() {

  const [data,setData] = useState(null);

  useEffect(() => {
    fetch("./data/data.json",{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
    .then((res) => res.json())
    .then((data) => setData(data));
  },[])

  return (
    <>
      <Header />
      <main className="mx-5">
        <Intro />
        {data ? <GridList data = {data} /> : <></>}
      </main>
    </>
  );
}

export default App;
