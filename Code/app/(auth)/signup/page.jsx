import { Animate, CircleAnimation, Zoom } from "@/components";
import { SignupForm } from "./SignUpForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

export const metadata = {
  title: "SignUp",
  description: "Discover How to SignUp",
};
const SignupPage = () => {
  return (
    <div className="relative px-[20px] py-[20px] w-screen min-h-screen md:h-screen bg-[#fff] lg:bg-[url('/images/main-bg-1.png')] bg-fill bg-no-repeat bg-center overflow-hidden">
      <div className="absolute text-white bottom-[4%] left-[2%]">
        <Link href="/" className="flex gap-[5px] items-end">
          <img src="/icons/home.png" alt="" className="w-[26px]" />
          <h2 className="text-[20px] leading-3">yourdomain.com</h2>
        </Link>
        <Animate>
          <h1 className="text-[34px] font-bold mt-2">Welcome to Your Domain</h1>
        </Animate>
        <Zoom>
          <img src="/images/line.png" alt="" />
        </Zoom>
      </div>
      <div className=" md:bg-[rgba(255,255,255,0.80)] lg:bg-white px-[20px] min-w-[250px] sm:w-[550px] md:w-[750px] mx-auto md:top-[50%] md:translate-y-[-50%] relative z-[50] rounded-[35px]  md:shadow-[0_4px_25px_0_rgb(0_0_0_/_10%)] py-[20px]  sm:px-[40px] md:px-[60px] md:py-[80px] transition-all">
        <div className="">
          <div className=" mb-[32px]">
            <h1 className="account_heading">
              Get started with easily register
            </h1>
            <p className="account_desc ">Free register and you can enjoy it</p>
          </div>
          <div>
            <SignupForm />
            <div className="mt-[10px] flex gap-[2px] items-center justify-center">
              <p className="text-primary-description">
                Already have an account? &nbsp;
              </p>
              <Link className="text-primary-red" href="/login">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>

      <CircleAnimation />
      <ToastContainer />
    </div>
  );
};

export default SignupPage;
