import { auth } from "@/auth";
import SignInButton from "@/components/ui/custom/sign-in-button";
import SignOutButton from "@/components/ui/custom/sign-out-button";

export default async function Home() {

  const session = await auth();

  if (session?.user) {
    return (
      <div className="flex flex-col flex-1 gap-5 items-center justify-center">
        <p>User signed in with name : {session.user.name}</p>
        <p>User signed in with email : {session.user.email}</p>
        <SignOutButton />
      </div>
    );
  }

  return (
    <div className="flex flex-col flex-1 gap-5 items-center justify-center">
      <p>User not signed In</p>
      <SignInButton provider="keycloak" />
      <SignInButton provider="github" />
    </div>
  );
}
