import nav from '../../assets/nav.png'
import home from '../../assets/home-button.png'
import about from '../../assets/about.png'
import contact from '../../assets/contacts.png'
import work from '../../assets/briefcase.png'
import { useEffect } from 'react'

const Nav = () => {
   
  useEffect(()=>{
    const fadeElement = document.querySelectorAll('.fadein')
    const observer = new IntersectionObserver(entries =>{
      entries.forEach(entry =>{
        if(entry.isIntersecting){
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    },{
      threshold:0.2
    })
    fadeElement.forEach(element =>{
      observer.observe(element)
    })
    return()=>observer.disconnect()
  },[])
    const showMenu = ():void=>{
     const id=document.querySelector('#nav') 
     id?.classList.toggle('show')
   }
  return (
    <div className=''>
        <div className='fixed flex justify-between bg-white  mt-5  shadow-md w-[100%]  p-4 md:hidden'>
          <img src={home} alt={'nav...'} width={30} className='h-7 cursor-pointer' onClick={()=>window.scrollTo({top:0, behavior:'smooth'})} /> 
          <img src={nav} alt={'nav...'}  width={30} className='h-8 cursor-pointer' onClick={showMenu} /> 
         </div>

          
        <section className= 'mt-21 p-4 hidden cursor-pointer bg-white-100  rounded-lg' id='nav'>
            <div className=' flex hover'  onClick={()=>window.scrollTo({top:400, behavior:'smooth'})} >
              <img src={about} alt={'nav...'} width={35} className='h-8 mr-2' /> 
              <p className='mt-1 text-gray-700 text-[1.1rem] mb-7'>About</p>
            </div>
            <div className=' flex hover'  onClick={()=>window.scrollTo({top:1200, behavior:'smooth'})}>
              <img src={work} alt={'nav...'} width={32} className='h-8 mr-2' />   
              <p className='mt-1 text-gray-700 text-[1.1rem] mb-7'>Experience</p>
            </div>
            <div className=' flex hover'  onClick={()=>window.scrollTo({top:2800, behavior:'smooth'})}>
              <img src={contact} alt={'nav...'} width={32} className='h-[2rem] mr-2' />   
              <p className='mt-1 text-gray-700 text-[1.1rem] mb-7'>Contact</p>
            </div>
           
             <a href='mailto:toshiro2002@gmial.com'><button className='bg-gray-800 text-gray-50 cursor-pointer rounded-md font-semibold p-[14px] hover:bg-gray-800 w-full '>Send Message</button></a>
        </section>

        

        <div className=' hidden md:flex justify-center  mt-[2rem]'>
           <div className=' fixed bg-[#ffffffe6] flex justify-around m-5 border-1 border-gray-400 p-[8px] w-[36rem] rounded-xl '>
             <img src={home} alt={'nav...'} width={35} className='h-8 mr-2 mt-2 '  onClick={()=>window.scrollTo({top:0, behavior:'smooth'})}/>
            <div><img src={about} alt={'nav...'} width={35} className='h-8 mr-2 mt-2'  onClick={()=>window.scrollTo({top:400, behavior:'smooth'})} /> </div>
             <div><img src={work} alt={'nav...'} width={40} className='h-8 mr-2 mt-2'  onClick={()=>window.scrollTo({top:1100, behavior:'smooth'})} /></div>
             <div ><img src={contact} alt={'nav...'} width={35} className='mt-[9px] h-8.5 mr-3'   onClick={()=>window.scrollTo({top:2800, behavior:'smooth'})}/></div>
              <a href='mailto:toshiro2002@gmial.com'><button className='bg-gray-700 cursor-pointer rounded-lg px-3 py-[13px] w-40  text-[1.1rem] font-bold ring-1 ring-gray-900 text-gray-50'>Send  message</button></a>
           </div> 
        </div>
    </div>
  )
}

export default Nav
