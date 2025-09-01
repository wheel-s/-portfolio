import moon from '../../assets/girl.jpg'

const Skills = () => {



  return (
    <div className='grid justify-center'>


     <section className=' mt-19 m-5 rounded-md'>
        <div className='flex'>
 
           <div className='grid justify-center w-full'>
              <hr className='mt-15 mb-1 text-stone-500 '/>
               <h1 className='fadein font-semibold font-[Oswald] text-[3.5rem] tracking-[-.1rem]'>Hello<span className='text-orange-600'>!</span></h1>

              <img src={moon} width={120} className='fadein rounded-md m-4'/>
              <p className='fadein text-stone-700 text-[.9rem] font-[lora] font-[350]'> 
                My name is George Ezra. But people call me Hephzibah. 
                I am a Fullstack-developer based in Nigeria. I have been working as a freelance developer
                for about 3 years. I love  music, art and visual things.  I usually work on projects like web design,
                web development database development, mobile development. I am passionate about pushing the boundries
                of design, development and exploring new skills.
              </p>
         
          
           </div>
           

        </div>
     </section>

    </div>
  )
}

export default Skills
