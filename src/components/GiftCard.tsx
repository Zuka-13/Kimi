import { FunctionComponent } from "react";

const GiftCard: FunctionComponent = () => {

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
                        <div className="relative leading-[24px] inline-block max-w-full z-[2]">
                        Introducing Kimi gift cards! Give the gift of exploration<br/>
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
                </div>
            </section>
        );
    };


export default GiftCard;
