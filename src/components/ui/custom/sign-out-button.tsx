'use client'

import { singOutAction } from '@/lib/actions/auth-actions'


export default function SignOutButton() {
  return (
    <button className='p-3 border rounded-md hover:bg-gray-200 duration-500'
      onClick={() => singOutAction()}
    >
      Sign Out
    </button>
  )
}
