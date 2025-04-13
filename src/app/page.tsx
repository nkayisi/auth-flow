import { auth } from "@/auth";
import SignInButton from "@/components/ui/custom/sign-in-button";
import SignOutButton from "@/components/ui/custom/sign-out-button";
// import { Card } from "@heroui/react";

export default async function Home() {
  const session = await auth();

  if (session?.user) {
    return (
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Welcome back!</h1>
          <div className="flex flex-col gap-3 mb-6">
            <p className="text-lg">
              User: <span className="font-semibold">{session.user.name}</span>
            </p>
            <p className="text-lg">
              Email: <span className="font-semibold">{session.user.email}</span>
            </p>
          </div>
          <div className="mt-6">
            <SignOutButton />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-6">Welcome to Auth Flow</h1>
        <p className="mb-8">Please sign in to continue</p>
        <div className="flex flex-col gap-3">
          <SignInButton provider="keycloak" />
          <SignInButton provider="github" />
        </div>
      </div>
    </div>
  );
}
