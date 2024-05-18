import { FunctionComponent } from "react";

const FrameComponent7: FunctionComponent = () => {
  return (
    <div className="w-[1254px] flex flex-row items-start justify-center pt-0 px-5 pb-[18.5px] box-border max-w-full text-left text-54xl-7 text-gray-300 font-noto-serif">
      <div className="w-[872px] flex flex-row items-start justify-start relative max-w-full">
        <img
          className="h-[326px] w-[588px] absolute !m-[0] top-[-65px] left-[-177px] object-cover z-[1]"
          loading="lazy"
          alt=""
          src="/picture-kimi-about-us@2x.png"
        />
        <div className="flex-1 bg-white flex flex-col items-center justify-start pt-6 pb-[42px] pr-5 pl-[328px] box-border gap-[15px] max-w-full mq450:pl-5 mq450:box-border mq700:pl-[164px] mq700:box-border">
          <img
            className="w-[872px] h-[309px] relative hidden max-w-full"
            alt=""
            src="/hero-section.svg"
          />
          <div className="w-[324px] flex flex-row items-start justify-start py-0 px-2 box-border max-w-full">
            <div className="flex-1 relative tracking-[-1px] leading-[90px] font-black z-[1] mq450:text-25xl mq450:leading-[54px] mq925:text-40xl mq925:leading-[72px]">
              ABOUT KIMI
            </div>
          </div>
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
  );
};

export default FrameComponent7;
