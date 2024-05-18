import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const DestinationCardTwo: FunctionComponent = () => {
  const navigate = useNavigate();

  const onLinkSeoPagesOt7gc8ContainerClick = useCallback(() => {
    navigate("/destinations");
  }, [navigate]);

  return (
    <section className="self-stretch flex flex-row items-start justify-center pt-0 pb-[53px] pr-5 pl-[67px] box-border max-w-full text-left text-23xl text-white font-inter mq800:pl-[33px] mq800:box-border">
      <div className="flex flex-col items-start justify-start gap-[24.3px] max-w-full">
        <div className="flex flex-row items-start justify-start py-0 pr-[72px] pl-[72.2px] box-border max-w-full font-noto-serif mq800:pl-9 mq800:pr-9 mq800:box-border">
          <h3 className="m-0 relative text-inherit tracking-[-0.5px] leading-[56px] font-black font-inherit z-[1] mq450:text-6xl mq450:leading-[34px] mq800:text-15xl mq800:leading-[45px]">
            Fuel your daydreams
          </h3>
        </div>
        <div className="relative text-base-4 leading-[24px]">
          Explore endless possibilities with our fleet of rental cars and fuel
          your daydreams today!
        </div>
        <div className="w-[602.7px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-mid-3">
          <div
            className="rounded-lg bg-kimi-yellow flex flex-row items-start justify-start py-0 pr-8 pl-[33.6px] mix-blend-normal whitespace-nowrap cursor-pointer border-[1px] border-solid border-kimi-yellow"
            onClick={onLinkSeoPagesOt7gc8ContainerClick}
          >
            <b className="relative leading-[49px]">Explore our Fleet</b>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DestinationCardTwo;
