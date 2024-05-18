import { FunctionComponent } from "react";
import FooterDesktop from "./FooterDesktop";

const Footer: FunctionComponent = () => {
  return (
    <footer className="self-stretch flex flex-row items-start justify-start py-0 pr-1 pl-[5px] box-border max-w-full">
      <FooterDesktop />
    </footer>
  );
};

export default Footer;
