import { FunctionComponent } from "react";

const SearchComponent: FunctionComponent = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[20.5px] box-border max-w-full shrink-0">
      <section className="flex-1 bg-white box-border flex flex-row items-start justify-start pt-[26.5px] px-[23.5px] pb-[26px] gap-[10px] mix-blend-normal shrink-0 [debug_commit:1de1738] max-w-full text-left text-base-4 text-darkgoldenrod-200 font-inter border-b-[1px] border-solid border-silver-300 mq1050:flex-wrap">
        <div className="w-64 flex flex-col items-start justify-start py-0 pr-1.5 pl-0 box-border">
          <div className="self-stretch flex flex-row items-start justify-start relative mix-blend-normal border-b-[1px] border-solid border-gainsboro-100">
            <div className="relative leading-[24px] inline-block min-w-[48px]">
              Where
            </div>
            <div className="w-[292.5px] absolute !m-[0] top-[0.5px] right-[-100.5px] text-base-8 leading-[24px] text-gray-300 flex items-center overflow-hidden text-ellipsis whitespace-nowrap">
              Map location
            </div>
          </div>
        </div>
        <div className="h-[26px] w-[289.3px] box-border flex flex-row items-start justify-start pt-0 pb-px pr-[11px] pl-0 gap-[5px] mix-blend-normal border-b-[1px] border-solid border-silver-100">
          <div className="relative leading-[24px] inline-block min-w-[37px] shrink-0">
            From
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[2.9px] text-base-8 text-gray-200">
            <div className="flex flex-row items-end justify-start py-0 pr-[7.1px] pl-0 gap-[11.5px]">
              <div className="relative leading-[24px] inline-block min-w-[87px]">
                05/15/2024
              </div>
              <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[3.5px]">
                <img
                  className="w-4 h-4 relative overflow-hidden shrink-0 mix-blend-normal"
                  alt=""
                  src="/icon2.svg"
                />
              </div>
            </div>
            <div className="self-stretch w-[93.1px] overflow-hidden shrink-0 flex flex-row items-end justify-start pt-0 px-2.5 pb-[0.5px] box-border mix-blend-normal">
              <div className="relative leading-[25px] inline-block min-w-[71px] whitespace-nowrap">
                10:00 AM
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-[4.5px] px-0 pb-0">
              <img
                className="w-4 h-4 relative overflow-hidden shrink-0 mix-blend-normal"
                alt=""
                src="/icon-11.svg"
              />
            </div>
          </div>
        </div>
        <div className="w-[283.9px] box-border overflow-x-auto flex flex-row items-start justify-start py-0 pr-2 pl-0 gap-[5px] mix-blend-normal text-base-8 text-gray-200 border-b-[1px] border-solid border-silver-100">
          <div className="relative text-base-4 leading-[24px] text-darkgoldenrod-200 inline-block min-w-[34px]">
            Until
          </div>
          <div className="flex flex-row items-end justify-start py-0 pr-[5px] pl-0 gap-[11.2px]">
            <div className="relative leading-[24px] inline-block min-w-[87px]">
              05/18/2024
            </div>
            <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[3.5px]">
              <img
                className="w-4 h-4 relative overflow-hidden shrink-0 mix-blend-normal"
                alt=""
                src="/icon-21.svg"
              />
            </div>
          </div>
          <div className="self-stretch w-[112.1px] shrink-0 flex flex-row items-start justify-start gap-[3px]">
            <div className="self-stretch flex-1 overflow-hidden flex flex-row items-end justify-start pt-0 px-2.5 pb-[0.5px] mix-blend-normal shrink-0 [debug_commit:1de1738]">
              <div className="relative leading-[25px] inline-block min-w-[71px] whitespace-nowrap">
                10:00 AM
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-[4.5px] px-0 pb-0">
              <img
                className="w-4 h-4 relative overflow-hidden shrink-0 mix-blend-normal [debug_commit:1de1738]"
                alt=""
                src="/icon-11.svg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SearchComponent;
