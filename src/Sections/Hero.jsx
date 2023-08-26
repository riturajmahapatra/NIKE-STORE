import React from 'react'
import Button from '../Components/Button'
import {arrowRight} from '../assets/icons'
import {statistics} from '../constants'
import './style.css'

const Hero = () => {
  return (
    <div>
      <section id='home' className='flex flex-col 
      justif-center min-h-screen xl:flex-row p-2 w-full  gap-10 max-container'>
        <div className="xl:w-4/5 flex flex-col justify-center items-start w-full max-xl:padding-x p-28">
          <p className='text-xl font-palanquin text-coral-red mb-2'>Our Summer Colection</p>
          <h1 className='text-8xl my-8 max-sm:text-[72px] font-medium'>
            <span className='xl:bg-[#ffd9d9] xl:px-3 '>
            The New Arrival
             </span>
              <br />
              <span className=' italic text-coral-red'>Nike </span>
              Shoes
          </h1>
            <p className='text-[1.2rem] my-2 mb-12'>This is Nike you felt it you picked it. <span className='italic text-coral-red font-semibold'>
            Just Do It
              </span>.</p>
              <Button label='Shop now' 
              iconUrl={arrowRight}>
              </Button>
              <div className="flex justify-start items-start flex-wrap border border-blue-100 h-50 w-full mt-20 gap-10">
                {statistics.map((stat,index)=>(
                  <div  key={index} className="">
                    <p className='font-bold font-palanquin text-3xl'>{stat.value}</p>
                    <p className='text-md '>{stat.label}</p>
                  </div>
                ))}
              </div>
              
        </div>
        
      </section>
    </div>
  )
}

export default Hero