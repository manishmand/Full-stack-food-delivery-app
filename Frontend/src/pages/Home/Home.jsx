import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExpolerMenu from '../../components/ExploerMenu/ExpolerMenu'
import FoodDispaly from '../../components/FoodDisplay/FoodDispaly.jsx'
import AppDownload from '../../components/AppDownload/AppDownload.jsx'


const Home = () => {
  const [category , setCategory] = useState("All")
  return (
    <div>
      <Header/>
      <ExpolerMenu category={category}  setCategory ={setCategory}/>
       <FoodDispaly category={category}  />
       <AppDownload/>
    </div>
  )
}

export default Home
