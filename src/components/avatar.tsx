import React from 'react'

export function Avatar ({ children }: {children: React.ReactNode}) {
  return (
    <figure className='w-[30px] h-[30px] flex items-center justify-center rounded-sm bg-gptlogo'>
      {children}
    </figure>
  )
}
