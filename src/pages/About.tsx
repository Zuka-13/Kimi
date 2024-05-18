import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent7 from "../components/FrameComponent7";
import SubheroSection from "../components/SubheroSection";
import FrameComponent6 from "../components/FrameComponent6";
import Footer1 from "../components/Footer1";

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
      <FrameComponent3
        onHomeTextClick={onHomeTextClick}
        onDestinationsTextClick={onDestinationsTextClick}
        onAboutTextClick={onAboutTextClick}
        onContactTextClick={onContactTextClick}
        onLinkSeoPages1uv25j8ButtonClick={onLinkSeoPages1uv25j8ButtonClick}
        onLinkSeoPages1uv25j8Button1Click={onLinkSeoPages1uv25j8Button1Click}
      />
      <section className="self-stretch flex flex-col items-end justify-start pt-0 px-0 pb-[14.5px] box-border gap-[84px] max-w-full text-left text-base-4 text-white font-inter mq450:gap-[21px] mq925:gap-[42px]">
        <FrameComponent7 />
        <div className="w-[1397px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <div className="flex flex-col items-start justify-start gap-[12px] max-w-full">
            <div className="flex flex-col items-start justify-start max-w-full">
              <div className="w-[414px] flex flex-col items-start justify-start pt-0 px-0 pb-1.5 box-border gap-[6.5px] max-w-full text-22xl-6 font-noto-serif">
                <div className="relative tracking-[-0.5px] leading-[56px] font-black inline-block max-w-full mq450:text-6xl mq450:leading-[34px] mq925:text-14xl mq925:leading-[45px]">
                  Find your drive
                </div>
                <div className="self-stretch h-1 relative bg-orange-400 mix-blend-normal" />
              </div>
              <div className="relative leading-[24px] inline-block max-w-full">{`Kimi is the world’s best car sharing marketplace, where you can book the perfect car for `}</div>
              <div className="relative leading-[24px] z-[1]">{`wherever you’re going from a vibrant community of trusted hosts across the US, UK, Canada, `}</div>
              <div className="relative leading-[24px] z-[2]">{`Australia, and France. Flying in from afar or looking for a car down the street, searching for a `}</div>
              <div className="relative leading-[24px] inline-block max-w-full z-[3]">{`rugged truck or something smooth and swanky, you can skip the rental car counter and `}</div>
              <div className="relative leading-[24px] inline-block max-w-full z-[4]">{`choose from an extraordinary, totally unique selection of nearby vehicles shared by local `}</div>
              <div className="relative leading-[24px] z-[5]">{`hosts. Entrepreneurs can take the wheel of their futures by becoming hosts and building car `}</div>
              <div className="relative leading-[24px] z-[6]">{`sharing businesses on Kimi, leveraging our established platform to scale their businesses to `}</div>
              <div className="relative leading-[24px] inline-block min-w-[123px] z-[7]">
                meet their goals.
              </div>
            </div>
            <div className="flex flex-col items-start justify-start max-w-full">
              <div className="relative leading-[24px] inline-block max-w-full">{`With an unwavering mission of putting the world’s cars to better use, Kimi unlocks `}</div>
              <div className="relative leading-[24px]">{`the hidden value in idle and underutilized assets, empowering anyone to get in the driver’s `}</div>
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
