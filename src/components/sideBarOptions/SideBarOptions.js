
 import React from 'react';
 import "./SideBarOptions.css"
 
 const SideBarOptions = ({ option ,Icon }) => {
   return (
     <div className='sideBarOption'>
        {Icon &&   <Icon className="sideBarOption_Icon"/>}
        {Icon ? <h4>{option}</h4> :<p>{option}</p>
 }
     </div>
   )
 }
 
 export default SideBarOptions