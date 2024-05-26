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
        <div className="gradient-form h-full bg-neutral-200 dark:bg-neutral-700">
      <div className="container h-full p-10">
        <div className="flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full">
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
              <div className="g-0 lg:flex lg:flex-wrap">
                {/* Left column container */}
                <div className="px-4 md:px-0 lg:w-6/12">
                  <div className="md:mx-6 md:p-12">
                    {/* Logo */}
                    <div className="text-center">
                      <img
                        className="mx-auto w-48"
                        src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                        alt="logo"
                      />
                      <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                        We are The Lotus Team
                      </h4>
                    </div>

                    <form>
                      <p className="mb-4">Please register an account</p>
                      {/* Username input */}
                      <div className="relative mb-4">
                        <input
                          type="text"
                          className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary dark:text-white dark:placeholder:text-neutral-300"
                          id="exampleFormControlInput1"
                          placeholder="Username"
                        />
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary dark:text-neutral-400"
                        >
                          Email address
                        </label>
                      </div>

                      {/* Password input */}
                      <div className="relative mb-4">
                        <input
                          type="password"
                          className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary dark:text-white dark:placeholder:text-neutral-300"
                          id="exampleFormControlInput11"
                          placeholder="Password"
                        />
                        <label
                          htmlFor="exampleFormControlInput11"
                          className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary dark:text-neutral-400"
                        >
                          Password
                        </label>
                      </div>

                      {/* Submit button */}
                      <div className="mb-12 pb-1 pt-1 text-center">
                        <button
                          className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-lg transition duration-150 ease-in-out focus:outline-none focus:ring-0 active:shadow-lg"
                          type="button"
                          style={{
                            background: 'linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)',
                          }}
                        >
                          Sign up
                        </button>

                        {/* Forgot password link */}
                        <a href="#!">Terms and conditions</a>
                      </div>

                      {/* Register button */}
                      <div className="flex items-center justify-between pb-6">
                        <p className="mb-0">Have an account?</p>
                        <button
                          type="button"
                          className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out focus:outline-none focus:ring-0 active:text-danger-700"
                        >
                          Login
                        </button>
                      </div>
                    </form>
                  </div>
                </div>

                {/* Right column container with background and description */}
                <div
                  className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-e-lg lg:rounded-bl-none"
                  style={{ background: 'linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)' }}
                >
                  <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                    <h4 className="mb-6 text-xl font-semibold">
                      We are more than just a company
                    </h4>
                    <p className="text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipisicing
                      elit, sed do eiusmod tempor incididunt ut labore et
                      dolore magna aliqua. Ut enim ad minim veniam, quis
                      nostrud exercitation ullamco laboris nisi ut aliquip ex
                      ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
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

export default Register;
