import { FunctionComponent } from "react";
import FooterDesktop from "./FooterDesktop";

const Footer1: FunctionComponent = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-end py-0 pr-[3.9px] pl-[5px] box-border max-w-full">
      <FooterDesktop />
    </section>
  );
};

export default Footer1;
