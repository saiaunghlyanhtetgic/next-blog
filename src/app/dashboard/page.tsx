'use client'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { AuthState} from "../../store/authSlice"
import { useRouter } from 'next/navigation'

export const dyanmic = 'force-dynamic'

const Dashboard = () => {
  const router = useRouter();
  const auth = useSelector((state : {auth: AuthState}) => state.auth)
  useEffect(() => {
    if(!auth.isAuthenticated) {
      router.push('/auth/sign-in')
    }

  }, [auth.isAuthenticated])
  return (
    <div>Dashboard <span>{auth.user?.email}</span></div>
  )
}

export default Dashboard