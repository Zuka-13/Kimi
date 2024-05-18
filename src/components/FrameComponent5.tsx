import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type FrameComponent5Type = {
  edwardN?: string;
  tripsJoinedJun2022?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propWidth1?: CSSProperties["width"];
};

const FrameComponent5: FunctionComponent<FrameComponent5Type> = ({
  edwardN,
  tripsJoinedJun2022,
  propWidth,
  propWidth1,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const edwardNStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  return (
    <div
      className="w-[253px] h-[78px] flex flex-row items-start justify-start gap-[16px] text-left text-xs-8 text-gray-300 font-inter"
      style={frameDivStyle}
    >
      <img
        className="h-10 w-20 relative mix-blend-normal"
        alt=""
        src="/image-seopages1vtat8bstyledimage-3.svg"
      />
      <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[5px]">
        <div
          className="w-[76px] h-5 relative text-base-1 leading-[20px] font-black flex items-center"
          style={edwardNStyle}
        >
          {edwardN}
        </div>
        <div className="w-32 flex-1 rounded flex flex-row items-start justify-start py-2 pr-[27px] pl-7 box-border relative mix-blend-normal">
          <div className="self-stretch flex-1 relative leading-[16px] font-medium flex items-center">
            All-Star Host
          </div>
          <img
            className="h-6 w-6 absolute !m-[0] top-[calc(50%_-_12px)] left-[0px] overflow-hidden shrink-0 mix-blend-normal"
            alt=""
            src="/icon-12.svg"
          />
        </div>
        <div className="self-stretch h-4 relative leading-[16px] font-medium flex items-center">
          {tripsJoinedJun2022}
        </div>
      </div>
    </div>
  );
};

export default FrameComponent5;
