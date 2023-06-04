import React from 'react'
import FemaleDeveloper from '../img/female-developer.jpg'
import '../index.css'
export default function Header(){
    return(
        <header className='header' >
             <div className='top'>
                <h2>Sruti Mishra</h2>
                <img src={FemaleDeveloper} width="300px"alt="developer" />
             </div>
             
             
                
           
             

        </header>
    )
}