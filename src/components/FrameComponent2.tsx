import { FunctionComponent } from "react";

const FrameComponent2: FunctionComponent = () => {
  return (
    <section className="w-[1189px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-smi-2 text-whitesmoke-200 font-inter">
      <div className="flex flex-col items-start justify-start gap-[40px] max-w-full mq750:gap-[20px]">
        <div className="flex flex-col items-start justify-start gap-[20px] max-w-full">
          <div className="relative tracking-[0.5px] leading-[16px] uppercase font-black inline-block min-w-[115px]">
            Find your drive
          </div>
          <div className="flex flex-col items-start justify-start max-w-full text-54xl-3 text-whitesmoke-100 font-noto-serif">
            <div className="relative tracking-[-1px] leading-[90px] font-black mq450:text-25xl mq450:leading-[54px] mq1050:text-40xl mq1050:leading-[72px]">{`Start a car sharing `}</div>
            <div className="relative tracking-[-1px] leading-[90px] font-black inline-block max-w-full mq450:text-25xl mq450:leading-[54px] mq1050:text-40xl mq1050:leading-[72px]">
              business on Kimi
            </div>
          </div>
        </div>
        <div className="rounded-lg bg-kimi-yellow flex flex-row items-start justify-start py-0 pr-[17px] pl-[18px] mix-blend-normal whitespace-nowrap text-mid-6 text-black border-[1px] border-solid border-blueviolet">
          <b className="relative leading-[49px] inline-block min-w-[98px]">
            Get started
          </b>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
