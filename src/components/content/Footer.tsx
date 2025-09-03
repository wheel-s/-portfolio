
import github from '../../assets/github.png'
import social from '../../assets/social.png'
import reddit from '../../assets/reddit.png'
import { NavLink } from 'react-router-dom'

const Footer = () => {

  return (
    <div className='m-6'>
      
     <section >
         <hr className='fadein mt-15 mb-2 text-stone-500'/>
        <h1 className='fadein text-[1.33rem] font-[Lora] font-bold'>Get In Touch</h1>
         <hr className='mt-3 mb-4 text-stone-500'/>
        <div className=''>
          <div>
          <p className='fadein text-stone-700 text-[.9rem] font-[350] font-[lora] '>
            I am seeking oppurtunities where I can apply my skill set to tackle
            challenging project. I am available to work on projects that solve real world problems. 
          </p>
          
          </div>
          <div className=' flex mt-3 p-2 cursor-pointer'>
         
          <NavLink to={'https://github.com/wheel-s'} target='blank'><img src={github} width={42} className='mr-4 bg-gray-100 rounded-md p-1 '/></NavLink>
          <NavLink to={'https://www.linkedin.com/in/ezra-george-0b5b062b3'} target='blank'> <img src={social} width={45} className='mr-4  bg-gray-100 rounded-md p-1'/></NavLink>
          <NavLink to={'https://reddit.com/u/toshiro_01'} target='blank'><img src={reddit} width={45} className=' bg-gray-100 rounded-md p-1'/></NavLink>
          
        
          </div>
         <a href='mailto:toshiro2002@gmial.com'><button className='fadein bg-gray-700 cursor-pointer rounded-lg  py-[8px] w-50  text-[1.1rem] font-semibold ring-1 ring-gray-900 text-gray-50'>Send  Message</button></a>     
        </div>
      </section>
      <p className='fadein rounded-md relative top-8 text-[.9rem] font-[lora] font-[500] text-center'> Copyright © 2025</p>
    </div>
  )
}

export default Footer
