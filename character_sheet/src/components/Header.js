import React, {useState, useEffect} from 'react'
import HeaderItem from './HeaderItem'
import './Header.scss'

const Header = () => {
  const [characterPersonalData, setPersonalData] =  useState({})
  const items = [
    'Personnage',
    'Classes',
    'Niveau',
    'genre',
    'Age',
    'Taille',
    'Poid',
  ]

  const handlePersonalData = (key, value) => {
    console.log(characterPersonalData);
    
    console.log('key ', key, ', value ', value);
    // if(!characterPersonalData){
    //   return
    // }
    const dataTmp = characterPersonalData
    Object.assign(dataTmp, {key: value})
    console.log(dataTmp);
    
    
    setPersonalData(dataTmp)
    
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