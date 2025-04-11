import { auth } from '@/auth';
import { Button } from '@heroui/button';

export default async function DashboardPage() {

  const session = await auth();

  return (
    <div className="flex flex-col flex-1 gap-5 border-4 border-red-500">
      {/* <p>Access : {session?.accessToken}</p>
      <p>Refresh : {session?.refreshToken}</p> */}
      <Button>Test button</Button>
    </div>
  )
}
