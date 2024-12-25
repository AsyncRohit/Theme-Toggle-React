import React, { useEffect, useRef, useState } from 'react'

const App = () => {

  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')

  const mainRef = useRef(null)
  
  


  const themeChanger=()=>{
    if(theme =='light'){
      setTheme('dark')
      localStorage.setItem('theme','dark')
    }
    else{
      setTheme('light')
      localStorage.setItem('theme','light')
    }

  }

  useEffect(function(){
    mainRef.current.setAttribute('id',theme)
  })
  
  return (
    <div 
    ref={mainRef}
    className='w-full h-screen flex justify-center items-center'> 
      <div className=' navbar px-6 py-4 flex justify-between  items-center fixed top-0 left-0 w-full text-2xl font-semibold'>
        <h1>My dream company</h1>
         <div className='flex gap-20'>
          <h1>About</h1>
          <h1>Contact</h1>
          <h1>Servies</h1>
          <h1 
           onClick={()=>{
            themeChanger()
                }}
          className='cursor-pointer'>Theme</h1>
         </div>
      </div>
      <h1 
     
      className='text-7xl font-bold'> My Dream company.Com</h1>
    </div>
  )
}

export default App