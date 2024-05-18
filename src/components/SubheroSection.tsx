import { FunctionComponent } from "react";

const SubheroSection: FunctionComponent = () => {
  return (
    <div className="self-stretch h-[614px] relative bg-snow mix-blend-normal text-left text-8xl-2 text-white font-inter">
      <img
        className="absolute top-[80px] left-[375px] w-[363px] h-[455px] overflow-hidden object-cover mix-blend-normal"
        loading="lazy"
        alt=""
        src="/image-eiig1vx01@2x.png"
      />
      <div className="absolute top-[130px] left-[655px] bg-gray-300 w-[402px] flex flex-col items-start justify-start pt-[39.5px] px-12 pb-12 box-border mix-blend-normal z-[1]">
        <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[16.5px] text-xl-5">
          <div className="relative tracking-[-0.2px] leading-[28px] font-medium mq450:text-base mq450:leading-[22px]">
            Company mission
          </div>
        </div>
        <div className="flex flex-col items-start justify-start">
          <div className="relative tracking-[-0.2px] leading-[32px] font-black whitespace-nowrap mq450:text-3xl mq450:leading-[26px]">{`To put the world’s  `}</div>
          <div className="relative tracking-[-0.2px] leading-[32px] font-black mq450:text-3xl mq450:leading-[26px]">{` cars to better `}</div>
        </div>
        <div className="relative tracking-[-0.2px] leading-[32px] font-black inline-block min-w-[50px] mq450:text-3xl mq450:leading-[26px]">
          use
        </div>
      </div>
    </div>
  );
};

export default SubheroSection;
