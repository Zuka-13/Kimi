import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Sarajevo from "./Sarajevo";

const DestinationBrowse: FunctionComponent = () => {
  const navigate = useNavigate();

  const onSarajevoContainerClick = useCallback(() => {
    navigate("/destinations");
  }, [navigate]);

  const onMostarContainerClick = useCallback(() => {
    navigate("/destinations");
  }, [navigate]);

  const onTuzlaContainerClick = useCallback(() => {
    navigate("/destinations");
  }, [navigate]);

  const onBanjaLukaContainerClick = useCallback(() => {
    navigate("/destinations");
  }, [navigate]);

  const onButtonContainerClick = useCallback(() => {
    navigate("/destinations");
  }, [navigate]);

  return (
    <section className="self-stretch flex flex-row items-start justify-center pt-0 pb-[113.7px] pr-5 pl-[30px] box-border max-w-full text-left text-xl-2 text-white font-inter mq800:pb-[74px] mq800:box-border">
      <div className="w-[996.2px] flex flex-col items-start justify-start gap-[97.3px] max-w-full mq800:gap-[24px] mq1125:gap-[49px]">
        <div className="w-[853.5px] flex flex-col items-start justify-start gap-[21.1px] max-w-full">
          <div className="relative tracking-[-0.2px] leading-[28px] font-black mq450:text-base mq450:leading-[22px]">
            Browse by destination
          </div>
          <div className="self-stretch flex flex-row items-start justify-end max-w-full text-base-1 text-kimi-yellow">
            <div className="overflow-hidden grid flex-row items-start justify-start py-1 px-2 box-border gap-[16px] mix-blend-normal max-w-full grid-cols-[repeat(4,_minmax(117px,_1fr))] mq450:grid-cols-[minmax(117px,_1fr)] mq800:my-0 mq800:mx-auto mq800:grid-cols-[repeat(2,_minmax(117px,_203px))]">
              <Sarajevo
                sarajevoImage="/sarajevo-image@2x.png"
                sarajevo="Sarajevo"
                onSarajevoContainerClick={onSarajevoContainerClick}
              />
              <Sarajevo
                sarajevoImage="/mostar-image@2x.png"
                sarajevo="Mostar"
                propMinWidth="54px"
                onSarajevoContainerClick={onMostarContainerClick}
              />
              <Sarajevo
                sarajevoImage="/tuzla-image@2x.png"
                sarajevo="Tuzla"
                propMinWidth="42px"
                onSarajevoContainerClick={onTuzlaContainerClick}
              />
              <Sarajevo
                sarajevoImage="/banja-luka-image@2x.png"
                sarajevo="Banja Luka"
                propMinWidth="82px"
                onSarajevoContainerClick={onBanjaLukaContainerClick}
              />
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-end max-w-full text-8xl">
          <div className="w-[919px] flex flex-row items-start justify-between max-w-full gap-[20px] mq1125:flex-wrap">
            <img
              className="w-[389.4px] relative max-h-full overflow-hidden shrink-0 object-cover mix-blend-normal [debug_commit:1de1738] max-w-full mq1125:flex-1"
              loading="lazy"
              alt=""
              src="/image@2x.png"
            />
            <div className="w-[444px] flex flex-col items-start justify-start pt-[13.1px] px-0 pb-0 box-border min-w-[444px] max-w-full mq800:min-w-full mq1125:flex-1">
              <div className="self-stretch flex flex-col items-start justify-start gap-[31px] shrink-0 [debug_commit:1de1738] max-w-full mq450:gap-[15px]">
                <div className="self-stretch flex flex-col items-start justify-start max-w-full">
                  <div className="flex flex-row items-start justify-start gap-[10.1px] max-w-full mq450:flex-wrap">
                    <div className="relative tracking-[-0.2px] leading-[32px] font-black mq450:text-3xl mq450:leading-[26px]">
                      Find the perfect car
                    </div>
                    <div className="relative tracking-[-0.2px] leading-[32px] font-black text-kimi-yellow whitespace-pre-wrap z-[2] mq450:text-3xl mq450:leading-[26px]">
                      to conquer
                    </div>
                  </div>
                  <div className="self-stretch relative text-16xl tracking-[-0.2px] leading-[32px] font-black text-kimi-yellow z-[1] mt-[-0.1px] mq450:text-2xl mq450:leading-[19px] mq800:text-9xl mq800:leading-[26px]">
                    the great Mostar Canyon
                  </div>
                </div>
                <div className="w-[390px] flex flex-col items-start justify-start gap-[2px] max-w-full text-justify text-sm font-poppins">
                  <div className="self-stretch relative leading-[24px] font-light">
                    Embark on a canyon adventure to Mostar in style with a
                    premium car, blending rugged capability with refined comfort
                    for an unforgettable journey.
                  </div>
                  <div
                    className="rounded-lg bg-kimi-yellow flex flex-row items-start justify-start py-0 pr-4 pl-[18px] mix-blend-normal whitespace-nowrap cursor-pointer text-left text-mid-3 font-inter border-[1px] border-solid border-kimi-yellow"
                    onClick={onButtonContainerClick}
                  >
                    <b className="relative leading-[49px] inline-block min-w-[105px]">
                      Browse cars
                    </b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DestinationBrowse;
