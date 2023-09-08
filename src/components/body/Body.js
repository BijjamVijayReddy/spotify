import React from 'react';
import "./Body.css"
import Header from '../header/Header';
import { DataLayer } from '../../features/dataLayer/DataLayer';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
const Body = () => {
// const [{ discover_weekly }, dispatch] = DataLayer()

 React.useEffect(()=>{
  document.title=`SomeThing went Wrong.`
 })

  return (
    <div className='body'>
        <Header />

        <div className='body__info'>
            
            <div >
              <div className='center'>
              <InfoOutlinedIcon  sx={{height:"60px",width:"60px"}}/>
              <h1>Search Something else!</h1>
              <strong>SomeThing went Wrong.</strong>
              <p>{}</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Body