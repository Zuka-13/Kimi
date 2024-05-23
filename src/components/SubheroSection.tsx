import { FunctionComponent } from "react";

const SubheroSection: FunctionComponent = () => {
  return (
    // CSS Styling using Tailwind for the section
    <div className="self-stretch h-[614px] relative bg-snow mix-blend-normal text-left text-8xl-2 text-white font-inter">
      {/* Adding image for the section */}
      <img
        className="absolute top-[80px] left-[375px] w-[363px] h-[455px] overflow-hidden object-cover mix-blend-normal"
        loading="lazy"
        alt="Man being handed keys for the car"
        src="/image-eiig1vx01@2x.png"
      />

        {/* Black box section styling */}
      <div className="absolute top-[130px] left-[655px] bg-gray-300 w-[402px] flex flex-col items-start justify-start pt-[39.5px] px-12 pb-12 box-border mix-blend-normal z-[1]">
        {/* Text styling inside of the black box section */}
        <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[16.5px] text-xl-5">
          {/* Header text styling inside of the black box */}
          <div className="relative tracking-[-0.2px] leading-[28px] font-medium mq450:text-base mq450:leading-[22px]">
            Company mission
          </div>
        </div>
        {/* Paragraph styling inside of the black box */}
        <div className="flex flex-col items-start justify-start">
          <div className="relative tracking-[-0.2px] leading-[32px] font-black whitespace-nowrap mq450:text-3xl mq450:leading-[26px]">
            To put the world’s <br />
            cars to better <br />
            use.
            </div>
          </div>
      </div>
    </div>
  );
};

export default SubheroSection;
