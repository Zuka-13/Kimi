import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type MakeModelType = {
  model?: string;
  trip?: string;
  location?: string;
  price?: string;
  discount?: string;
  img?: string;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propPadding?: CSSProperties["padding"];
  propFlex?: CSSProperties["flex"];
  propMinWidth?: CSSProperties["minWidth"];
  propPadding1?: CSSProperties["padding"];
  propMinWidth1?: CSSProperties["minWidth"];
};

const MakeModel: FunctionComponent<MakeModelType> = ({
  model,
  trip,
  location,
  price,
  discount,
  img,
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

  const locationButtonStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const locationStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  const preDiscountPrice = useMemo(() => {
    if (price && discount) {
      const priceValue = parseFloat(price.replace(/[^0-9.-]+/g, ""));
      const discountValue = parseFloat(discount.replace(/[^0-9.-]+/g, ""));
      return `$${(priceValue + discountValue).toFixed(2)}`;
    }
    return null;
  }, [price, discount]);

  return (
    <div
                  className="self-stretch rounded-xl bg-white box-border overflow-hidden flex flex-row items-start justify-start py-0 px-px gap-[16px] mix-blend-normal max-w-full cursor-pointer text-base-4 text-gray-100 border-[1px] border-solid border-gainsboro-100 mq750:flex-wrap"
                 
                >
    <div
      className="flex flex-row items-start justify-start gap-[10px] max-w-full text-left text-xl-2 text-gray-300 font-inter"
      style={makeModelStyle}
    >
      <div className="w-[291px] rounded-tl-xl rounded-tr-none rounded-br-none rounded-bl-xl overflow-hidden shrink-0 flex flex-row items-start justify-start mix-blend-normal min-w-[291px] mq750:flex-1">
        <div className="h-44 flex-1 rounded-t-xl rounded-b-none bg-gainsboro-200 flex flex-row items-start justify-start relative mix-blend-normal z-[1]">
          <div className="h-16 w-[291px] absolute !m-[0] right-[-291px] bottom-[48px] [background:linear-gradient(0deg,_rgba(0,_0,_0,_0.6),_rgba(0,_0,_0,_0))] opacity-[0.72] mix-blend-normal" />
          <img
            className="h-44 w-[291px] relative overflow-hidden shrink-0 object-cover mix-blend-normal z-[1]"
            alt=""
            src={img}
          />
          <div className="self-stretch w-[291px] relative rounded-t-xl rounded-b-none bg-gainsboro-200 hidden mix-blend-normal z-[2]" />
        </div>
      </div>

      <div className="flex-1 flex flex-col items-start justify-start gap-[10px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[5px] pl-0 box-border gap-[4px] max-w-full mq450:flex-wrap">
            <div className="flex-1 flex flex-col items-start justify-start gap-[2px] min-w-[265px] max-w-full">
              <div className="self-stretch overflow-hidden flex flex-row items-end justify-start pt-0 px-0 pb-[0.5px] mix-blend-normal">
                <div className="relative tracking-[-0.2px] leading-[28px] font-black mq450:text-base mq450:leading-[22px]">
                  {model}
                </div>
              </div>
              <div className="flex flex-col items-start justify-start py-0 pr-5 pl-0 gap-[2px] text-base-4">
                <div className="flex flex-row items-start justify-start py-0 pr-px pl-0 gap-[2.1px]">
                  <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                    <div className="relative leading-[24px] inline-block min-w-[23px]">
                      5.0
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
                    <img
                      className="w-4 h-4 relative overflow-hidden shrink-0 mix-blend-normal"
                      alt=""
                      src="/icon-10.svg"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start pt-1 pb-0 pr-[5.8px] pl-0">
                    <div className="relative leading-[24px] inline-block min-w-[67px]">
                      {trip}
                    </div>
                  </div>
                  <div className="rounded flex flex-row items-start justify-start py-1 pr-px pl-0 gap-[4px] mix-blend-normal text-xs-4">
                    <img
                      className="h-6 w-6 relative overflow-hidden shrink-0 mix-blend-normal"
                      alt=""
                      src="/icon-12.svg"
                    />
                    <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                      <div className="relative leading-[16px] font-medium inline-block min-w-[71px]">
                        All-Star Host
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[4px] text-xs-4">
                  <img
                    className="h-4 w-4 relative overflow-hidden shrink-0 mix-blend-normal min-h-[16px]"
                    alt=""
                    src="/icon-121.svg"
                  />
                  <div
                    className="relative leading-[16px] font-medium inline-block min-w-[49px]"
                    style={locationStyle}
                  >
                    {location}
                  </div>
                </div>
              </div>
            </div>
            <div className="h-10 w-10 rounded-lg overflow-hidden shrink-0 flex flex-col items-start justify-start pt-2 px-[19.5px] pb-[31px] box-border relative gap-[8px] mix-blend-normal text-base-8 text-kimi-yellow">
              <img
                className="w-6 h-6 absolute !m-[0] top-[calc(50%_-_12px)] left-[calc(50%_-_12px)] overflow-hidden shrink-0 mix-blend-normal"
                alt=""
                src="/icon-111.svg"
              />
            </div>
          </div>
        </div>
        <div
          className="flex flex-row items-start justify-between gap-[20px] text-base-4 text-gray-100 mq450:flex-wrap"
          style={locationButtonStyle}
        >
          <button className="cursor-pointer [border:none] py-1 px-2 bg-mintcream rounded-sm flex flex-row items-start justify-start gap-[4px] mix-blend-normal">
            <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
              <img
                className="w-3 h-3 relative overflow-hidden shrink-0 mix-blend-normal"
                alt=""
                src="/icon-13.svg"
              />
            </div>
            <div className="relative text-xs-4 leading-[16px] font-medium font-inter text-seagreen text-left inline-block min-w-[51px]">
              Save {discount}
            </div>
          </button>
          <div className="flex flex-col items-start justify-start">
            <div className="flex flex-row items-start justify-start py-0 pr-0 pl-[10.7px]">
              <div className="flex flex-row items-start justify-start gap-[3px]">
                <div className="relative [text-decoration:line-through] leading-[24px] inline-block min-w-[36px] whitespace-nowrap">
                  {preDiscountPrice}
                </div>
                <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0 text-base-6 text-gray-300">
                  <div className="relative leading-[20px] font-black inline-block min-w-[81px]">
                    {price}/day
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default MakeModel;
