import LeftCard from "@/components/Authentication/leftCard";
import LoginForm from "@/components/Authentication/LoginForm";
import SocialLoginOptions from "@/components/Authentication/SocialLoginOptions";
import AuthLayout from "@/containers/layout/AuthLayout";

export default function Home() {
  return (
    <AuthLayout>
      <div className="flex flex-1 content-center">
        <LeftCard />

        <div className="flex-1 flex justify-center lg:justify-start items-center">
          <div className="flex flex-col justify-center items-center max-w-md w-full px-11 lg:w-full md:w-full mb-20">
            <LoginForm />
            {/* <SocialLoginOptions title={"Don't have an account?"} buttonType={"login"} enableSocialButton={true} /> */}
          </div>
        </div>
      </div>
    </AuthLayout>
  )
}
