import { FunctionComponent } from "react";
import HeaderDesktop from "../components/HeaderDesktop";
import FooterDesktop from "../components/FooterDesktop";

const Contact: FunctionComponent = () => {
  return (
    // Styling the background and the layout of the page using TailWindCSS
    <div className="w-full relative bg-darkslategray-200 flex flex-col items-start justify-start pt-0 px-0 pb-[50.3px] box-border gap-[50px] mix-blend-normal leading-[normal] tracking-[normal] mq450:gap-[31px] mq750:gap-[62px]">
      {/* Calling the header module */}
      <HeaderDesktop />
      <main className="w-[1401.4px] flex flex-row items-start justify-start pt-[120px] px-[73px] box-border max-w-full lg:pl-9 lg:pr-9 lg:box-border">
        <section className="flex-1 flex flex-col items-end justify-start gap-[127.5px] max-w-full text-left text-54xl-7 text-black font-noto-serif lg:gap-[64px] mq450:gap-[16px] mq750:gap-[32px]">
          
        </section>
      </main>
      <FooterDesktop />
    </div>
  );
};

export default Contact;
