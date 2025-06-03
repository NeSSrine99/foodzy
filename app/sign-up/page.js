export async function generateMetadata() {
  return {
    title: "SignUp - Foodzy",
    description:
      "SignUp to your Foodzy account to start ordering fresh vegetables and fruits online.",
  };
}

import SignUpPage from "./SignUp";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-[80vh] py-[100px]">
      <SignUpPage />
    </div>
  );
}
