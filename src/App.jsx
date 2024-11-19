import Header from './components/Layout/Header'

import { Route, Routes } from 'react-router-dom';

import Countries from './components/Pages/Countries';
import CountryDetail from './components/Pages/CountriesDetails';

function App() {
  return (
    <div className={`w-screen h-screen flex flex-col gap-6 `}>
      <Header/>
      <Routes>
        <Route path='/' element={<Countries/>}/>
        <Route path='/home' element={<Countries/>}/>
        <Route path='/country/:country' element={<CountryDetail/>}/>
      </Routes>
    </div>
  )
}

export default App
