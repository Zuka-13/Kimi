import { FunctionComponent } from "react";
import ReviewCardContent from "./ReviewCardContent";
import ReviewCardInfo from "./ReviewCardInfo";


const ReviewSection: FunctionComponent = () => {

    return (
        <section className="self-stretch flex flex-row items-start justify-center pt-0 pb-[104px] pr-5 pl-[50px] box-border max-w-full text-left text-8xl text-white font-inter mq450:pb-[29px] mq450:box-border mq1125:pb-11 mq1125:box-border mq1325:pl-[25px] mq1325:pb-[68px] mq1325:box-border">
            <div className="w-[1075px] flex flex-col items-start justify-start gap-[49.5px] max-w-full mq800:gap-[25px]">


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
                        <ReviewCardInfo
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
                        <ReviewCardInfo
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
             </div>
        </section>
        );
    };


export default ReviewSection;