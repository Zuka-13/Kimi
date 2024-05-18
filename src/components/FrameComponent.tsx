import { FunctionComponent, useCallback } from "react";
import ReviewCardContent from "./ReviewCardContent";
import FrameComponent5 from "./FrameComponent5";
import { useNavigate } from "react-router-dom";

const FrameComponent: FunctionComponent = () => {
  const navigate = useNavigate();

  const onHeaderText1Click = useCallback(() => {
    navigate("/destinations");
  }, [navigate]);

  const onHeaderTextClick = useCallback(() => {
    navigate("/rent-your-car");
  }, [navigate]);

  return (
    <section className="self-stretch flex flex-row items-start justify-center pt-0 pb-[104px] pr-5 pl-[50px] box-border max-w-full text-left text-8xl text-white font-inter mq450:pb-[29px] mq450:box-border mq1125:pb-11 mq1125:box-border mq1325:pl-[25px] mq1325:pb-[68px] mq1325:box-border">
      <div className="w-[1075px] flex flex-col items-start justify-start gap-[49.5px] max-w-full mq800:gap-[25px]">
        <div className="w-[1032px] bg-orange-500 flex flex-row items-end justify-between pt-8 pb-[34.3px] pr-[70px] pl-[50.5px] box-border mix-blend-normal max-w-full gap-[20px] mq1125:flex-wrap mq1125:pl-[25px] mq1125:pr-[35px] mq1125:box-border">
          <img
            className="h-[233.7px] w-[415px] relative overflow-hidden shrink-0 object-contain mix-blend-normal max-w-full z-[1] mq1125:flex-1"
            alt=""
            src="/image-eiig1vx0-2@2x.png"
          />
          <div className="w-[395px] flex flex-col items-start justify-end pt-0 px-0 pb-[23.8px] box-border min-w-[395px] max-w-full shrink-0 mq800:min-w-full mq1125:flex-1">
            <div className="self-stretch flex flex-col items-start justify-start gap-[40px] max-w-full mq450:gap-[20px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full">
                <div className="relative tracking-[-0.2px] leading-[32px] font-black z-[1] mq450:text-3xl mq450:leading-[26px]">
                  Shop Kimi gift cards
                </div>
                <div className="self-stretch flex flex-col items-start justify-start max-w-full text-base-4">
                  <div className="relative leading-[24px] z-[1]">{`Introducing Kimi gift cards! Give the gift of exploration `}</div>
                  <div className="relative leading-[24px] inline-block max-w-full z-[2]">
                    or help make any special occasion extra-memorable.
                  </div>
                </div>
              </div>
              <div className="rounded-lg bg-kimi-yellow flex flex-row items-start justify-start py-0 pr-[47px] pl-[47.3px] mix-blend-normal whitespace-nowrap z-[1] text-mid-3 border-[1px] border-solid border-kimi-yellow">
                <b className="relative leading-[49px] inline-block min-w-[129px]">
                  Shop gift cards
                </b>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start pt-0 pb-[15.9px] pr-1.5 pl-[6.4px] box-border max-w-full text-23xl font-noto-serif">
          <div className="flex flex-col items-end justify-start gap-[27.8px] max-w-full">
            <div className="w-[826.9px] flex flex-row items-start justify-end py-0 pr-[16.5px] pl-4 box-border max-w-full">
              <div className="flex-1 flex flex-col items-start justify-start gap-[9.6px] shrink-0 [debug_commit:1de1738] max-w-full">
                <div className="flex flex-row items-start justify-start relative max-w-full">
                  <div className="h-7 w-[630px] absolute !m-[0] right-[-15px] bottom-[-2px] bg-orange-600 mix-blend-normal" />
                  <h3 className="m-0 relative text-inherit tracking-[-0.5px] leading-[56px] font-black font-inherit z-[1] mq450:text-6xl mq450:leading-[34px] mq800:text-15xl mq800:leading-[45px]">
                    See what other say about us
                  </h3>
                </div>
                <div className="self-stretch flex flex-row items-start justify-end">
                  <div className="flex flex-row items-start justify-start gap-[30px]">
                    <img
                      className="h-[18px] w-[18px] relative overflow-hidden shrink-0 mix-blend-normal min-h-[18px]"
                      alt=""
                      src="/icon-5.svg"
                    />
                    <img
                      className="h-[18px] w-[18px] relative overflow-hidden shrink-0 mix-blend-normal min-h-[18px]"
                      alt=""
                      src="/icon-6.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[1025.5px] overflow-x-auto flex flex-row items-start justify-start pt-1 pb-[0.7px] pr-[1.5px] pl-2 box-border gap-[16px] mix-blend-normal shrink-0 [debug_commit:1de1738] max-w-full text-xs-8 text-gray-300 font-inter">
              <div className="w-[328px] shadow-[0px_0px_1px_rgba(35,_31,_32,_0.1),_0px_2px_4px_rgba(35,_31,_32,_0.2)] rounded-lg bg-white overflow-hidden shrink-0 flex flex-col items-start justify-start pt-4 px-4 pb-6 box-border gap-[56px] mix-blend-normal [debug_commit:1de1738] max-w-full mq450:gap-[28px]">
                <div className="flex flex-col items-start justify-start gap-[8px]">
                  <ReviewCardContent
                    imageSeoPages1vtat8bStyle="/image-seopages1vtat8bstyledimage@2x.png"
                    karissaJon={`Karissa & Jon ..`}
                    tripsJoinedMay2021="6,538 trips • Joined May 2021"
                  />
                  <div className="relative leading-[24px] text-base-4">
                    <span>{`The `}</span>
                    <b className="text-base-1">car</b>
                    <span> was amazing.</span>
                  </div>
                </div>
                <div className="relative leading-[16px] font-medium inline-block min-w-[119px]">
                  SERHII M. - Apr 2024
                </div>
              </div>
              <div className="shadow-[0px_0px_1px_rgba(35,_31,_32,_0.1),_0px_2px_4px_rgba(35,_31,_32,_0.2)] rounded-lg bg-white overflow-hidden shrink-0 flex flex-col items-start justify-start pt-4 px-4 pb-6 box-border gap-[32px] mix-blend-normal [debug_commit:1de1738] max-w-full text-base-4 mq450:gap-[16px]">
                <div className="flex flex-col items-start justify-start gap-[8px]">
                  <ReviewCardContent
                    imageSeoPages1vtat8bStyle="/image-seopages1vtat8bstyledimage-1@2x.png"
                    karissaJon="Matthew R."
                    tripsJoinedMay2021="1,408 trips • Joined Dec 2021"
                    propMinWidth="86px"
                  />
                  <div className="flex flex-col items-start justify-start">
                    <div className="relative leading-[24px]">
                      <span>{`Great service would definitely `}</span>
                      <b className="text-base-1">rent</b>
                      <span>{` `}</span>
                      <b className="text-base-1">a</b>
                      <span>{` `}</span>
                      <b className="text-base-1">car</b>
                    </div>
                    <div className="relative leading-[24px] inline-block min-w-[120px]">
                      {" "}
                      from kimi again.
                    </div>
                  </div>
                </div>
                <div className="relative text-xs-8 leading-[16px] font-medium inline-block min-w-[112px]">
                  Geser L. - Feb 2024
                </div>
              </div>
              <div className="w-[328px] shadow-[0px_0px_1px_rgba(35,_31,_32,_0.1),_0px_2px_4px_rgba(35,_31,_32,_0.2)] rounded-lg bg-white overflow-hidden shrink-0 flex flex-col items-start justify-start pt-4 px-4 pb-6 box-border gap-[32px] mix-blend-normal [debug_commit:1de1738] max-w-full text-base-4 mq450:gap-[16px]">
                <div className="flex flex-col items-start justify-start gap-[8px]">
                  <ReviewCardContent
                    imageSeoPages1vtat8bStyle="/image-seopages1vtat8bstyledimage-2@2x.png"
                    karissaJon="Adil S."
                    tripsJoinedMay2021="1,037 trips • Joined Jan 2022"
                    propMinWidth="48px"
                  />
                  <div className="flex flex-col items-start justify-start">
                    <div className="relative leading-[24px]">
                      <span>{`Kimi offers great `}</span>
                      <b className="text-base-1">cars</b>
                      <span> and first-class</span>
                    </div>
                    <div className="relative leading-[24px] inline-block min-w-[58px]">
                      service!
                    </div>
                  </div>
                </div>
                <div className="relative text-xs-8 leading-[16px] font-medium inline-block min-w-[105px]">
                  Rich S. - Mar 2024
                </div>
              </div>
              <div className="w-[328px] shadow-[0px_0px_1px_rgba(35,_31,_32,_0.1),_0px_2px_4px_rgba(35,_31,_32,_0.2)] rounded-lg bg-white overflow-hidden shrink-0 flex flex-col items-start justify-start pt-4 px-4 pb-6 box-border gap-[30px] mix-blend-normal [debug_commit:1de1738] max-w-full">
                <div className="w-[172.6px] flex flex-row items-start justify-start gap-[16px]">
                  <img
                    className="h-10 w-20 relative mix-blend-normal shrink-0 [debug_commit:1de1738]"
                    alt=""
                    src="/image-seopages1vtat8bstyledimage-3.svg"
                  />
                  <div className="w-[158px] flex flex-col items-start justify-start gap-[5px] shrink-0 [debug_commit:1de1738]">
                    <div className="w-[101px] h-5 relative text-base-1 leading-[20px] font-black flex items-center">
                      Alexandria E.
                    </div>
                    <div className="w-[100px] rounded flex flex-row items-start justify-start py-1 px-0 box-border gap-[4px] mix-blend-normal">
                      <img
                        className="h-6 w-6 relative overflow-hidden shrink-0 mix-blend-normal [debug_commit:1de1738]"
                        alt=""
                        src="/icon-12.svg"
                      />
                      <div className="flex-1 flex flex-col items-start justify-start pt-1 px-0 pb-0">
                        <div className="self-stretch h-4 relative leading-[16px] font-medium inline-block shrink-0 [debug_commit:1de1738]">
                          All-Star Host
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch h-4 relative leading-[16px] font-medium flex items-center">
                      806 trips • Joined Apr 2022
                    </div>
                  </div>
                </div>
                <div className="w-[172.6px] flex flex-col items-start justify-start gap-[8px] text-base-4">
                  <div className="flex flex-row items-start justify-start gap-[2px]">
                    <img
                      className="h-4 w-4 relative overflow-hidden shrink-0 mix-blend-normal min-h-[16px]"
                      alt=""
                      src="/icon-7.svg"
                    />
                    <img
                      className="h-4 w-4 relative overflow-hidden shrink-0 mix-blend-normal min-h-[16px]"
                      alt=""
                      src="/icon-7.svg"
                    />
                    <img
                      className="h-4 w-4 relative overflow-hidden shrink-0 mix-blend-normal min-h-[16px]"
                      alt=""
                      src="/icon-7.svg"
                    />
                    <img
                      className="h-4 w-4 relative overflow-hidden shrink-0 mix-blend-normal min-h-[16px]"
                      alt=""
                      src="/icon-7.svg"
                    />
                    <img
                      className="h-4 w-4 relative overflow-hidden shrink-0 mix-blend-normal min-h-[16px]"
                      alt=""
                      src="/icon-7.svg"
                    />
                  </div>
                  <div className="w-[277px] flex flex-col items-start justify-start">
                    <div className="self-stretch h-6 relative leading-[24px] flex items-center">
                      <span>
                        <span>{`Great communication and great `}</span>
                        <b className="text-base-1">car</b>
                        <span> at</span>
                      </span>
                    </div>
                    <div className="w-28 h-6 relative leading-[24px] flex items-center">
                      <span className="w-full">
                        <span>{`the `}</span>
                        <b className="text-base-1">best</b>
                        <span>{` `}</span>
                        <b className="text-base-1">price</b>
                        <span>!</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-[103px] h-4 relative leading-[16px] font-medium flex items-center">
                  Nate I. - Mar 2024
                </div>
              </div>
              <div className="w-[328px] shadow-[0px_0px_1px_rgba(35,_31,_32,_0.1),_0px_2px_4px_rgba(35,_31,_32,_0.2)] rounded-lg bg-white overflow-hidden shrink-0 flex flex-col items-start justify-start pt-4 px-4 pb-6 box-border relative gap-[52px] mix-blend-normal [debug_commit:1de1738] max-w-full mq450:gap-[26px]">
                <FrameComponent5
                  edwardN="Edward N."
                  tripsJoinedJun2022="774 trips • Joined Jun 2022"
                />
                <img
                  className="w-4 h-4 absolute !m-[0] top-[122px] left-[16px] overflow-hidden shrink-0 mix-blend-normal"
                  alt=""
                  src="/icon-7.svg"
                />
                <img
                  className="w-4 h-4 absolute !m-[0] top-[122px] left-[34px] overflow-hidden shrink-0 mix-blend-normal"
                  alt=""
                  src="/icon-7.svg"
                />
                <img
                  className="w-4 h-4 absolute !m-[0] top-[122px] left-[52px] overflow-hidden shrink-0 mix-blend-normal"
                  alt=""
                  src="/icon-7.svg"
                />
                <img
                  className="w-4 h-4 absolute !m-[0] top-[122px] left-[70px] overflow-hidden shrink-0 mix-blend-normal"
                  alt=""
                  src="/icon-7.svg"
                />
                <img
                  className="w-4 h-4 absolute !m-[0] top-[122px] left-[88px] overflow-hidden shrink-0 mix-blend-normal"
                  alt=""
                  src="/icon-7.svg"
                />
                <div className="w-[274px] flex flex-col items-start justify-start gap-[32px] text-base-1 mq450:gap-[16px]">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch h-6 relative leading-[24px] flex items-center">
                      <span>
                        <b>Car</b>
                        <span className="text-base-4">
                          {" "}
                          was great, Edward is a great host
                        </span>
                      </span>
                    </div>
                    <div className="w-[193px] h-6 relative text-base-4 leading-[24px] flex items-center">
                      with great communication.
                    </div>
                  </div>
                  <div className="w-[147px] h-4 relative text-xs-8 leading-[16px] font-medium flex items-center">
                    Christopher T. - Mar 2024
                  </div>
                </div>
              </div>
              <div className="w-[328px] shadow-[0px_0px_1px_rgba(35,_31,_32,_0.1),_0px_2px_4px_rgba(35,_31,_32,_0.2)] rounded-lg bg-white overflow-hidden shrink-0 flex flex-col items-start justify-start pt-4 px-4 pb-6 box-border relative gap-[52px] mix-blend-normal [debug_commit:1de1738] max-w-full text-base-4 mq450:gap-[26px]">
                <FrameComponent5
                  edwardN="Bill H."
                  tripsJoinedJun2022="318 trips • Joined Jul 2023"
                  propWidth="249px"
                  propWidth1="43px"
                />
                <img
                  className="w-4 h-4 absolute !m-[0] top-[122px] left-[16px] overflow-hidden shrink-0 mix-blend-normal"
                  alt=""
                  src="/icon-7.svg"
                />
                <img
                  className="w-4 h-4 absolute !m-[0] top-[122px] left-[34px] overflow-hidden shrink-0 mix-blend-normal"
                  alt=""
                  src="/icon-7.svg"
                />
                <img
                  className="w-4 h-4 absolute !m-[0] top-[122px] left-[52px] overflow-hidden shrink-0 mix-blend-normal"
                  alt=""
                  src="/icon-7.svg"
                />
                <img
                  className="w-4 h-4 absolute !m-[0] top-[122px] left-[70px] overflow-hidden shrink-0 mix-blend-normal"
                  alt=""
                  src="/icon-7.svg"
                />
                <img
                  className="w-4 h-4 absolute !m-[0] top-[122px] left-[88px] overflow-hidden shrink-0 mix-blend-normal"
                  alt=""
                  src="/icon-7.svg"
                />
                <div className="w-[282px] flex flex-col items-start justify-start gap-[32px] mq450:gap-[16px]">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch h-6 relative leading-[24px] flex items-center">
                      <span>
                        <span>{`The whole `}</span>
                        <b className="text-base-1">rental</b>
                        <span>{` `}</span>
                        <b className="text-base-1">process</b>
                        <span> with Bill was</span>
                      </span>
                    </div>
                    <div className="w-[73px] h-6 relative leading-[24px] flex items-center">
                      seamless.
                    </div>
                  </div>
                  <div className="w-[131px] h-4 relative text-xs-8 leading-[16px] font-medium flex items-center">
                    Candace B. - Mar 2024
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[1041px] flex flex-row items-start justify-center pt-0 px-5 pb-[45px] box-border max-w-full text-kimi-yellow mq800:pb-[29px] mq800:box-border">
          <div className="w-[846.5px] flex flex-row items-start justify-between pt-32 pb-[92px] pr-[101px] pl-[133.1px] box-border relative gap-[20px] max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border mq800:pt-[83px] mq800:pb-[60px] mq800:box-border mq1125:flex-wrap mq1125:pl-[66px] mq1125:pr-[50px] mq1125:box-border">
            <img
              className="h-full w-full absolute !m-[0] top-[0px] right-[0.5px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full mix-blend-normal"
              alt=""
              src="/icon-43.svg"
            />
            <div className="flex flex-col items-start justify-start gap-[8px] min-w-[233px] mq1125:flex-1">
              <div className="flex flex-row items-start justify-start py-0 pr-[38px] pl-[34.4px]">
                <div
                  className="relative tracking-[-0.2px] leading-[32px] font-black whitespace-nowrap cursor-pointer z-[1] mq450:text-3xl mq450:leading-[26px]"
                  onClick={onHeaderText1Click}
                >{`Book a car >`}</div>
              </div>
              <div className="flex flex-col items-start justify-start text-base-4 text-gray-300">
                <div className="flex flex-row items-start justify-start py-0 pr-2 pl-[7.9px]">
                  <div className="relative leading-[24px] z-[2]">{`Down the street or across the `}</div>
                </div>
                <div className="relative leading-[24px] z-[1]">{`country, find the perfect vehicle `}</div>
                <div className="flex flex-row items-start justify-start py-0 pr-7 pl-[29.7px]">
                  <div className="relative leading-[24px] z-[1]">
                    for your next adventure.
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[268px] flex flex-col items-start justify-start pt-[152px] px-0 pb-0 box-border min-w-[268px] mq1125:flex-1">
              <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-6 pl-[24.6px]">
                  <div
                    className="relative tracking-[-0.2px] leading-[32px] font-black cursor-pointer z-[1] mq450:text-3xl mq450:leading-[26px]"
                    onClick={onHeaderTextClick}
                  >{`Become a host >`}</div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start text-base-4 text-gray-300">
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pr-3.5 pl-[10.4px]">
                    <div className="relative leading-[24px] z-[1]">{`Accelerate your entrepreneurship `}</div>
                  </div>
                  <div className="relative leading-[24px] z-[1]">{`and start building a small car sharing `}</div>
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[71px] pl-[69.6px] mq450:pl-5 mq450:pr-5 mq450:box-border">
                    <div className="relative leading-[24px] inline-block min-w-[127px] z-[1]">
                      business on Kimi.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-end max-w-full text-23xl font-noto-serif">
          <div className="w-[1032px] flex flex-col items-start justify-start gap-[40.5px] max-w-full mq800:gap-[20px]">
            <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[21px]">
              <h3 className="m-0 relative text-inherit tracking-[-0.5px] leading-[56px] font-black font-inherit z-[1] mq450:text-6xl mq450:leading-[34px] mq800:text-15xl mq800:leading-[45px]">
                Frequently asked questions
              </h3>
            </div>
            <div className="w-[1032px] overflow-x-auto flex flex-row items-start justify-start gap-[24px] max-w-full text-base-9 font-inter">
              <div className="w-[504px] shrink-0 flex flex-col items-start justify-start mix-blend-normal">
                <div className="self-stretch box-border flex flex-row items-start justify-start mix-blend-normal max-w-full border-t-[1px] border-solid border-gainsboro-100">
                  <div className="flex-1 flex flex-row items-start justify-between py-4 px-0 box-border mix-blend-normal max-w-full gap-[20px]">
                    <div className="relative leading-[24px] font-medium">
                      What do I need to book a car on Kimi?
                    </div>
                    <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                      <img
                        className="w-4 h-4 relative overflow-hidden shrink-0 mix-blend-normal"
                        alt=""
                        src="/icon-44.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="self-stretch box-border flex flex-row items-start justify-start mix-blend-normal max-w-full border-t-[1px] border-solid border-gainsboro-100">
                  <div className="flex-1 flex flex-row items-start justify-between py-4 px-0 box-border mix-blend-normal max-w-full gap-[20px]">
                    <div className="relative leading-[24px] font-medium">
                      Do I need my own insurance?
                    </div>
                    <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                      <img
                        className="w-4 h-4 relative overflow-hidden shrink-0 mix-blend-normal"
                        alt=""
                        src="/icon-44.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="self-stretch box-border flex flex-row items-start justify-start mix-blend-normal max-w-full border-t-[1px] border-solid border-gainsboro-100">
                  <div className="flex-1 flex flex-row items-start justify-between py-4 px-0 box-border mix-blend-normal max-w-full gap-[20px]">
                    <div className="relative leading-[24px] font-medium">
                      Can other people drive a car that I booked?
                    </div>
                    <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                      <img
                        className="w-4 h-4 relative overflow-hidden shrink-0 mix-blend-normal"
                        alt=""
                        src="/icon-44.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="self-stretch box-border flex flex-row items-start justify-start mix-blend-normal max-w-full border-t-[1px] border-solid border-gainsboro-100 border-b-[1px]">
                  <div className="flex-1 flex flex-row items-start justify-between py-4 px-0 box-border mix-blend-normal max-w-full gap-[20px]">
                    <div className="relative leading-[24px] font-medium">
                      What is the cancellation policy on Kimi?
                    </div>
                    <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                      <img
                        className="w-4 h-4 relative overflow-hidden shrink-0 mix-blend-normal"
                        alt=""
                        src="/icon-44.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[504px] shrink-0 flex flex-col items-start justify-start pt-0 px-0 pb-[57px] box-border mix-blend-normal min-h-[229px]">
                <div className="self-stretch box-border flex flex-row items-start justify-start mix-blend-normal max-w-full border-t-[1px] border-solid border-gainsboro-100">
                  <div className="flex-1 flex flex-row items-start justify-between py-4 px-0 box-border mix-blend-normal max-w-full gap-[20px]">
                    <div className="relative leading-[24px] font-medium">
                      What happens if I have an accident?
                    </div>
                    <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                      <img
                        className="w-4 h-4 relative overflow-hidden shrink-0 mix-blend-normal"
                        alt=""
                        src="/icon-44.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="self-stretch box-border flex flex-row items-start justify-start mix-blend-normal max-w-full border-t-[1px] border-solid border-gainsboro-100">
                  <div className="flex-1 flex flex-row items-start justify-between py-4 px-0 box-border mix-blend-normal max-w-full gap-[20px]">
                    <div className="relative leading-[24px] font-medium">
                      Can I get my car delivered to me?
                    </div>
                    <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                      <img
                        className="w-4 h-4 relative overflow-hidden shrink-0 mix-blend-normal"
                        alt=""
                        src="/icon-44.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="self-stretch box-border flex flex-row items-start justify-start mix-blend-normal max-w-full border-t-[1px] border-solid border-gainsboro-100 border-b-[1px]">
                  <div className="flex-1 flex flex-row items-start justify-between py-4 px-0 box-border mix-blend-normal max-w-full gap-[20px]">
                    <div className="relative leading-[24px] font-medium">
                      How do I get discounts when booking a car?
                    </div>
                    <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                      <img
                        className="w-4 h-4 relative overflow-hidden shrink-0 mix-blend-normal"
                        alt=""
                        src="/icon-44.svg"
                      />
                    </div>
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

export default FrameComponent;
