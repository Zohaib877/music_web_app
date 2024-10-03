import SocialLoginOptions from "@/components/Authentication/SocialLoginOptions";
import SubscriptionForm from "@/components/Subscription/subscriptionForm";
import AuthLayout from "@/containers/layout/AuthLayout";

const Subscription = () => {
  return (
    <AuthLayout>
      <div className="flex flex-1 mb-32">

        {/* right Content */}
        <div className="flex-1 flex justify-center lg:justify-center items-center">
          <div className="flex flex-col justify-center items-center max-w-md w-full mb-24">
            <SubscriptionForm />
            <SocialLoginOptions title={"You Don’t have Account"} buttonType={"login"} enableSocialButton={false} />
          </div>
        </div>
      </div>
    </AuthLayout>
  )
}

export default Subscription;