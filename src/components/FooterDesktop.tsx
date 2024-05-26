import { FunctionComponent } from "react";

const FooterDesktop: FunctionComponent = () => {
  return (
    <div className="flex-1 bg-darkslategray-200 box-border flex flex-row items-start justify-center pt-[23px] pb-9 pr-5 pl-[29px] mix-blend-normal max-w-full text-justify text-xs-8 text-white font-inter border-t-[1px] border-solid border-darkslategray-200 border-b-[1px]">
      <div className="w-[940px] flex flex-col items-start justify-center gap-[16px] mix-blend-normal max-w-full">
        <div className="flex flex-col items-start justify-center mix-blend-normal max-w-full">
          <div className="relative leading-[16px] font-medium">
            * Any personal insurance you may have that covers damage to the host’s vehicle would kick in before your protection plan, except in limited situations for trips booked<br />
            in Maryland, but this protects your own wallet. Liability insurance is provided under a policy issued to Kimi by Travelers Excess and Surplus Lines Company. Terms,<br />
            conditions, and exclusions apply. The policy does not provide coverage for damage to a host’s vehicle.
            </div>
        </div>

        
        <div className="self-stretch flex flex-col items-start justify-start mix-blend-normal max-w-full">
          <div className="relative leading-[16px] font-medium inline-block max-w-full">
            <span>{`For questions or information about the third party liability insurance for trips in the US, consumers in Maryland and the licensed states listed `}</span>
            <span className="text-kimi-yellow">here</span>
            <span> may contact Kimi</span>
          </div>
          <div className="relative leading-[16px] font-medium inline-block max-w-full">
            <span>{`Insurance Agency at (415) 508-0283 or claims@kimi.agency. For questions about how damage to a host’s vehicle is handled, visit the `}</span>
            <span className="text-kimi-yellow">Kimi Support</span>
            <span> site.</span>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start mix-blend-normal max-w-full">
          <div className="relative leading-[16px] font-medium inline-block max-w-full">{`When a trip is booked in the state of Washington, physical damage to the host’s vehicle is covered by insurance purchased by Kimi, but the Kimi insurance does not `}</div>
          <div className="relative leading-[16px] font-medium inline-block max-w-full">
            change the contractual responsibilities of hosts or guests with
            respect to physical damage to a host’s vehicle.
          </div>
        </div>
        <div className="relative leading-[16px] font-medium">
          ** Terms, conditions, and exclusions apply.
        </div>
        <div className="relative leading-[16px] font-medium inline-block max-w-full">
          <span>{`*** Review the `}</span>
          <span className="text-kimi-yellow">
            Guest Product Disclosure Statement
          </span>
          <span> for more information.</span>
        </div>
      </div>
    </div>
  );
};

export default FooterDesktop;
