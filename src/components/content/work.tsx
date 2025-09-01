import { NavLink } from 'react-router-dom'
import project1 from '../../assets/img.png'
import link from '../../assets/arrow.png'
import verizon from '../../assets/Screenshot (75).png'
import spring from '../../assets/spring.png'
import design from '../../assets/logo.png'
import web from '../../assets/web-programming.png'
import db from '../../assets/database-storage.png'
import mobile from '../../assets/mobile-phone.png'
import python from '../../assets/python (1).png'
import java from '../../assets/java-logo.png'
import js from '../../assets/javascript.png'
import ts from '../../assets/typescript.png'
import node from '../../assets/node-js.png'
import react from '../../assets/physics.png'
import css from '../../assets/css-3.png'
import scss from '../../assets/sass (1).png'

const Work = () => {


  return (
    <div className="m-5"> 
    
        
     <section className=' mt-10  ring-stone-400  rounded-md  '>
        <hr className='mt-10 mb-2 text-stone-500 fadein'/>
        <h1 className='text-[1.4rem] font-[Lora] font-bold fadein'>What I Do</h1>
         <hr className='mt-3 text-stone-500'/>
  
        <div className='grid justify-center'>
        <article className='md:flex mt-7  md:mb-3 '>
            <div className=' fadein  m-5 ring-1 ring-stone-200  shadow-lg p-3 rounded-md w-[21rem] mt-5 md:w-[22rem]'>
                <img src={design} alt='img' width={40} className=' mr-3 rounded-md'/>
              <h3 className=' font-semibold mt-3 text-[.85rem] font-[lora]'> Creative Design</h3>
              <p className=' text-stone-700 text-[.8rem] mt-3 font-[380]'>Design websites and mobile applications. </p>
            </div>
            <div className='fadein m-5  ring-1 ring-stone-300 p-3  shadow-lg rounded-md w-[21rem] mt-5 md:w-[22rem]'>
                <img src={web} alt='img' width={35} className=' mr-3 rounded-md'/>
              <h3 className=' text-stone-700 mt-3  text-[.85rem] font-semibold font-[lora]'> Web Development</h3>
              <p className='text-[.8rem] mt-3 font-[380]'>Build responsive modern user interface, with React and TypeScript.</p>
            </div>
          </article>
          <article className='md:flex '>
            <div className='fadein max-sm:mt-2  m-5 ring-1 ring-stone-300  shadow-lg p-3 rounded-md w-[21rem] mt-5 md:w-[22rem]'>
                 <img src={db} alt='img' width={40} className=' mr-3 rounded-md'/>
              <h3 className='mt-3  text-[.85rem] font-semibold font-[lora]'>Database Development</h3>
              <p className=' text-stone-700 text-[.8rem] mt-3  font-[380]'>Design and impelement REST APIs and data driven-applications using python(DJango, Flask, and Fat-APIs) Node.js, Express.js, Java(SpringBoot).</p>
            </div>
              <div className='fadein grid justify-center m-5 ring-1 ring-stone-300 shadow-lg p-3 rounded-md w-[21rem] mt-5 md:w-[22rem]'>
                <img src={mobile} alt='img' width={40} className=' mr-3 rounded-md'/>
              <h3 className='mt-3 font-semibold text-[.85rem] font-[lora]'>Mobile Development</h3>
              <p className='text-stone-700 text-[.8rem] mt-3 font-[380] '>It is a long established fact that a reader will be distracted by the readable content o a page when looking at its layout.</p>
            </div>
        </article>
        </div> 
          
      </section>


      <section className=''>
         <hr className='mt-12 mb-2 text-stone-500 fadein'/>
        <h1 className='fadein text-[1.4rem] font-[Lora] font-bold'>Experience</h1>
         <hr className='mt-3 text-stone-500'/>
        
        <div className='flex mt-7  '>
          <div className='fadein'>
           
            <p className='ring-1 rounded-full h-[.7em] 400 px-[1px] py-[1px] w-[.7em]'></p>
            <hr className=' ml-[-1.5rem] mt-7.5 w-15  rotate-90 mb-10'/>
            <p className='ring-1 mt-[-.6rem] rounded-full h-[.7em] 400 px-[1px] py-[1px] w-[.7em]'></p>
            <hr className=' ml-[-1.5rem] mt-7.5 w-15 rotate-90 mb-10'/>
             <p className='ring-1 mt-[-.6rem] rounded-full h-[.7em] 400 px-[1px] py-[1px] w-[.7em]'></p>
            
            
          </div>
          <div className='font-[290] font-[oswald]'>
            <div className='mb-3 fadein'>
              <span className='text-[.7rem] font-[inter]'>2021-present</span>
               <p className='text-[1.1rem]'>Freelance</p>
               <p className='text-[.7rem] font-[inter]'>Web Developer</p>
            </div>
              <div className='fadein mb-3'>
              <span className='text-[.7rem] '>2022-2024</span>
               <p className='text-[1.14rem]'>Nitda</p>
               <p className='text-[.7rem] font-[inter]'>Junior Developer</p>
            </div>
           
        
          </div>
        </div>
     
      </section>

       <section>
        <hr className='mt-15 mb-2 text-stone-500 fadein'/>
        <h1 className='fadein font-[Lora] text-[1.2rem] font-bold'>PROJECTS</h1>
        <hr className='mt-3 text-stone-500'/>
        <div className='grid justify-center mt-4 xl:flex xl:justify-around'>
        <div className=' fadein text-stone-700  font-[oswald] font-light'>
          <div className=' ring-1 ring-stone-500 p-3 rounded-md w-80 mt-8'>
            <img src={project1} alt='img' width={300} className=' mr-3 rounded-sm'/>
          </div>
        <NavLink to={'https://www.github.com/wheel-s/task-manager'} target='blank'><p className='mt-[.7rem]  underline' >Github Link   <img src={link} alt='img' width={23} className='rounded-sm mt-[-1.3rem] ml-15 rotate-45'/></p></NavLink>  

        </div>
          
        <div className='fadein font-[oswald] font-light'>
          <div className='ring-1 ring-stone-500 p-3 rounded-md w-80 mt-8'>
            <img src={verizon} alt='img' width={300} className=' mr-3 rounded-sm'/>
          </div>
          <NavLink to={'https://www.github.com/wheel-s/verizon'} target='blank' ><p className='mt-[.7rem]  underline' >Github Link   <img src={link} alt='img' width={23} className='rounded-sm mt-[-1.3rem] ml-15 rotate-45'/></p></NavLink>
          
        </div>
        <div className='fadein font-[oswald] font-light'>
          <div className=' ring-1 ring-stone-500 p-3 rounded-md w-75 mt-8'>
            <img src={spring} alt='img' width={280} className=' mr-3 rounded-sm'/>
          </div>
          
         <NavLink to={'https://www.github.com/wheel-s/shopify'} target='blank'> <p className='mt-[.7rem]  underline'> Github Link <img src={link} alt='img' width={23} className='rounded-sm mt-[-1.3rem] ml-15 rotate-45'/></p></NavLink>
        </div>

        </div>
        
      
      </section>

<div className=' mt-15 grid justify-center'>
      
     <section className=' grid justify-center ring-1 shadow-lg ring-stone-300 p-3 rounded-md w-90 mt-5 md:w-150'>
          <div>
            <h1 className=' text-[1.2rem] mb-4 text-center font-bold font-[Lora]'>Software Skills</h1>
            <hr className='mb-4 '/>
            <div className='md:flex justify-around mb-4 max-md:ml-4'>
              <div className='flex md:h-10 md:mt-5'>
             <img src={python} width={40} className='mr-9 fadein'/>
             <img src={java} width={40} className='fadein mr-8'/>
             <img src={js} width={40} className=' fadein rounded-md mr-8'/>
             <img src={ts} width={40} className=' fadein rounded-md  mr-8'/>
              </div>

            <div className='flex mt-4'>
              <img src={react} width={40} className='fadein rounded-md mr-8 '/>
             <img src={css} width={40} className=' fadein rounded-md mr-8'/>
             <img src={scss} width={40} className='fadein rounded-md mr-8'/>
             <img src={node} width={40} className='fadein ml-'/>
            </div>
           
              
            </div>
          </div>
      </section>
</div>

    
    </div>
  )
}

export default Work
