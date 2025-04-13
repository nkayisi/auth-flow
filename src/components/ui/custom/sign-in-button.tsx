'use client'

import { singInAction } from '@/lib/actions/auth-actions'
import { Button } from '@heroui/button'

export default function SignInButton({ provider }: { provider: 'github' | 'keycloak' }) {
  return (
    <Button 
      color="primary" 
      variant="solid"
      radius="md"
      onPress={() => singInAction(provider)}
    >
      Sign In With {provider}
    </Button>
  )
}
