import SubscriptionOTPForm from "@/components/Subscription/subscriptionOTPForm";
import AuthLayout from "@/containers/layout/AuthLayout";

const SubscriptionOTP = () => {
  return (
    <AuthLayout>
      <div className="flex flex-1 mb-32">

        {/* right Content */}
        <div className="flex-1 flex justify-center lg:justify-center items-center">
          <div className="flex flex-col justify-center items-center max-w-md w-full ">
            <SubscriptionOTPForm />
          </div>
        </div>
      </div>
    </AuthLayout>
  )
}

export default SubscriptionOTP;