
import logo from './logo.svg';
import './App.module.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero'
import Section from './Components/Section/Section';
import { useEffect, useState } from 'react';
import { fetchTopAlbums,fetchNewAlbums } from './api/api';

// I will be setting up the routing here



function App() {

  const [topAlbumSongs,setTopAlbumSongs] = useState([]);
  const [newAlbumSongs,setNewAlbumSongs] = useState([]);
 
  const generateTopAlbumSongs= async()=>{
    
    try {
      const res = await fetchTopAlbums();
      console.log(res)
    setTopAlbumSongs(res);
    } catch (error) {
      console.log(error)
    }
  }
 const generateNewAlbumSongs = async()=>{
  try {
    const res = await fetchNewAlbums();
    setNewAlbumSongs(res);
  } catch (error) {
    console.log(error)
  }
 }

 useEffect(()=>{
  generateTopAlbumSongs();
  generateNewAlbumSongs();
 },[])
     return (
    <>
     <Navbar/>
     <Hero/>
     <Section title='Top Albums'  type='album' data ={topAlbumSongs} />
     <Section title='New Albums' type='album' data={newAlbumSongs}/>
    </>
  );
}

export default App;
