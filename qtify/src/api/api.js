import axios from 'axios';


export const Backend_Endpoint=`https://qtify-backend-labs.crio.do`;


export const fetchTopAlbums = async()=>{
  
    try {
        const response = await axios.get(`${Backend_Endpoint}/albums/top`)
        return response.data;
    } catch (error) {
        console.log(error)
        return null;
    }
    
}


export const fetchSongs = async()=>{
    try {
        const response =await axios.get(`${Backend_Endpoint}/songs`)
        return response.data;
    } catch (error) {
        console.log(error)
        return null;
    }
}

export const fetchNewAlbums = async()=>{
    try {
        const response = await axios.get(`${Backend_Endpoint}/albums/new`);
        return response.data;
    } catch (error) {
        console.log(error)
        return null;
    }
}