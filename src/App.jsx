import React, { useEffect, useRef, useState } from 'react'

const App = () => {


  const [theme, setTheme] = useState(localStorage.getItem('theme'));

  const mainRef = useRef(null)
  useEffect(function(){
    mainRef.current.setAttribute('id',theme);

    },[theme])

  const ThemeChanger=()=>{
      if(theme == 'light'){
        setTheme('dark');
        localStorage.setItem('theme','dark')
      }
      else{
        setTheme('light');
        localStorage.setItem('theme','light')
      }
      console.log(theme);
  }




  return (
    <div ref={mainRef} className='h-screen w-full text-white flex justify-center items-center'>

<div className='px-6 py-4  flex justify-between itmes-center w-full fixed top-0 left-0 text-2xl font-semibold '>
        <h1>Porfolio</h1>
        <div className=' flex gap-10'>
            <h1>About</h1>
            <h1>Services</h1>
            <h1>Contact</h1>
            <h1 onClick={()=>{
                ThemeChanger()
            }}
             className='cursor-pointer'
             >Theme</h1>
            </div> 


    </div>   
            <h1 className='text-7xl font-bold'>Porfolio</h1>
     </div>
  )
}

export default App