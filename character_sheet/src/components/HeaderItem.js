import React from 'react'

const HeaderItem = ({title}) => {
 return(
  <div className='headerItem-wrapper'>
    <span className='cellTitle'>
      {title} : 
    </span>
</div>
 )
}

export default HeaderItem