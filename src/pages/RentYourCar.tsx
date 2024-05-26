import { FunctionComponent } from "react";
import FinancialFuture from "../components/FinancialFuture";
import DivSeoPagesE9c47y from "../components/DivSeoPagesE9c47y";
import CallToActionRentOutCar from "../components/CallToActionRentOutCar";
import HeaderDesktop from "../components/HeaderDesktop";
import Button from "../components/Button";

const RentYourCar: FunctionComponent = () => {
  
  return (
    <div className="w-full relative bg-darkslategray-200 flex flex-col items-start justify-start pt-0 px-0 pb-[314.4px] box-border gap-[43px] mix-blend-normal leading-[normal] tracking-[normal] mq750:gap-[21px]">
      <HeaderDesktop />
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
        
        <Button text={"Get Started"}
        route={"../login"}
        color={"85bb65"} />
      </div>
    </section>
      <img
        className="ml-[-1px] mb-[35px] self-stretch relative max-w-full overflow-hidden max-h-full object-cover mix-blend-normal"
        alt=""
        src="/image-eiig1vx0@2x.png"
      />
      <FinancialFuture />
      <DivSeoPagesE9c47y />
      <CallToActionRentOutCar />
    </div>
  );
};

export default RentYourCar;
