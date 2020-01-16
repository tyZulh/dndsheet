import React, {useState, useEffect} from 'react'
import axios from 'axios'
import CharacteristicLine from './CharacteristicLine'
import './Characteristics.scss'

const characsMock = [
  {
    name: 'for',
    totalValue: 18,
    initialValue: 16,
    alterationBonus: 1,
    variousBonus: 2,
    variousMalus:1,
    charachteristicModifier:4
  },
  {
    name: 'con',
    totalValue: 18,
    initialValue: 16,
    alterationBonus: 1,
    variousBonus: 2,
    variousMalus:1,
    charachteristicModifier:4
  },
  {
    name: 'dex',
    totalValue: 18,
    initialValue: 16,
    alterationBonus: 1,
    variousBonus: 2,
    variousMalus:1,
    charachteristicModifier:4
  },
  {
    name: 'int',
    totalValue: 18,
    initialValue: 16,
    alterationBonus: 1,
    variousBonus: 2,
    variousMalus:1,
    charachteristicModifier:4
  },
  {
    name: 'sag',
    totalValue: 18,
    initialValue: 16,
    alterationBonus: 1,
    variousBonus: 2,
    variousMalus:1,
    charachteristicModifier:4
  },
  {
    name: 'cha',
    totalValue: 18,
    initialValue: 16,
    alterationBonus: 1,
    variousBonus: 2,
    variousMalus:1,
    charachteristicModifier:4
  }
]

const Characteristics = () => {
  const [characteristics, setCharacteristics] = useState([])

  
  const path = process.env.REACT_APP_API_PATH
  
  const fetchCharacteristic = () => {
    // axios.get(`${path}/characteristic/data`)
    // .then(res => res.data)
    // .then(data => setCharacteristics(data))
  }

  useEffect(() => {
    fetchCharacteristic()
  }, [])

  return(
    <div className='characteristics-wrapper'>
      <h2>Characteristiques</h2>
      <div className='characteristic-labels'>
        <span className='characteristic-total rotate'> Total </span>
        <span className='characteristic-initial rotate'> Valeur initial</span>
        <span className='characteristic-alteration rotate'> Bonus d'alteration</span>
        <span className='characteristic-bonus rotate'> Bonus divers</span>
        <span className='characteristic-malus rotate'> Malus divers</span>
        <span className='characteristic-modifier rotate'> Modificateur</span>
      </div>
      {characsMock.map(charcteristic => {
        return (<CharacteristicLine data={charcteristic}/>)
      })}
    </div>
  )
}

export default Characteristics