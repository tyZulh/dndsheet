import React from 'react'
import HeaderItem from './HeaderItem'

const Header = () => {
  const items = [
    'Personnage',
    'Classes',
    'Niveau',
    'genre',
    'Age',
    'Taille',
    'Poid',
  ]
  return(
    <header className='header-wrapper'>
      {items.map(item => {
          return (<HeaderItem title={item}></HeaderItem>)
        })}
    </header>
  )
}

export default Header