import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import FinancialFuture from "../components/FinancialFuture";
import DivSeoPagesE9c47y from "../components/DivSeoPagesE9c47y";
import CallToActionRentOutCar from "../components/CallToActionRentOutCar";

const RentYourCar: FunctionComponent = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onDestinationsTextClick = useCallback(() => {
    navigate("/destinations");
  }, [navigate]);

  const onAboutTextClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  const onContactTextClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  const onLinkSeoPages1uv25j8ButtonClick = useCallback(() => {
    navigate("/destinations");
  }, [navigate]);

  const onLinkSeoPages1uv25j8Button1Click = useCallback(() => {
    navigate("/rent-your-car");
  }, [navigate]);

  return (
    <div className="w-full relative bg-darkslategray-200 flex flex-col items-start justify-start pt-0 px-0 pb-[314.4px] box-border gap-[43px] mix-blend-normal leading-[normal] tracking-[normal] mq750:gap-[21px]">
      <FrameComponent3
        onHomeTextClick={onHomeTextClick}
        onDestinationsTextClick={onDestinationsTextClick}
        onAboutTextClick={onAboutTextClick}
        onContactTextClick={onContactTextClick}
        onLinkSeoPages1uv25j8ButtonClick={onLinkSeoPages1uv25j8ButtonClick}
        onLinkSeoPages1uv25j8Button1Click={onLinkSeoPages1uv25j8Button1Click}
      />
      <FrameComponent2 />
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
