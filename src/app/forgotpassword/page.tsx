import ForgotForm from "@/components/Authentication/ForgotForm";
import SocialLoginOptions from "@/components/Authentication/SocialLoginOptions";
import AuthLayout from "@/containers/layout/AuthLayout";

export default function Home() {
  return (
    <AuthLayout>
      <div className="flex flex-1">

        {/* right Content */}
        <div className="flex-1 flex justify-center lg:justify-center items-center">
          <div className="flex flex-col justify-center items-center max-w-md w-full px-11 lg:w-full md:w-full mb-20">
            <ForgotForm />
            {/* <SocialLoginOptions title={"You Don’t have Account"} buttonType={"login"} enableSocialButton={false} /> */}
          </div>
        </div>
      </div>
    </AuthLayout>
  )
}
