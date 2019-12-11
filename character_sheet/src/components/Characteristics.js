import React from 'react'
import CharacteristicLine from './CharacteriticLine'
import './Characteristics.scss'

const Characteristics = () => {
  const characteristics = [
    "For",
    "Dex",
    "Con",
    "Int",
    "Sag",
    "Char"
  ]

  return(
    <div className='characteristics-wrapper'>
        {this.characteristics.map(charcteristic => {
          return (<CharacteristicLine data={charcteristic}/>)
        })}
    </div>
  )
}

export default Characteristics