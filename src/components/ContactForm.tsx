import { FunctionComponent } from "react";

const ContactForm: FunctionComponent = () => {
  return (
    <div className="w-[1185px] flex flex-row items-start justify-end relative min-h-[666px] max-w-full text-left text-17xl text-white font-noto-sans mq450:h-auto">
      <div className="w-[537px] !m-[0] absolute top-[13px] left-[0px] flex flex-row items-start justify-start min-h-[626px] max-w-full">
        <div className="h-[133.2px] w-[61.6px] !m-[0] absolute bottom-[237.6px] left-[18px] shadow-[0px_0px_30px_rgba(0,_0,_0,_0.07)] bg-whitesmoke-300 flex flex-col items-start justify-start pt-[67px] px-[18px] pb-[65px] box-border gap-[10px]">
          <div className="w-[61.6px] h-[61.6px] relative rounded-31xl hidden" />
          <img
            className="w-[61.6px] h-[61.6px] relative rounded-31xl shrink-0"
            loading="lazy"
            alt=""
            src="/link.svg"
          />
          <img
            className="w-[61.6px] h-[61.6px] relative rounded-31xl shrink-0"
            alt=""
            src="/link-1.svg"
          />
        </div>
        <div className="h-[429px] w-[368.4px] shadow-[0px_0px_20px_rgba(33,_33,_33,_0.25)] rounded-8xs bg-orange-100 flex flex-col items-start justify-start pt-[42px] pb-[155px] pr-[27.6px] pl-11 box-border gap-[64px] max-w-full z-[1] mq450:h-auto">
          <div className="w-[363px] flex flex-row items-start justify-start py-0 pr-0 pl-[3px] box-border max-w-[123%] shrink-0">
            <div className="flex-1 flex flex-col items-start justify-start gap-[20px] max-w-full">
              <h2 className="m-0 self-stretch relative text-inherit leading-[49px] font-black font-inherit mq1050:text-10xl mq1050:leading-[37px] mq450:text-3xl mq450:leading-[28px]">
                Let's talk with us
              </h2>
              <div className="self-stretch h-[57px] relative text-xl leading-[32px] font-body1 inline-block shrink-0 mq450:text-base mq450:leading-[26px]">
                Questions, comments, or suggestions? Simply fill in the form and
                we’ll be in touch shortly.
              </div>
            </div>
          </div>
          <div className="w-[368.4px] flex flex-col items-start justify-start max-w-[125%] shrink-0 text-lg">
            <div className="w-[352px] h-[41px] flex flex-row items-start justify-start py-0 px-1.5 box-border max-w-full">
              <div className="self-stretch flex-1 flex flex-row items-start justify-start py-5 px-0 box-border max-w-full">
                <div className="self-stretch flex-1 relative box-border max-w-full border-t-[1px] border-solid border-silver-200" />
              </div>
            </div>
            <div className="self-stretch flex flex-row flex-wrap items-end justify-start gap-[4px] max-w-full">
              <div className="flex flex-col items-start justify-start gap-[71.5px]">
                <div className="flex flex-row items-start justify-start py-0 pr-[9px] pl-[3px]">
                  <img
                    className="h-6 w-[18.4px] relative"
                    loading="lazy"
                    alt=""
                    src="/group-3893.svg"
                  />
                </div>
                <div className="flex flex-col items-end justify-start gap-[48.5px]">
                  <img
                    className="w-6 h-6 relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/noun-phone-3612570-1.svg"
                  />
                  <div className="flex flex-row items-start justify-end py-0 pr-1 pl-0">
                    <img
                      className="h-[26px] w-[26px] relative overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/noun-email-247564-1.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[46px] min-w-[217px] max-w-full">
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[2.4px] box-border max-w-full">
                  <div className="flex-1 relative leading-[26px] font-black inline-block max-w-full">
                    Džemala Bijedića 160j, 7100 Sarajevo
                  </div>
                </div>
                <div className="w-[187px] flex flex-row items-start justify-start py-0 px-1.5 box-border">
                  <div className="flex-1 relative leading-[29px] font-black whitespace-nowrap">
                    +387 61 111 111
                  </div>
                </div>
                <div className="w-[222px] relative leading-[26px] font-black inline-block whitespace-nowrap">
                  contact@kimi.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[435px] w-[465px] shadow-[0px_0px_20px_rgba(0,_0,_0,_0.1)] rounded-3xs bg-white box-border flex flex-col items-start justify-start py-[115.5px] px-[100px] gap-[40px] max-w-full z-[2] text-base text-gray-3 font-body1 border-[1px] border-solid border-gray-4 mq450:pl-5 mq450:pr-5 mq450:box-border mq750:h-auto mq750:gap-[20px] mq750:py-[75px] mq750:px-[50px] mq750:box-border">
        <div className="w-[465px] flex flex-col items-start justify-start gap-[20px] max-w-[177%] shrink-0">
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[21px]">
            <div className="flex-1 rounded-3xs bg-white box-border flex flex-row items-start justify-start pt-2.5 px-5 pb-[11px] min-w-[144px] border-[1px] border-solid border-kimi-yellow">
              <div className="h-[50px] w-[222px] relative rounded-3xs bg-white box-border hidden border-[1px] border-solid border-kimi-yellow" />
              <div className="h-[25px] w-[37px] flex flex-row items-start justify-start">
                <input
                  className="w-full [border:none] [outline:none] font-body1 text-base bg-[transparent] h-[25px] flex-1 relative leading-[26px] text-money-green text-left inline-block min-w-[22px] p-0 z-[1]"
                  placeholder="John"
                  type="text"
                />
                <div className="h-[26px] w-px relative box-border z-[1] border-r-[1px] border-solid border-black" />
              </div>
            </div>
            <div className="flex-1 rounded-3xs bg-whitesmoke-100 box-border flex flex-row items-start justify-start pt-2.5 px-5 pb-[11px] min-w-[144px] border-[1px] border-solid border-gray-3">
              <div className="h-[50px] w-[222px] relative rounded-3xs bg-whitesmoke-100 box-border hidden border-[1px] border-solid border-gray-3" />
              <input
                className="w-[99px] [border:none] [outline:none] font-body1 text-base bg-[transparent] h-[25px] relative leading-[26px] text-gray-3 text-left inline-block p-0 z-[1]"
                placeholder="Last Name*"
                type="text"
              />
            </div>
          </div>
          <div className="self-stretch rounded-3xs bg-whitesmoke-100 box-border flex flex-row items-start justify-start pt-[11px] px-5 pb-2.5 max-w-full border-[1px] border-solid border-gray-3">
            <div className="h-[50px] w-[465px] relative rounded-3xs bg-whitesmoke-100 box-border hidden max-w-full border-[1px] border-solid border-gray-3" />
            <input
              className="w-32 [border:none] [outline:none] font-body1 text-base bg-[transparent] h-[25px] relative leading-[26px] text-gray-3 text-left inline-block p-0 z-[1]"
              placeholder="Email*"
              type="text"
            />
          </div>
          <div className="self-stretch rounded-3xs bg-whitesmoke-100 box-border flex flex-row items-start justify-start pt-[11px] px-5 pb-2.5 max-w-full border-[1px] border-solid border-gray-3">
            <div className="h-[50px] w-[465px] relative rounded-3xs bg-whitesmoke-100 box-border hidden max-w-full border-[1px] border-solid border-gray-3" />
            <input
              className="w-32 [border:none] [outline:none] font-body1 text-base bg-[transparent] h-[25px] relative leading-[26px] text-gray-3 text-left inline-block p-0 z-[1]"
              placeholder="Phone Number*"
              type="text"
            />
          </div>
          <div className="self-stretch h-[140px] rounded-3xs bg-whitesmoke-100 box-border flex flex-col items-start justify-start p-5 relative max-w-full border-[1px] border-solid border-gray-3">
            <div className="w-[465px] h-[140px] relative rounded-3xs bg-whitesmoke-100 box-border hidden max-w-full z-[0] border-[1px] border-solid border-gray-3" />
            <div className="w-[138px] relative leading-[26px] inline-block z-[1]">
              Your message...
            </div>
            <img
              className="w-[22px] h-[22px] absolute !m-[0] right-[4px] bottom-[4px] object-contain z-[1]"
              alt=""
            />
            <img
              className="w-[13px] h-[13px] absolute !m-[0] right-[5px] bottom-[5px] object-contain z-[2]"
              loading="lazy"
              alt=""
            />
          </div>
        </div>
        <button className="cursor-pointer py-2 px-5 bg-kimi-yellow w-[465px] rounded-3xl box-border flex flex-row items-start justify-center whitespace-nowrap max-w-[177%] shrink-0 border-[1px] border-solid border-kimi-yellow hover:bg-darkgoldenrod-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkgoldenrod-100">
          <div className="relative text-lg font-semibold font-body1 text-white text-left inline-block min-w-[123px]">
            Send Message
          </div>
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
