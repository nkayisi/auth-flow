'use client'

import { singInAction } from '@/lib/actions/auth-actions'


export default function SignInButton({ provider }: { provider: 'github' | 'keycloak' }) {
  return (
    <button className='p-2 border rounded-md hover:bg-gray-200 duration-500' 
      onClick={() => singInAction(provider)}
    >
      Sign In With {provider}
    </button>
  )
}
