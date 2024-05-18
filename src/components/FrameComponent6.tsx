import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const FrameComponent6: FunctionComponent = () => {
  const navigate = useNavigate();

  const onJoinTheTeamLinkSeoPagesClick = useCallback(() => {
    navigate("/rent-your-car");
  }, [navigate]);

  const onLinkSeoPagesOt7gc8ContainerClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  return (
    <section className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-xl-5 text-white font-inter">
      <div className="w-[939px] flex flex-col items-start justify-start gap-[79.3px] max-w-full mq950:gap-[40px] mq700:gap-[20px]">
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 text-22xl-6 font-noto-serif">
          <div className="relative tracking-[-0.5px] leading-[56px] font-black mq450:text-6xl mq450:leading-[34px] mq925:text-14xl mq925:leading-[45px]">
            Want to dive deeper?
          </div>
        </div>
        <div className="w-[928px] flex flex-row items-start justify-center gap-[60px] max-w-full mq925:flex-wrap mq925:gap-[30px]">
          <div className="flex-1 flex flex-row items-start justify-start relative min-w-[328px] max-w-full">
            <img
              className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover mix-blend-normal"
              alt=""
              src="/image-eiig1vx0-12@2x.png"
            />
            <div className="h-[283px] flex-1 relative bg-orange-500 mix-blend-normal max-w-full z-[1]" />
          </div>
          <div className="w-[364px] flex flex-col items-start justify-start pt-[30px] px-0 pb-0 box-border min-w-[364px] max-w-full mq450:min-w-full mq925:flex-1">
            <div className="self-stretch flex flex-col items-start justify-start gap-[12.5px] max-w-full">
              <div className="relative tracking-[-0.2px] leading-[28px] font-black mq450:text-base mq450:leading-[22px]">
                Join the team
              </div>
              <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[11.5px] box-border gap-[12px] max-w-full text-base-4">
                <div className="self-stretch flex flex-col items-start justify-start max-w-full">
                  <div className="relative leading-[24px] inline-block max-w-full">
                    Recognized as A Great Place to Work®, Kimi
                  </div>
                  <div className="relative leading-[24px] inline-block max-w-full z-[1]">
                    prides itself on creating a supportive, down-to-
                  </div>
                  <div className="relative leading-[24px] z-[2]">
                    earth, pioneering, and efficient work environment.
                  </div>
                </div>
                <div className="relative leading-[24px]">
                  Review open positions and come join us!
                </div>
              </div>
              <div
                className="w-[154.6px] rounded-lg bg-kimi-yellow box-border flex flex-row items-start justify-start py-0 px-[19px] mix-blend-normal whitespace-nowrap cursor-pointer text-base-7 border-[1px] border-solid border-kimi-yellow"
                onClick={onJoinTheTeamLinkSeoPagesClick}
              >
                <b className="relative leading-[49px] inline-block min-w-[111px]">
                  Join the team
                </b>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center gap-[62px] max-w-full mq950:gap-[31px] mq700:gap-[15px] mq925:flex-wrap">
          <div className="flex flex-col items-start justify-start pt-9 px-0 pb-0 box-border min-w-[373px] max-w-full mq450:min-w-full mq925:flex-1">
            <div className="flex flex-col items-start justify-start gap-[12.5px] max-w-full">
              <div className="relative tracking-[-0.2px] leading-[28px] font-black inline-block min-w-[122px] mq450:text-base mq450:leading-[22px]">
                Get in touch
              </div>
              <div className="flex flex-col items-start justify-start pt-0 px-0 pb-[11.5px] box-border max-w-full text-base-4">
                <div className="relative leading-[24px]">{`Reach out to the Kimi newsdesk for press inquiries, `}</div>
                <div className="relative leading-[24px] inline-block max-w-full z-[1]">{`the Kimi press kit, influencer outreach, investor `}</div>
                <div className="relative leading-[24px] inline-block max-w-full z-[2]">{`relations information, and any other corporate `}</div>
                <div className="relative leading-[24px] z-[3]">
                  inquiries you may have.
                </div>
              </div>
              <div
                className="rounded-lg bg-kimi-yellow flex flex-row items-start justify-start pt-0 px-[52px] pb-0 mix-blend-normal whitespace-nowrap cursor-pointer text-base-7 border-[1px] border-solid border-kimi-yellow"
                onClick={onLinkSeoPagesOt7gc8ContainerClick}
              >
                <b className="relative leading-[49px] inline-block min-w-[90px]">
                  Contact us
                </b>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-row items-start justify-start relative min-w-[328px] max-w-full">
            <img
              className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover mix-blend-normal"
              alt=""
              src="/image-eiig1vx0-22@2x.png"
            />
            <div className="h-[283px] flex-1 relative bg-orange-500 mix-blend-normal max-w-full z-[1]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent6;
