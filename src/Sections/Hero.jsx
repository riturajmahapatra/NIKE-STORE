import React from 'react'
import Button from '../Components/Button'
import {arrowRight} from '../assets/icons'
import {statistics} from '../constants'
import './style.css'
import { bigShoe1 } from '../assets/images'

const Hero = () => {
  return (
    <div>
      <section id='home' className='flex flex-col 
      justif-center min-h-screen xl:flex-row p-2 w-full  gap-10 max-container'>
        <div className="xl:w-3/5 border border-red flex flex-col justify-center items-start w-full max-xl:padding-x p-20">
          <p className='text-xl font-palanquin text-coral-red mb-2'>Our Summer Colection</p>
          <h1 className='text-[5rem] my-8 max-sm:text-[72px] font-medium'>
            <span className='xl:bg-[#ffd9d9] xl:px-6 xl:text-[5.22rem]'>
            The New Arrival
             </span>
              <br />
              <span className=' italic text-coral-red'>Nike </span>
              Shoes
          </h1>
            <p className='text-[1.2rem] my-2 mb-12 text-slate-gray'>This is Nike you felt it you picked it. <span className='italic text-coral-red font-semibold'>
            Just Do It
              </span>.</p>
              <Button label='Shop now' 
              iconUrl={arrowRight}>
              </Button>
              <div className="flex justify-start items-start flex-wrap border border-blue-100 h-50 w-full mt-20 gap-10">
                {statistics.map((stat,index)=>(
                  <div  key={index} className="">
                    <p className='font-bold font-palanquin text-[2.5rem]'>{stat.value}</p>
                    <p className='text-md '>{stat.label}</p>
                  </div>
                ))}
              </div>
              
        </div>
        <div className="relative flex justify-center flex-1 items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
          <img src={bigShoe1} alt="big show"
          width={400}
          height={500} 
          className='object-contain relative z-10 '/>
        </div>
        
      </section>
    </div>
  )
}

export default Hero