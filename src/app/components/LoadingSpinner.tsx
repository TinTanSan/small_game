import React from 'react'

export default function LoadingSpinner() {
  return (
    <div className='flex absolute rounded-full w-10 h-10 bg-gradient-to-bl from-white from-25% to-150% to-black justify-center items-center animate-spin'>
        <div className='flex absolute rounded-full w-8 h-8 bg-white' />
    </div>
  )
}
