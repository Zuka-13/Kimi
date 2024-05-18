import { FunctionComponent } from "react";

export type FrameComponent3Type = {
  /** Action props */
  onHomeTextClick?: () => void;
  onDestinationsTextClick?: () => void;
  onAboutTextClick?: () => void;
  onContactTextClick?: () => void;
  onLinkSeoPages1uv25j8ButtonClick?: () => void;
  onLinkSeoPages1uv25j8Button1Click?: () => void;
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  onHomeTextClick,
  onDestinationsTextClick,
  onAboutTextClick,
  onContactTextClick,
  onLinkSeoPages1uv25j8ButtonClick,
  onLinkSeoPages1uv25j8Button1Click,
}) => {
  return (
    <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[41px] box-border max-w-full">
      <header className="flex-1 bg-kimi-yellow box-border flex flex-row items-start justify-start pt-[31px] px-5 pb-[18px] gap-[57px] mix-blend-normal max-w-full text-center text-xl text-black font-poppins border-b-[1px] border-solid border-silver-300 mq750:gap-[28px]">
        <img
          className="h-[109px] w-56 relative object-cover"
          loading="lazy"
          alt=""
          src="/kimi-logo-2@2x.png"
        />
        <div className="flex-1 flex flex-col items-start justify-start pt-[18px] px-0 pb-0 box-border max-w-full">
          <div className="self-stretch flex flex-row items-end justify-start gap-[31px] mq750:gap-[15px]">
            <div className="w-[133px] flex flex-col items-start justify-start gap-[11px]">
              <b
                className="self-stretch relative cursor-pointer"
                onClick={onHomeTextClick}
              >
                Home
              </b>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[38px] pl-10">
                <div className="h-[3px] flex-1 relative box-border border-t-[3px] border-solid border-white" />
              </div>
            </div>
            <div className="w-36 flex flex-col items-start justify-start py-0 pr-[11px] pl-0 box-border gap-[9px]">
              <b
                className="self-stretch relative cursor-pointer"
                onClick={onDestinationsTextClick}
              >
                Destinations
              </b>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[38px] pl-10">
                <div className="h-[3px] flex-1 relative box-border border-t-[3px] border-solid border-white" />
              </div>
            </div>
            <div className="w-[149px] flex flex-col items-start justify-end pt-0 pb-px pr-4 pl-0 box-border">
              <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                <b
                  className="self-stretch relative cursor-pointer"
                  onClick={onAboutTextClick}
                >
                  About
                </b>
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[38px] pl-10">
                  <div className="h-[3px] flex-1 relative box-border border-t-[3px] border-solid border-white" />
                </div>
              </div>
            </div>
            <div className="w-[159px] flex flex-col items-start justify-end pt-0 pb-px pr-[26px] pl-0 box-border">
              <div className="self-stretch flex flex-col items-start justify-start gap-[9px]">
                <b
                  className="self-stretch relative cursor-pointer"
                  onClick={onContactTextClick}
                >
                  Contact
                </b>
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[38px] pl-10">
                  <div className="h-[3px] flex-1 relative box-border border-t-[3px] border-solid border-white" />
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-0.5">
              <button
                className="cursor-pointer py-[15px] px-[33px] bg-kimi-yellow flex flex-row items-start justify-start mix-blend-normal whitespace-nowrap border-[1px] border-solid border-darkslategray-100 hover:bg-darkgoldenrod-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-dimgray"
                onClick={onLinkSeoPages1uv25j8ButtonClick}
              >
                <div className="relative text-xl leading-[25px] font-black font-inter text-darkslategray-100 text-center inline-block min-w-[89px]">
                  Get a car
                </div>
              </button>
            </div>
            <div className="flex flex-col items-start justify-end pt-0 px-0 pb-0.5">
              <button
                className="cursor-pointer py-[15px] px-[11px] bg-kimi-yellow flex flex-row items-start justify-start mix-blend-normal whitespace-nowrap border-[1px] border-solid border-darkslategray-100 hover:bg-darkgoldenrod-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-dimgray"
                onClick={onLinkSeoPages1uv25j8Button1Click}
              >
                <div className="relative text-xl leading-[25px] font-black font-inter text-darkslategray-100 text-center">
                  Rent your car
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>
    </section>
  );
};

export default FrameComponent3;
