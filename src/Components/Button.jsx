import React from 'react'

const Button = ({label,iconUrl}) => {
  return (
    <button className='flex items-center justify-center gap-2 px-7 py-4 border font-palanquin text-lg leading-none bg-coral-red rounded-xl border-coral-red rotate-hover  '>
        {label}
        
        <img src={iconUrl}
        alt='btn'
        className='ml-2 rounded-full w-5 h-5'/>
    </button>
  )
}

export default Button