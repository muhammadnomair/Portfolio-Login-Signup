import {
  Animate,
  Button,
  CircleAnimation,
  Zoom,
} from "@/components";
import Link from "next/link";

export const metadata = {
  title: "Get Started",
  description: "Discover Your Dream Home",
};

const GetStart = () => {
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
      <div className=" md:bg-[#ffffff] px-[20px] min-w-[250px] sm:w-[550px] md:w-[550px] mx-auto md:top-[50%] md:translate-y-[-50%] relative z-[50] rounded-[35px]  md:shadow-[0_4px_25px_0_rgb(0_0_0_/_10%)] py-[20px]  sm:px-[40px] md:px-[60px] md:py-[80px] transition-all">
        <div className="text-center">
          <div className="text-center mb-[32px]">
            <h1 className="account_heading">Get Started</h1>
            <p className="account_desc">
              Choose Your Option to get Login or Sign up
            </p>
          </div>
          <img
            src="/images/get-start.png"
            alt=""
            className="w-[45%] mx-auto mb-[42px]"
          />
          <div className="xs:grid xs:grid-cols-2  justify-center items-center gap-[8px] mb-[12px] xs:mb-[26px] ">
            <Link href="/login">
              <Button
                type="button"
                text="Login"
                className="mb-[8px] md:mb-[unset]"
              />
            </Link>
            <Link href="/signup">
              <Button type="button" text="Sign Up" />
            </Link>
          </div>

        </div>
      </div>

      <CircleAnimation />
    </div>
  );
};

export default GetStart;
