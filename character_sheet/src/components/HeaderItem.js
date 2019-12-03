import React, {useState} from 'react'
import './HeaderItem.scss'

const HeaderItem = ({title}) => {
  const[edit, setEdit] = useState(false)
  const[value, setValue] = useState('')
console.log(edit);

 return(
  <div className='headerItem-wrapper'>
    <span className='headerItem-cellTitle'>
      {title} : 
    </span>

    <span 
      className={edit ? 'headerItem-notDisplayed' : 'headerItem-cellData'} 
      onClick={()=> setEdit(!edit)}
    >
      {value}
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
      onClick={()=> setEdit(!edit)}
    />
</div>
 )
}

export default HeaderItem