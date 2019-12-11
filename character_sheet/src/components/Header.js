import React, {useState, useEffect} from 'react'
import axios from 'axios'
import HeaderItem from './HeaderItem'
import './Header.scss'


const Header = () => {
  const path = process.env.REACT_APP_API_PATH

  const [characterPersonalData, setPersonalData] =  useState({})

  const items = [
    'Personnage',
    'Classes',
    'Niveau',
    'Genre',
    'Age',
    'Taille',
    'Poid',
  ]

  const handlePersonalData = (key, value) => {
    const dataTmp = characterPersonalData
    setPersonalData(dataTmp)
    axios.put(`${path}/character/:id/identity`, dataTmp)
    .then(res =>res.data)
  }

  useEffect(()=>{
    console.log(characterPersonalData);
    
  })

  return(
    <header className='header-wrapper'>
      {items.map(item => {
          return (
            <HeaderItem
              className='header-headerItem'
              title={item}
              handleData={handlePersonalData}
              value={characterPersonalData ? characterPersonalData.value : ''}
            />
          )
        })}
    </header>
  )
}

export default Header