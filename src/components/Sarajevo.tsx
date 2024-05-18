import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type SarajevoType = {
  sarajevoImage?: string;
  sarajevo?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];

  /** Action props */
  onSarajevoContainerClick?: () => void;
};

const Sarajevo: FunctionComponent<SarajevoType> = ({
  sarajevoImage,
  sarajevo,
  propMinWidth,
  onSarajevoContainerClick,
}) => {
  const sarajevoStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div
      className="shadow-[0px_0px_1px_rgba(35,_31,_32,_0.1),_0px_2px_4px_rgba(35,_31,_32,_0.2)] rounded-lg bg-white overflow-hidden flex flex-col items-start justify-start pt-4 px-[18px] pb-6 gap-[8px] mix-blend-normal cursor-pointer text-left text-base-1 text-kimi-yellow font-inter"
      onClick={onSarajevoContainerClick}
    >
      <img
        className="w-[120px] h-[120px] relative overflow-hidden shrink-0 object-contain mix-blend-normal"
        loading="lazy"
        alt=""
        src={sarajevoImage}
      />
      <div className="flex flex-row items-start justify-start py-0 pr-[26px] pl-[27.5px]">
        <div
          className="relative leading-[20px] font-black inline-block min-w-[66px]"
          style={sarajevoStyle}
        >
          {sarajevo}
        </div>
      </div>
    </div>
  );
};

export default Sarajevo;
