import { FunctionComponent } from "react";
import HeaderDesktop from "../components/HeaderDesktop";
import FooterDesktop from "../components/FooterDesktop";

const Register: FunctionComponent = () => {
  return (
    // Styling the background and the layout of the page using TailWindCSS
    <div className="w-full relative bg-darkslategray-200 flex flex-col items-start justify-start pt-0 px-0 pb-[50.3px] box-border gap-[50px] mix-blend-normal leading-[normal] tracking-[normal] mq450:gap-[31px] mq750:gap-[62px]">
      {/* Calling the header module */}
      <HeaderDesktop />
      <main className="w-[1401.4px] flex flex-row items-start justify-start pt-[120px] px-[73px] box-border max-w-full lg:pl-9 lg:pr-9 lg:box-border">
        <section className="flex-1 flex flex-col items-end justify-start gap-[127.5px] max-w-full text-left text-54xl-7 text-black font-noto-serif lg:gap-[64px] mq450:gap-[16px] mq750:gap-[32px]">
          <div className="bg-gray-200 min-h-screen flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
              <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                <input
                  type="text"
                  className="block border border-gray-300 w-full p-3 rounded mb-4"
                  name="first_name"
                  placeholder="First Name"
                />
                <input
                  type="text"
                  className="block border border-gray-300 w-full p-3 rounded mb-4"
                  name="last_name"
                  placeholder="Last Name"
                />
                <input
                  type="text"
                  className="block border border-gray-300 w-full p-3 rounded mb-4"
                  name="email"
                  placeholder="Email"
                />
                <input
                  type="password"
                  className="block border border-gray-300 w-full p-3 rounded mb-4"
                  name="password"
                  placeholder="Password"
                />
                <input
                  type="password"
                  className="block border border-gray-300 w-full p-3 rounded mb-4"
                  name="confirm_password"
                  placeholder="Confirm Password"
                />
                <div className="flex items-center mb-4">
                  <input
                    type="checkbox"
                    className="mr-2"
                    name="age_confirmation"
                    id="age_confirmation"
                  />
                  <label htmlFor="age_confirmation" className="text-gray-600">
                    I confirm that I am at least 18 years old
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-700 focus:outline-none my-1"
                >
                  Create Account
                </button>
                <div className="text-center text-sm text-gray-600 mt-4">
                  By signing up, you agree to the
                  <a
                    className="no-underline border-b border-gray-600 text-gray-600"
                    href="#"
                  >
                    Terms of Service
                  </a>{' '}
                  and
                  <a
                    className="no-underline border-b border-gray-600 text-gray-600"
                    href="#"
                  >
                    Privacy Policy
                  </a>
                </div>
              </div>
              <div className="text-gray-600 mt-6">
                Already have an account?
                <a
                  className="no-underline border-b border-blue-500 text-blue-500"
                  href="../login/"
                >
                  Log in
                </a>
                .
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterDesktop />
    </div>
  );
};

export default Register;
