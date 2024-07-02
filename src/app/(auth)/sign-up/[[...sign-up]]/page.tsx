import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="h-[100vh] w-[100vw] flex justify-center items-center">
      <SignUp />
    </div>
  );
}
