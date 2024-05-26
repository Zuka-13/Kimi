import { FunctionComponent } from "react";
import HeaderDesktop from "../components/HeaderDesktop";
import Button from "../components/Button"
import FooterDesktop from "../components/FooterDesktop";

const Login: FunctionComponent = () => {
  return (
    // Styling the background and the layout of the page using TailWindCSS
    <div className="w-full relative bg-darkslategray-200 flex flex-col items-center justify-center pt-0 px-0 pb-[50.3px] box-border gap-[50px] mix-blend-normal leading-[normal] tracking-[normal] mq450:gap-[31px] mq750:gap-[62px]">
      {/* Calling the header module */}
      <HeaderDesktop />
      <main className="w-[701.4px] flex flex-row items-center justify-center pt-[50px] px-[73px] box-border max-w-full lg:pl-9 lg:pr-9 lg:box-border">
        <section className="flex-1 flex flex-col items-center justify-center gap-[127.5px] max-w-full text-left text-54xl-7 text-black font-noto-serif lg:gap-[64px] mq450:gap-[16px] mq750:gap-[32px]">
          
        <div className="container flex flex-col mx-auto bg-white rounded-lg pt-12 my-5">
      <div className="flex justify-center w-full h-full my-auto xl:gap-14 lg:justify-normal md:gap-5 draggable">
        <div className="flex items-center justify-center w-full lg:p-12">
          <div className="flex items-center xl:p-10">
            <form className="flex flex-col w-full h-full pb-6 text-center bg-white rounded-3xl">
              <h3 className="mb-3 text-14xl font-extrabold text-dark-grey-900">Login</h3>
              
              <label htmlFor="email" className="mb-2 text-sm text-start text-grey-900">Email*</label>
              <input id="email" type="email" placeholder="mail@loopple.com" className="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-7 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl"/>
              <label htmlFor="password" className="mb-2 text-sm text-start text-grey-900">Password*</label>
              <input id="password" type="password" placeholder="Enter a password" className="flex items-center w-full px-5 py-4 mb-5 mr-2 text-sm font-medium outline-none focus:bg-grey-400 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl"/>
              <div className="flex flex-row justify-between mb-8">
                
                <a href="#" className="mr-4 text-sm font-medium text-purple-blue-500">Forget password?</a>
              </div>
              <button className="w-full px-6 py-5 mb-5 text-sm font-bold leading-none text-white transition duration-300 md:w-96 rounded-2xl hover:bg-purple-blue-600 focus:ring-4 focus:ring-purple-blue-100 bg-purple-blue-500">Sign In</button>
              <p className="text-sm leading-relaxed text-grey-900">Not registered yet? <a href="./Register" className="font-bold text-grey-700">Create an Account</a></p>
            </form>
          </div>
        </div>
      </div>
    </div>


        </section>
      </main>
      <FooterDesktop />
    </div>
  );
};

export default Login;
