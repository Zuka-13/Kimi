import { FunctionComponent } from "react";
import HeaderDesktop from "../components/HeaderDesktop";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

const Contact: FunctionComponent = () => {
  return (
    // Styling the background and the layout of the page using TailWindCSS
    <div className="w-full relative bg-darkslategray-200 flex flex-col items-start justify-start pt-0 px-0 pb-[50.3px] box-border gap-[50px] mix-blend-normal leading-[normal] tracking-[normal] mq450:gap-[31px] mq750:gap-[62px]">
      {/* Calling the header module */}
      <HeaderDesktop />
      <main className="w-[1401.4px] flex flex-row items-start justify-start pt-[120px] px-[73px] box-border max-w-full lg:pl-9 lg:pr-9 lg:box-border">
        <section className="flex-1 flex flex-col items-end justify-start gap-[127.5px] max-w-full text-left text-54xl-7 text-black font-noto-serif lg:gap-[64px] mq450:gap-[16px] mq750:gap-[32px]">
          <div className="w-[990.8px] flex flex-row items-start justify-end py-0 pr-[59.4px] pl-[59px] box-border max-w-full mq1050:pl-[29px] mq1050:pr-[29px] mq1050:box-border">
            <div className="flex-1 bg-white flex flex-row items-start justify-end py-[21px] px-[69px] box-border relative min-h-[309px] max-w-full mq750:pl-[34px] mq750:pr-[34px] mq750:box-border">
              <img
                className="h-[309px] w-[872px] relative hidden max-w-full z-[0]"
                alt=""
                src="/hero-section.svg"
              />
              <div className="w-[417px] relative tracking-[-1px] leading-[90px] font-black flex items-center shrink-0 max-w-full z-[1] mq1050:text-40xl mq1050:leading-[72px] mq450:text-25xl mq450:leading-[54px]">
                CONTACT US
              </div>
              <img
                className="h-[349px] w-[602px] absolute !m-[0] top-[-108px] left-[-254px] object-cover z-[1]"
                loading="lazy"
                alt=""
                src="/londontrafficredlondoncarwallpaperpreview-1@2x.png"
              />
            </div>
          </div>
          
          {/* Calling contact form */}
          <ContactForm />

          <div className="self-stretch h-[798px] relative text-[48px] text-white">
            <div className="absolute top-[793px] left-[365px] bg-orange-400 w-[872px] h-[5px] mix-blend-normal" />
            <h1 className="m-0 absolute top-[202px] left-[0px] text-inherit tracking-[-1px] leading-[90px] font-black font-inherit flex items-center w-[347px] mq1050:text-[38px] mq1050:leading-[72px] mq450:text-10xl mq450:leading-[54px]">
              Check out if we’re in your neighborhood
            </h1>
            <img
              className="absolute top-[0px] left-[372px] w-[883.4px] h-[749.7px] object-contain"
              loading="lazy"
              alt=""
              src="/googlemapta-1@2x.png"
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
