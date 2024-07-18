import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { fetchDataFromApi } from './utils/api'
import {getApiCongiguration} from './store/homeSlice';
import Home from './pages/home/Home';
import UpcomingMatches from './pages/home/upcomingmatch/UpcomingMatches'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Credential from './pages/Credential/Credential'
import ThankYou from './components/thankyou/Thankyou'

function App() {
  const dispatch = useDispatch()
  const {url} = useSelector((state) => state.home);
  console.log(url);

  useEffect(() => {
    fetchApiConfig();
  }, []);

  const fetchApiConfig = () => {
    fetchDataFromApi('/configuration')
      .then((res) => {
        console.log(res);
        const url = {
          backdrop: res.images.secure_base_url + "original",
          poster: res.images.secure_base_url + "original",
          profile: res.images.secure_base_url + "original",
        }
        dispatch(getApiCongiguration(url));
      });
  };

  return (
    <>
<BrowserRouter>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/upcomingmatches' element={<UpcomingMatches/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/signup' element={<Signup/>}/>
  <Route path='/credential' element={<Credential/>}/>
  <Route path='/thankyou' element={<ThankYou/>}/>
</Routes>
</BrowserRouter>
    </>
  )
}

export default App
