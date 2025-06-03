export async function generateMetadata() {
  return {
    title: "Login - Foodzy",
    description:
      "Log in to your Foodzy account to start ordering fresh vegetables and fruits online.",
  };
}

import LoginForm from "./LoginForm";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-[80vh] py-[100px]">
      <LoginForm />
    </div>
  );
}
