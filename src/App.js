import React, {useEffect, useState} from 'react'

//Router
import { Routes, Route, Navigate } from "react-router-dom";
import  Home  from './Components/Home/Home';
import  Login  from './Components/Login/Login';
import History from './Components/History/History';
import PageNotFound from './PageNotFound';

//Axios
import Axios from 'axios';

// styled components
import styled from 'styled-components';

//Sweet Alert
import swal from 'sweetalert';

function App() {

  const apiKey = '68d481a0fbc340308fbf934f836ee8c6';

  const token = localStorage.getItem('token');
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState('notfound');
  const [number, setNumber] = useState(10);
  const searchApi = `https://api.spoonacular.com/food/search?apiKey=${apiKey}&query=${search}&number=${number}`;


  useEffect(() => {  
    const fetchData = async () => {
      try{
        await Axios.get(searchApi)
        .then((response) => {
          setCategories(response.data);
        })  
      }catch(error){
        console.log(error);
        swal("Error", "Something went wrong", "error");
      } 
    }
    fetchData();
  }, [searchApi]);

  const handleChange = (e) => {
    if(e.target.value.length > 2) {
      setSearch(e.target.value);
    }
  }

  const handleShowMore = () => {
    setNumber(number + 10);
  }

  return (
    <AppStyle>
      
      <Routes>
        
        <Route exact path="/" 
            element={<Login token={token} />} />  
        
        { token ?
          <Route path="/Home" element={<Home 
            apiKey={apiKey}
            categories={categories} 
            setSearch={setSearch} 
            search={search} 
            handleChange={handleChange} 
            handleShowMore={handleShowMore}
            />} 
        /> 
       : <Route
            path="/Home"
            element={<Navigate to="/" />}/> } 

        { token ? 
        <Route path="/History" element={<History   />}/>
        : <Route
            path="/History"
            element={<Navigate to="/" />}/> }

        <Route path="*" element={<PageNotFound />} />

      </Routes>
    </AppStyle>
  );
}

export default App;
    
const AppStyle = styled.div`
  font-family: 'Dongle', sans-serif;
  margin: auto;
  align-items: center;
  justify-content: center;
  display: flex;
`
