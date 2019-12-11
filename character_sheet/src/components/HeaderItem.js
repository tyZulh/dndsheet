import React, {useState} from 'react'
import './HeaderItem.scss'

const HeaderItem = ({title, handleData}) => {
  const[edit, setEdit] = useState(false)
  const[value, setValue] = useState('')

  const sendData = () => {
    setEdit(!edit)
    handleData(title, value)
  }

 return(
  <div className='headerItem-wrapper'>
    <span className='headerItem-cellTitle'>
      {title} : 
    </span>

    <span 
      className={edit ? 'headerItem-notDisplayed' : 'headerItem-cellData'} 
      onClick={()=> setEdit(!edit)}
    >
      {value ? value : title}
    </span>

    <input
      className={edit ? 'headerItem-cellInput' : 'headerItem-notDisplayed'} 
      onChange={(event)=> setValue(event.target.value)}
      placeholder={value}
    />

    <input 
      className={edit ? 'headerItem-editButton' : 'headerItem-notDisplayed'}
      type='button'
      value='+'
      onClick={()=> sendData()}
    />
</div>
 )
}

export default HeaderItem