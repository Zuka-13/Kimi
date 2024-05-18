import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const HeroSection: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFormSeoPages15kw95vContainerClick = useCallback(() => {
    navigate("/destinations");
  }, [navigate]);

  return (
    <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[39.2px] box-border max-w-full text-left text-xs-8 text-gray-300 font-inter">
      <div className="flex-1 flex flex-row items-start justify-center pt-[146.3px] pb-[146px] pr-5 pl-[21px] box-border bg-[url('/public/hero-section@3x.png')] bg-cover bg-no-repeat bg-[top] mix-blend-normal min-h-[395px] max-w-full shrink-0">
        <div
          className="w-[940px] shadow-[0px_4px_8px_rgba(0,_0,_0,_0.14)] rounded-81xl bg-white overflow-hidden shrink-0 flex flex-row flex-wrap items-start justify-start py-2 pr-2 pl-[17px] box-border mix-blend-normal max-w-full [row-gap:20px] cursor-pointer"
          onClick={onFormSeoPages15kw95vContainerClick}
        >
          <div className="flex-1 flex flex-col items-start justify-start py-0 pr-[5px] pl-0 box-border min-w-[224px] max-w-full">
            <div className="flex flex-row items-start justify-start py-0 px-px">
              <div className="relative leading-[16px] font-medium inline-block min-w-[37px]">
                Where
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[5px] max-w-full mt-[-1px] text-base-1 text-gray-200 mq450:flex-wrap">
              <div className="h-px w-px overflow-hidden shrink-0 flex flex-col items-start justify-start mix-blend-normal">
                <div className="h-6 relative leading-[24px] inline-block whitespace-nowrap shrink-0">{`City, `}</div>
                <div className="h-6 relative leading-[24px] inline-block whitespace-nowrap shrink-0">{`airport, `}</div>
                <div className="h-6 relative leading-[24px] inline-block whitespace-nowrap shrink-0">{`address `}</div>
                <div className="h-6 relative leading-[24px] inline-block whitespace-nowrap shrink-0">{`or `}</div>
                <div className="h-6 relative leading-[24px] inline-block shrink-0">
                  hotel
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border min-w-[217px] max-w-full text-base-4 text-gray-400">
                <div className="self-stretch relative leading-[24px] overflow-hidden text-ellipsis whitespace-nowrap">
                  City, airport, address or hotel
                </div>
              </div>
            </div>
          </div>
          <div className="w-[265px] box-border flex flex-row items-end justify-start py-0 pr-[11px] pl-3.5 gap-[24px] mix-blend-normal border-l-[1px] border-solid border-silver-100">
            <div className="flex-1 flex flex-col items-start justify-start">
              <div className="flex flex-row items-start justify-start py-0 px-px">
                <div className="relative leading-[16px] font-medium inline-block min-w-[29px]">
                  From
                </div>
              </div>
              <div className="self-stretch flex flex-row items-end justify-start mt-[-1px] text-base-1 text-gray-200">
                <div className="flex-1 flex flex-row items-start justify-start gap-[5px]">
                  <div className="w-px flex flex-col items-start justify-start gap-[11.5px]">
                    <div className="self-stretch h-px overflow-hidden shrink-0 flex flex-row items-start justify-start relative mix-blend-normal">
                      <div className="h-6 w-[37px] absolute !m-[0] right-[-36px] bottom-[-23px] leading-[24px] inline-block z-[1]">
                        From
                      </div>
                    </div>
                    <div className="self-stretch h-px overflow-hidden shrink-0 flex flex-col items-start justify-start mix-blend-normal">
                      <div className="h-6 relative leading-[24px] inline-block whitespace-nowrap shrink-0">{`Start `}</div>
                      <div className="h-6 relative leading-[24px] inline-block shrink-0">
                        time
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0 text-smi-8 text-black">
                    <div className="self-stretch relative leading-[24px] overflow-hidden text-ellipsis whitespace-nowrap">
                      05/02/2024
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-end pt-0 pb-1 pr-[17px] pl-0">
                  <img
                    className="w-4 h-4 relative overflow-hidden shrink-0 mix-blend-normal"
                    loading="lazy"
                    alt=""
                    src="/icon.svg"
                  />
                </div>
                <div className="w-[58px] relative text-smi-8 leading-[24px] flex items-center overflow-hidden text-ellipsis whitespace-nowrap shrink-0">
                  10:00 AM
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-end pt-0 px-0 pb-1">
              <img
                className="w-4 h-4 relative overflow-hidden shrink-0 mix-blend-normal"
                alt=""
                src="/icon.svg"
              />
            </div>
          </div>
          <div className="w-[265px] box-border flex flex-row items-end justify-start py-0 pr-[11px] pl-3.5 gap-[17px] mix-blend-normal border-l-[1px] border-solid border-silver-100">
            <div className="flex-1 flex flex-col items-start justify-start">
              <div className="flex flex-row items-start justify-start py-0 px-px">
                <div className="relative leading-[16px] font-medium inline-block min-w-[27px]">
                  Until
                </div>
              </div>
              <div className="self-stretch flex flex-row items-end justify-start mt-[-1px] text-base-1 text-gray-200">
                <div className="flex-1 flex flex-row items-start justify-start gap-[5px]">
                  <div className="w-px flex flex-col items-start justify-start gap-[11.5px]">
                    <div className="self-stretch h-px overflow-hidden shrink-0 flex flex-row items-start justify-start relative mix-blend-normal">
                      <div className="h-6 w-[33px] absolute !m-[0] right-[-32px] bottom-[-23px] leading-[24px] inline-block z-[1]">
                        Until
                      </div>
                    </div>
                    <div className="self-stretch h-px overflow-hidden shrink-0 flex flex-col items-start justify-start mix-blend-normal">
                      <div className="h-6 relative leading-[24px] inline-block whitespace-nowrap shrink-0">{`End `}</div>
                      <div className="h-6 relative leading-[24px] inline-block shrink-0">
                        time
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0 text-smi-8 text-black">
                    <div className="self-stretch relative leading-[24px] overflow-hidden text-ellipsis whitespace-nowrap">
                      05/05/2024
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-end pt-0 px-0 pb-1">
                  <img
                    className="w-4 h-4 relative overflow-hidden shrink-0 mix-blend-normal"
                    alt=""
                    src="/icon.svg"
                  />
                </div>
              </div>
            </div>
            <div className="w-[65px] flex flex-col items-start justify-start py-0 pr-[7px] pl-0 box-border text-smi-8 text-gray-200">
              <div className="self-stretch relative leading-[24px] overflow-hidden text-ellipsis whitespace-nowrap">
                10:00 AM
              </div>
            </div>
            <div className="flex flex-col items-start justify-end pt-0 px-0 pb-1">
              <img
                className="w-4 h-4 relative overflow-hidden shrink-0 mix-blend-normal"
                alt=""
                src="/icon.svg"
              />
            </div>
          </div>
          <div className="h-10 w-10 relative rounded-21xl bg-kimi-yellow mix-blend-normal text-base-1 text-white">
            <img
              className="absolute top-[7px] left-[8px] w-6 h-6 overflow-hidden mix-blend-normal"
              alt=""
              src="/icon-4.svg"
            />
            <div className="absolute top-[6px] left-[-1px] w-px h-px overflow-hidden flex flex-col items-start justify-start mix-blend-normal">
              <b className="h-4 relative leading-[16px] inline-block whitespace-nowrap shrink-0">{`Search `}</b>
              <b className="h-4 relative leading-[16px] inline-block whitespace-nowrap shrink-0">{`for `}</b>
              <b className="h-4 relative leading-[16px] inline-block shrink-0">
                cars
              </b>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
