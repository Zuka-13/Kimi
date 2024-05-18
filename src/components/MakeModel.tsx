import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type MakeModelType = {
  hondaCivic2021?: string;
  trip?: string;
  salisbury?: string;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propPadding?: CSSProperties["padding"];
  propFlex?: CSSProperties["flex"];
  propMinWidth?: CSSProperties["minWidth"];
  propPadding1?: CSSProperties["padding"];
  propMinWidth1?: CSSProperties["minWidth"];
};

const MakeModel: FunctionComponent<MakeModelType> = ({
  hondaCivic2021,
  trip,
  salisbury,
  propAlignSelf,
  propPadding,
  propFlex,
  propMinWidth,
  propPadding1,
  propMinWidth1,
}) => {
  const makeModelStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      padding: propPadding,
      flex: propFlex,
    };
  }, [propAlignSelf, propPadding, propFlex]);

  const tripStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const salisburyButtonStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const salisburyStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div
      className="self-stretch flex flex-col items-start justify-start py-0 pr-[3px] pl-0 box-border gap-[2px] max-w-full text-left text-xl-2 text-gray-300 font-inter"
      style={makeModelStyle}
    >
      <div className="self-stretch flex flex-row items-start justify-start gap-[4px] max-w-full mq450:flex-wrap">
        <div className="flex-1 flex flex-col items-start justify-start gap-[2px] min-w-[265px] max-w-full">
          <div className="self-stretch overflow-hidden flex flex-row items-end justify-start pt-0 px-0 pb-[0.5px] mix-blend-normal">
            <div className="relative tracking-[-0.2px] leading-[28px] font-black mq450:text-base mq450:leading-[22px]">
              {hondaCivic2021}
            </div>
          </div>
          <div className="flex flex-row items-start justify-start py-0 pr-5 pl-0 gap-[3px] text-base-4">
            <div className="relative leading-[24px] inline-block min-w-[23px]">
              5.0
            </div>
            <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
              <img
                className="w-4 h-4 relative overflow-hidden shrink-0 mix-blend-normal"
                alt=""
                src="/icon-10.svg"
              />
            </div>
            <div
              className="relative leading-[24px] inline-block min-w-[47px]"
              style={tripStyle}
            >
              {trip}
            </div>
          </div>
        </div>
        <div className="h-10 w-10 rounded-lg overflow-hidden shrink-0 flex flex-col items-start justify-start pt-2 px-[19.5px] pb-[31px] box-border relative gap-[8px] mix-blend-normal text-base-8 text-kimi-yellow">
          <img
            className="w-6 h-6 absolute !m-[0] top-[calc(50%_-_12px)] left-[calc(50%_-_12px)] overflow-hidden shrink-0 mix-blend-normal"
            alt=""
            src="/icon-111.svg"
          />
          <div className="mt-[-9px] ml-[-20.5px] w-px h-px overflow-hidden shrink-0 flex flex-col items-start justify-start mix-blend-normal">
            <div className="h-6 relative leading-[24px] inline-block whitespace-nowrap shrink-0">{`Add `}</div>
            <div className="h-6 relative leading-[24px] inline-block whitespace-nowrap shrink-0">{`car `}</div>
            <div className="h-6 relative leading-[24px] inline-block whitespace-nowrap shrink-0">{`to `}</div>
            <div className="h-6 relative leading-[24px] inline-block shrink-0">
              favorites
            </div>
          </div>
          <div className="self-stretch h-px overflow-hidden shrink-0 flex flex-row items-start justify-start relative mix-blend-normal z-[1] text-[15.6px] text-darkslategray-100">
            <b className="h-6 w-[154px] absolute !m-[0] right-[-153px] bottom-[-23px] tracking-[0.2px] leading-[24px] inline-block z-[2]">
              Add car to favorites
            </b>
          </div>
        </div>
      </div>
      <div
        className="flex flex-row items-start justify-start gap-[4px] text-xs-4"
        style={salisburyButtonStyle}
      >
        <img
          className="h-4 w-4 relative overflow-hidden shrink-0 mix-blend-normal min-h-[16px]"
          alt=""
          src="/icon-121.svg"
        />
        <div
          className="relative leading-[16px] font-medium inline-block min-w-[51px]"
          style={salisburyStyle}
        >
          {salisbury}
        </div>
      </div>
    </div>
  );
};

export default MakeModel;
