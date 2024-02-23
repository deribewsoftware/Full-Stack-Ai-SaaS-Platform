import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="h-screen justify-center items-center">
      <UserButton  afterSignOutUrl="/"/>
    </div>
  );
}
