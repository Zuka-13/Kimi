import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type ReviewCardContentType = {
  imageSeoPages1vtat8bStyle?: string;
  karissaJon?: string;
  tripsJoinedMay2021?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
};

const ReviewCardContent: FunctionComponent<ReviewCardContentType> = ({
  imageSeoPages1vtat8bStyle,
  karissaJon,
  tripsJoinedMay2021,
  propMinWidth,
}) => {
  const karissaJonStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className="flex flex-row items-start justify-start gap-[8px] text-left text-xs-8 text-gray-300 font-inter">
      <div className="flex flex-col items-start justify-start gap-[26px]">
        <img
          className="w-20 h-20 relative rounded-15965xl overflow-hidden shrink-0 object-contain mix-blend-normal"
          loading="lazy"
          alt=""
          src={imageSeoPages1vtat8bStyle}
        />
        <div className="flex flex-row items-start justify-start gap-[2px]">
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0 mix-blend-normal min-h-[16px]"
            alt=""
            src="/icon-7.svg"
          />
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0 mix-blend-normal min-h-[16px]"
            alt=""
            src="/icon-7.svg"
          />
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0 mix-blend-normal min-h-[16px]"
            alt=""
            src="/icon-7.svg"
          />
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0 mix-blend-normal min-h-[16px]"
            alt=""
            src="/icon-7.svg"
          />
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0 mix-blend-normal min-h-[16px]"
            alt=""
            src="/icon-7.svg"
          />
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-[5px]">
        <div
          className="relative text-base-1 leading-[20px] font-black inline-block min-w-[115px]"
          style={karissaJonStyle}
        >
          {karissaJon}
        </div>
        <div className="rounded flex flex-row items-start justify-start py-1 px-0 gap-[4px] mix-blend-normal">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 mix-blend-normal [debug_commit:1de1738]"
            alt=""
            src="/icon-12.svg"
          />
          <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
            <div className="relative leading-[16px] font-medium inline-block min-w-[73px] shrink-0 [debug_commit:1de1738]">
              All-Star Host
            </div>
          </div>
        </div>
        <div className="relative leading-[16px] font-medium">
          {tripsJoinedMay2021}
        </div>
      </div>
    </div>
  );
};

export default ReviewCardContent;
