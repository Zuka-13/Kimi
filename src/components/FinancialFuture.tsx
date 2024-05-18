import { FunctionComponent } from "react";
import FrameComponent1 from "./FrameComponent1";

const FinancialFuture: FunctionComponent = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[69px] box-border max-w-full text-left text-base-4 text-white font-inter lg:pb-[29px] lg:box-border mq1050:pb-5 mq1050:box-border">
      <FrameComponent1 />
    </section>
  );
};

export default FinancialFuture;
