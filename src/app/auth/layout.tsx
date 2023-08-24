import { ChildrenProps } from '@/Types/ChildrenProps'
import React from 'react'

const AuthLayout = ({children} : ChildrenProps) => {
  return (
    <div className='flex h-screen justify-center items-center'>
        {children}
    </div>
  )
}

export default AuthLayout