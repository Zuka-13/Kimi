import { FunctionComponent } from "react";

const CallToActionRentOutCar: FunctionComponent = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-center py-0 pr-6 pl-5 box-border max-w-full text-left text-22xl-6 text-white font-noto-serif">
      <div className="w-[607px] flex flex-col items-end justify-start gap-[32px] max-w-full mq750:gap-[16px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[16.5px] max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="relative tracking-[-0.5px] leading-[56px] font-black mq450:text-6xl mq450:leading-[34px] mq1050:text-14xl mq1050:leading-[45px]">{`Start building your business `}</div>
            <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[23px]">
              <div className="relative tracking-[-0.5px] leading-[56px] font-black inline-block min-w-[97px] mq450:text-6xl mq450:leading-[34px] mq1050:text-14xl mq1050:leading-[45px]">
                plan
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[13px] pl-[12.9px] box-border max-w-full text-base-4 font-inter">
            <div className="flex-1 flex flex-col items-start justify-start max-w-full">
              <div className="relative leading-[24px]">{`List your first car to get started today and build your plan to take control of your `}</div>
              <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[23px]">
                <div className="relative leading-[24px]">
                  financial future tomorrow.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[23px] text-mid-6 text-black font-inter">
          <div className="rounded-lg bg-kimi-yellow flex flex-row items-start justify-start py-0 pr-[17px] pl-[18px] mix-blend-normal whitespace-nowrap border-[1px] border-solid border-kimi-yellow">
          <a href="./Login" className="relative leading-[49px] inline-block min-w-[98px] text-black font-bold no-underline">
              Get started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionRentOutCar;
