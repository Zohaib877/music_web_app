import LeftCard from "@/components/Authentication/leftCard";
import RegisterForm from "@/components/Authentication/RegisterForm";
import SocialLoginOptions from "@/components/Authentication/SocialLoginOptions";
import AuthLayout from "@/containers/layout/AuthLayout";

export default function Home() {
  return (
    <AuthLayout>
      <div className="flex flex-1 mb-32">
        {/* left Content */}
        <LeftCard />

        {/* right Content */}
        <div className="flex-1 flex justify-center lg:justify-start items-center">
          <div className="flex flex-col justify-center items-center max-w-md w-full px-11 lg:w-full md:w-full max-sm:mb-0 mb-20">
            <RegisterForm />
            <SocialLoginOptions title={'Already Have an Account?'} buttonType={'register'} enableSocialButton={true} />
          </div>
        </div>
      </div>
    </AuthLayout>
  )
}
