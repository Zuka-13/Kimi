import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent7 from "../components/FrameComponent7";
import SubheroSection from "../components/SubheroSection";
import FrameComponent6 from "../components/FrameComponent6";
import Footer1 from "../components/Footer1";
import HeaderDesktop from "../components/HeaderDesktop";

const About: FunctionComponent = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onDestinationsTextClick = useCallback(() => {
    navigate("/destinations");
  }, [navigate]);

  const onAboutTextClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  const onContactTextClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  const onLinkSeoPages1uv25j8ButtonClick = useCallback(() => {
    navigate("/destinations");
  }, [navigate]);

  const onLinkSeoPages1uv25j8Button1Click = useCallback(() => {
    navigate("/rent-your-car");
  }, [navigate]);

  return (
    <div className="w-full relative bg-darkslategray-200 flex flex-col items-end justify-start pt-0 px-0 pb-[21.3px] box-border gap-[99px] mix-blend-normal leading-[normal] tracking-[normal] mq450:gap-[25px] mq925:gap-[49px]">
      <HeaderDesktop />
      <section className="self-stretch flex flex-col items-end justify-start pt-0 px-0 pb-[14.5px] box-border gap-[84px] max-w-full text-left text-base-4 text-white font-inter mq450:gap-[21px] mq925:gap-[42px]">
        <div className="w-[1254px] flex flex-row items-start justify-center pt-0 px-5 pb-[18.5px] box-border max-w-full text-left text-54xl-7 text-gray-300 font-noto-serif">
      {/* Header image */}
      <div className="w-[872px] flex flex-row items-start justify-start relative max-w-full">
        <img
          className="h-[326px] w-[588px] absolute !m-[0] top-[-65px] left-[-177px] object-cover z-[1]"
          loading="lazy"
          alt=""
          src="/picture-kimi-about-us@2x.png"
        />
        {/* Header white box */}
        <div className="flex-1 bg-white flex flex-col items-center justify-start pt-6 pb-[42px] pr-5 pl-[328px] box-border gap-[15px] max-w-full mq450:pl-5 mq450:box-border mq700:pl-[164px] mq700:box-borde">
          <img
            className="w-[872px] h-[309px] relative hidden max-w-full"
            alt=""
            src="/hero-section.svg"
          />
          {/* Header title text */}
          <div className="w-[324px] flex flex-row items-start justify-start py-0 px-2 box-border max-w-full">
            <div className="flex-1 relative tracking-[-1px] leading-[90px] font-black z-[1] mq450:text-25xl mq450:leading-[54px] mq925:text-40xl mq925:leading-[72px]">
              ABOUT KIMI
            </div>
          </div>
          {/* Header paragraph text */}
          <div className="w-[324px] h-12 relative max-w-full text-base-4 text-black font-inter">
            <div className="absolute top-[10px] left-[0px] bg-orange-400 w-[316px] h-8 mix-blend-normal z-[1]" />
            <div className="absolute top-[0px] left-[9px] leading-[24px] whitespace-pre-wrap flex items-center w-[315px] z-[2]">
              Take a look under the hood of the hood of the world’s best car
              sharing marketplace
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Subheader title */}
        <div className="w-[1397px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <div className="flex flex-col items-start justify-start gap-[12px] max-w-full">
            <div className="flex flex-col items-start justify-start max-w-full">
              <div className="w-[414px] flex flex-col items-start justify-start pt-0 px-0 pb-1.5 box-border gap-[6.5px] max-w-full text-22xl-6 font-noto-serif">
                <div className="relative tracking-[-0.5px] leading-[56px] font-black inline-block max-w-full mq450:text-6xl mq450:leading-[34px] mq925:text-14xl mq925:leading-[45px]">
                  Find your drive
                </div>
                <div className="self-stretch h-1 relative bg-orange-400 mix-blend-normal" />
              </div>
              {/* Subeader paragraph */}
              <div className="relative leading-[24px] inline-block max-w-full">
                Kimi is the world’s best car sharing marketplace, where you can book the perfect car for <br />
                wherever you’re going from a vibrant community of trusted hosts across the US, UK, Canada,<br />
                Australia, and France. Flying in from afar or looking for a car down the street, searching for a<br />
                rugged truck or something smooth and swanky, you can skip the rental car counter and<br />
                choose from an extraordinary, totally unique selection of nearby vehicles shared by local<br />
                hosts. Entrepreneurs can take the wheel of their futures by becoming hosts and building car<br />
                sharing businesses on Kimi, leveraging our established platform to scale their businesses to <br />
                meet their goals.
                 </div>
              
              <div className="relative leading-[24px] inline-block min-w-[123px] z-[7]">
              </div>
            </div>
            <div className="flex flex-col items-start justify-start max-w-full">
              <div className="relative leading-[24px] inline-block max-w-full">With an unwavering mission of putting the world’s cars to better use, Kimi unlocks 
              </div>

              <div className="relative leading-[24px] inline-block min-w-[36px]">
                seat.
              </div>
            </div>
          </div>
        </div>
        <SubheroSection />
      </section>
      <FrameComponent6 />
      <Footer1 />
    </div>
  );
};

export default About;
