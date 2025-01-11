import React, { useState } from 'react'
import { setLocalStorage ,getLocalStorage} from '../../utils/localStorage'

const Header = (props) => {

   const [username, setUsername] = useState('')
  const user = username;
   /* if(!data){
     setUsername('Admin')
   }else{
    setUsername(data.firstName)
   } */
// const string = localStorage;
// const jsonstring = JSON.parse(string)
  const logOutUser = ()=>{
    localStorage.setItem('loggedInUser','')
    props.changeUser('')
    // window.location.reload()
  }

  
  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>Shantanu!</span></h1>
        {/* <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>Chinmay!</span></h1> */}
        {/* <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>User</span></h1> */} 
        <button onClick={logOutUser} className='bg-red-600 text-base font-medium text-white px-5 py-2 rounded-sm'>Log Out</button>
    </div>
  )
}

export default Header