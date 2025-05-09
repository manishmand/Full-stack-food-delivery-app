import React from 'react'
import './ExploerMenu.css'
import { menu_list } from '../../assets/assets'

const ExpolerMenu = ({category , setCategory}) => {
  return (
    <div className='explore-menu' id='exploer-menu'>
        <h1>Exploer our menu</h1>
        <p className='exploer-menu-text'>Choose from a diverse menu fetaturing a delectable array of dises crafted with the finest ingredients and </p>
        <div className="exploer-menu-list">
            {menu_list.map((item,index)=>{
                return(
                    <div 
                    onClick={()=>setCategory(prev=>prev===item.menu_name ? "All" : item.menu_name)}
                    key={index} className="exploer-menu-list-item">
                     <img 
                      className={
                        category===item.menu_name?"Active":""
                      }
                     src={item.menu_image} alt="" />
                     <p>{item.menu_name}</p>  
                    </div>
                )
            })}
        </div>
        <hr/>
      
    </div>
  )
}

export default ExpolerMenu
