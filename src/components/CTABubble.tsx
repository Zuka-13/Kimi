import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const CTABubble: FunctionComponent = () => {

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
                <div className="flex flex-row items-start justify-start py-0 pr-7 pl-[29.7px]">
                  <div className="relative leading-[24px] z-[1]">
                    Down the street or across the<br />
                    country, find the perfect vehicle<br />
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
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[71px] pl-[69.6px] mq450:pl-5 mq450:pr-5 mq450:box-border">
                    <div className="relative leading-[24px] inline-block min-w-[127px] z-[1]">
                      Accelerate your entrepreneurship<br />
                      and start building a small car sharing<br />
                      business on Kimi.
                    </div>
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

export default CTABubble;