import { FunctionComponent, useCallback } from "react";
import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import SearchComponent from "../components/SearchComponent";
import MakeModel from "../components/MakeModel";
import Footer from "../components/Footer";

const Destinations: FunctionComponent = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onDestinationsTextClick = useCallback(() => {
    navigate("/destinations");
  }, [navigate]);

  const onAboutTextClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  const onContactTextClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  const onLinkSeoPages1uv25j8ButtonClick = useCallback(() => {
    navigate("/destinations");
  }, [navigate]);

  const onLinkSeoPages1uv25j8Button1Click = useCallback(() => {
    navigate("/rent-your-car");
  }, [navigate]);

  const onLinkCss1o9ktlContainerClick = useCallback(() => {
    // Please sync "Payment Page" to the project
  }, []);

  const onLinkCss1o9ktlContainer1Click = useCallback(() => {
    // Please sync "Payment Page" to the project
  }, []);

  const onLinkCss1o9ktlContainer2Click = useCallback(() => {
    // Please sync "Payment Page" to the project
  }, []);

  const onLinkCss1o9ktlContainer3Click = useCallback(() => {
    // Please sync "Payment Page" to the project
  }, []);

  return (
    <div className="w-full relative bg-darkslategray-200 flex flex-col items-start justify-start pt-px px-0 pb-[0.3px] box-border gap-[0.5px] mix-blend-normal leading-[normal] tracking-[normal]">
      <div className="self-stretch flex flex-col items-end justify-start py-0 px-0 box-border max-w-full">
        <header className="self-stretch bg-kimi-yellow box-border flex flex-row items-start justify-start pt-[31px] px-5 pb-[18px] gap-[57px] mix-blend-normal max-w-full z-[2] text-center text-xl text-black font-poppins border-b-[1px] border-solid border-silver-300 mq750:gap-[28px]">
          <img
            className="h-[109px] w-56 relative object-contain"
            loading="lazy"
            alt=""
            src="/kimi-logo-2@2x.png"
          />
          <div className="flex-1 flex flex-col items-start justify-start pt-[18px] px-0 pb-0 box-border max-w-full">
            <div className="self-stretch flex flex-row items-end justify-start gap-[31px] mq750:gap-[15px]">
              <div className="w-[133px] flex flex-col items-start justify-start gap-[11px]">
                <b
                  className="self-stretch relative cursor-pointer"
                  onClick={onHomeTextClick}
                >
                  Home
                </b>
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[38px] pl-10">
                  <div className="h-[3px] flex-1 relative box-border border-t-[3px] border-solid border-white" />
                </div>
              </div>
              <div className="w-36 flex flex-col items-start justify-start py-0 pr-[11px] pl-0 box-border gap-[9px]">
                <b
                  className="self-stretch relative cursor-pointer"
                  onClick={onDestinationsTextClick}
                >
                  Destinations
                </b>
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[38px] pl-10">
                  <div className="h-[3px] flex-1 relative box-border border-t-[3px] border-solid border-white" />
                </div>
              </div>
              <div className="w-[149px] flex flex-col items-start justify-end pt-0 pb-px pr-4 pl-0 box-border">
                <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                  <b
                    className="self-stretch relative cursor-pointer"
                    onClick={onAboutTextClick}
                  >
                    About
                  </b>
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[38px] pl-10">
                    <div className="h-[3px] flex-1 relative box-border border-t-[3px] border-solid border-white" />
                  </div>
                </div>
              </div>
              <div className="w-[159px] flex flex-col items-start justify-end pt-0 pb-px pr-[26px] pl-0 box-border">
                <div className="self-stretch flex flex-col items-start justify-start gap-[9px]">
                  <b
                    className="self-stretch relative cursor-pointer"
                    onClick={onContactTextClick}
                  >
                    Contact
                  </b>
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[38px] pl-10">
                    <div className="h-[3px] flex-1 relative box-border border-t-[3px] border-solid border-white" />
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-0.5">
                <button
                  className="cursor-pointer py-[15px] px-[33px] bg-kimi-yellow flex flex-row items-start justify-start mix-blend-normal whitespace-nowrap border-[1px] border-solid border-darkslategray-100 hover:bg-darkgoldenrod-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-dimgray"
                  onClick={onLinkSeoPages1uv25j8ButtonClick}
                >
                  <div className="relative text-xl leading-[25px] font-black font-inter text-darkslategray-100 text-center inline-block min-w-[89px]">
                    Get a car
                  </div>
                </button>
              </div>
              <div className="flex flex-col items-start justify-end pt-0 px-0 pb-0.5">
                <button
                  className="cursor-pointer py-[15px] px-[11px] bg-kimi-yellow flex flex-row items-start justify-start mix-blend-normal whitespace-nowrap border-[1px] border-solid border-darkslategray-100 hover:bg-darkgoldenrod-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-dimgray"
                  onClick={onLinkSeoPages1uv25j8Button1Click}
                >
                  <div className="relative text-xl leading-[25px] font-black font-inter text-darkslategray-100 text-center">
                    Rent your car
                  </div>
                </button>
              </div>
            </div>
          </div>
        </header>
        <main className="self-stretch bg-white overflow-y-auto flex flex-col items-end justify-start pt-0 px-0 pb-[986px] box-border mix-blend-normal max-w-full mt-[-0.5px] text-left text-smi-7 text-gray-200 font-inter lg:pb-[641px] lg:box-border mq450:pb-[271px] mq450:box-border mq1050:h-auto mq1050:pb-[417px] mq1050:box-border">
          <SearchComponent />
          <div className="self-stretch shadow-[0px_2px_9px_-3px_rgba(0,_0,_0,_0.12)] bg-white overflow-hidden shrink-0 flex flex-row items-start justify-start py-2 px-6 gap-[0.1px] mix-blend-normal [debug_commit:1de1738] z-[1] mt-[-20.5px] mq750:flex-wrap">
            <div className="w-[101.6px] flex flex-col items-start justify-start py-0 pr-[7.9px] pl-0 box-border">
              <FormControl
                className="self-stretch h-8 font-inter text-smi-7 text-gray-200 mix-blend-normal"
                variant="outlined"
                sx={{
                  borderRadius: "0px 0px 0px 0px",
                  width: "93.70000000000005px",
                  height: "32px",
                  m: 0,
                  p: 0,
                  "& .MuiInputBase-root": {
                    m: 0,
                    p: 0,
                    minHeight: "32px",
                    justifyContent: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInputLabel-root": {
                    m: 0,
                    p: 0,
                    minHeight: "32px",
                    display: "inline-flex",
                  },
                  "& .MuiMenuItem-root": {
                    m: 0,
                    p: 0,
                    height: "32px",
                    display: "inline-flex",
                  },
                  "& .MuiSelect-select": {
                    m: 0,
                    p: 0,
                    height: "32px",
                    alignItems: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInput-input": { m: 0, p: 0 },
                  "& .MuiInputBase-input": {
                    textAlign: "left",
                    p: "0 !important",
                  },
                }}
              >
                <InputLabel color="primary" />
                <Select color="primary" disableUnderline displayEmpty />
                <FormHelperText />
              </FormControl>
            </div>
            <div className="w-[136.8px] flex flex-col items-start justify-start py-0 pr-[7.9px] pl-0 box-border">
              <FormControl
                className="self-stretch h-8 font-inter text-smi-7 text-gray-200 mix-blend-normal"
                variant="outlined"
                sx={{
                  borderRadius: "0px 0px 0px 0px",
                  width: "128.89999999999986px",
                  height: "32px",
                  m: 0,
                  p: 0,
                  "& .MuiInputBase-root": {
                    m: 0,
                    p: 0,
                    minHeight: "32px",
                    justifyContent: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInputLabel-root": {
                    m: 0,
                    p: 0,
                    minHeight: "32px",
                    display: "inline-flex",
                  },
                  "& .MuiMenuItem-root": {
                    m: 0,
                    p: 0,
                    height: "32px",
                    display: "inline-flex",
                  },
                  "& .MuiSelect-select": {
                    m: 0,
                    p: 0,
                    height: "32px",
                    alignItems: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInput-input": { m: 0, p: 0 },
                  "& .MuiInputBase-input": {
                    textAlign: "left",
                    p: "0 !important",
                  },
                }}
              >
                <InputLabel color="primary" />
                <Select color="primary" disableUnderline displayEmpty />
                <FormHelperText />
              </FormControl>
            </div>
            <div className="w-[121.1px] flex flex-col items-start justify-start py-0 pr-[7.8px] pl-0 box-border">
              <FormControl
                className="self-stretch h-8 font-inter text-smi-7 text-gray-200 mix-blend-normal"
                variant="outlined"
                sx={{
                  borderRadius: "0px 0px 0px 0px",
                  width: "113.30000000000018px",
                  height: "32px",
                  m: 0,
                  p: 0,
                  "& .MuiInputBase-root": {
                    m: 0,
                    p: 0,
                    minHeight: "32px",
                    justifyContent: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInputLabel-root": {
                    m: 0,
                    p: 0,
                    minHeight: "32px",
                    display: "inline-flex",
                  },
                  "& .MuiMenuItem-root": {
                    m: 0,
                    p: 0,
                    height: "32px",
                    display: "inline-flex",
                  },
                  "& .MuiSelect-select": {
                    m: 0,
                    p: 0,
                    height: "32px",
                    alignItems: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInput-input": { m: 0, p: 0 },
                  "& .MuiInputBase-input": {
                    textAlign: "left",
                    p: "0 !important",
                  },
                }}
              >
                <InputLabel color="primary" />
                <Select color="primary" disableUnderline displayEmpty />
                <FormHelperText />
              </FormControl>
            </div>
            <FormControl
              className="h-8 w-[135.2px] font-inter font-bold text-xs-4 text-darkslategray-100 mix-blend-normal"
              variant="outlined"
              sx={{
                borderRadius: "0px 0px 0px 0px",
                width: "135.19999999999982px",
                height: "32px",
                m: 0,
                p: 0,
                "& .MuiInputBase-root": {
                  m: 0,
                  p: 0,
                  minHeight: "32px",
                  justifyContent: "center",
                  display: "inline-flex",
                },
                "& .MuiInputLabel-root": {
                  m: 0,
                  p: 0,
                  minHeight: "32px",
                  display: "inline-flex",
                },
                "& .MuiMenuItem-root": {
                  m: 0,
                  p: 0,
                  height: "32px",
                  display: "inline-flex",
                },
                "& .MuiSelect-select": {
                  m: 0,
                  p: 0,
                  height: "32px",
                  alignItems: "center",
                  display: "inline-flex",
                },
                "& .MuiInput-input": { m: 0, p: 0 },
                "& .MuiInputBase-input": {
                  textAlign: "left",
                  p: "0 !important",
                },
              }}
            >
              <InputLabel color="primary" />
              <Select color="primary" disableUnderline displayEmpty />
              <FormHelperText />
            </FormControl>
            <div className="w-[7.9px] flex flex-col items-start justify-start py-0 pr-[6.9px] pl-0 box-border">
              <div className="self-stretch h-px overflow-hidden shrink-0 flex flex-row items-start justify-start relative mix-blend-normal">
                <div className="h-5 w-[86px] absolute !m-[0] right-[-85px] bottom-[-18.8px] leading-[19.5px] inline-block z-[1]">
                  Book instantly
                </div>
              </div>
            </div>
            <FormControl
              className="h-8 w-[142.4px] font-inter text-smi-7 text-gray-200 mix-blend-normal"
              variant="outlined"
              sx={{
                borderRadius: "0px 0px 0px 0px",
                width: "142.4000000000001px",
                height: "32px",
                m: 0,
                p: 0,
                "& .MuiInputBase-root": {
                  m: 0,
                  p: 0,
                  minHeight: "32px",
                  justifyContent: "center",
                  display: "inline-flex",
                },
                "& .MuiInputLabel-root": {
                  m: 0,
                  p: 0,
                  minHeight: "32px",
                  display: "inline-flex",
                },
                "& .MuiMenuItem-root": {
                  m: 0,
                  p: 0,
                  height: "32px",
                  display: "inline-flex",
                },
                "& .MuiSelect-select": {
                  m: 0,
                  p: 0,
                  height: "32px",
                  alignItems: "center",
                  display: "inline-flex",
                },
                "& .MuiInput-input": { m: 0, p: 0 },
                "& .MuiInputBase-input": {
                  textAlign: "left",
                  p: "0 !important",
                },
              }}
            >
              <InputLabel color="primary" />
              <Select color="primary" disableUnderline displayEmpty />
              <FormHelperText />
            </FormControl>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[23px] box-border gap-[17.5px] shrink-0 [debug_commit:1de1738] max-w-full mt-[-20.5px] text-xl-2 text-gray-300 lg:flex-wrap">
            <div className="flex-1 flex flex-col items-start justify-start pt-[36.5px] px-0 pb-0 box-border min-w-[505px] max-w-full mq750:min-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full">
                <div className="relative tracking-[-0.2px] leading-[28px] font-black mq450:text-base mq450:leading-[22px]">
                  5 cars available
                </div>
                <div
                  className="self-stretch rounded-xl bg-white box-border overflow-hidden flex flex-row items-start justify-start py-0 px-px gap-[16px] mix-blend-normal max-w-full cursor-pointer text-base-4 text-gray-100 border-[1px] border-solid border-gainsboro-100 mq750:flex-wrap"
                  onClick={onLinkCss1o9ktlContainerClick}
                >
                  <div className="w-[291px] rounded-tl-xl rounded-tr-none rounded-br-none rounded-bl-xl overflow-hidden shrink-0 flex flex-row items-start justify-start mix-blend-normal min-w-[291px] mq750:flex-1">
                    <div className="h-44 flex-1 rounded-t-xl rounded-b-none bg-gainsboro-200 flex flex-row items-start justify-start relative mix-blend-normal z-[1]">
                      <div className="h-16 w-[291px] absolute !m-[0] right-[-291px] bottom-[48px] [background:linear-gradient(0deg,_rgba(0,_0,_0,_0.6),_rgba(0,_0,_0,_0))] opacity-[0.72] mix-blend-normal" />
                      <img
                        className="h-44 w-[291px] relative overflow-hidden shrink-0 object-cover hidden mix-blend-normal z-[1]"
                        alt=""
                        src="/image-csszolci0styledimage@2x.png"
                      />
                      <div className="self-stretch w-[291px] relative rounded-t-xl rounded-b-none bg-gainsboro-200 hidden mix-blend-normal z-[2]" />
                    </div>
                  </div>
                  <div className="w-[454.5px] flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border min-w-[454.5px] max-w-full mq750:flex-1 mq750:min-w-full">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[42px] max-w-full mq450:flex-wrap mq450:gap-[21px]">
                      <MakeModel
                        hondaCivic2021="Honda Civic 2021"
                        trip="(1 trip)"
                        salisbury="Salisbury"
                      />
                      <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
                        <button className="cursor-pointer [border:none] py-1 px-2 bg-mintcream rounded-sm flex flex-row items-start justify-start gap-[4px] mix-blend-normal">
                          <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                            <img
                              className="w-3 h-3 relative overflow-hidden shrink-0 mix-blend-normal"
                              alt=""
                              src="/icon-13.svg"
                            />
                          </div>
                          <div className="relative text-xs-4 leading-[16px] font-medium font-inter text-seagreen text-left inline-block min-w-[49px]">
                            Save $17
                          </div>
                        </button>
                        <div className="flex flex-col items-start justify-start">
                          <div className="flex flex-row items-start justify-start py-0 pr-0 pl-[17.4px]">
                            <div className="flex flex-row items-start justify-start gap-[4.7px]">
                              <div className="relative [text-decoration:line-through] leading-[24px] inline-block min-w-[29px] whitespace-nowrap">
                                $56
                              </div>
                              <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0 text-base-6 text-gray-300">
                                <div className="relative leading-[20px] font-black inline-block min-w-[72px]">
                                  $50/day
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="relative text-xs-1 [text-decoration:underline] leading-[24px] text-gray-300 inline-block min-w-[119px]">{`$151 excl. taxes & fees`}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="self-stretch rounded-xl bg-white box-border overflow-hidden flex flex-row items-start justify-start py-0 px-px gap-[16px] mix-blend-normal max-w-full cursor-pointer border-[1px] border-solid border-gainsboro-100 mq750:flex-wrap"
                  onClick={onLinkCss1o9ktlContainer1Click}
                >
                  <div className="w-[291px] rounded-tl-xl rounded-tr-none rounded-br-none rounded-bl-xl overflow-hidden shrink-0 flex flex-row items-start justify-start mix-blend-normal min-w-[291px] mq750:flex-1">
                    <div className="h-44 flex-1 rounded-t-xl rounded-b-none bg-gainsboro-200 flex flex-row items-start justify-start relative mix-blend-normal z-[1]">
                      <div className="h-16 w-[291px] absolute !m-[0] right-[-291px] bottom-[48px] [background:linear-gradient(0deg,_rgba(0,_0,_0,_0.6),_rgba(0,_0,_0,_0))] opacity-[0.72] mix-blend-normal" />
                      <img
                        className="h-44 w-[291px] relative overflow-hidden shrink-0 object-cover hidden mix-blend-normal z-[1]"
                        alt=""
                        src="/image-csszolci0styledimage@2x.png"
                      />
                      <div className="self-stretch w-[291px] relative rounded-t-xl rounded-b-none bg-gainsboro-200 hidden mix-blend-normal z-[2]" />
                    </div>
                  </div>
                  <div className="w-[455.5px] flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border min-w-[455.5px] max-w-full mq750:flex-1 mq750:min-w-full">
                    <div className="self-stretch flex flex-col items-end justify-start gap-[38px] max-w-full mq450:gap-[19px]">
                      <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[3.5px] pl-0 box-border max-w-full">
                        <div className="flex-1 flex flex-col items-start justify-start gap-[2px] max-w-full">
                          <div className="self-stretch flex flex-row items-start justify-start gap-[4px] max-w-full mq450:flex-wrap">
                            <div className="flex-1 flex flex-col items-start justify-start gap-[2px] min-w-[265px] max-w-full">
                              <div className="self-stretch overflow-hidden flex flex-row items-end justify-start pt-0 px-0 pb-[0.5px] mix-blend-normal">
                                <div className="relative tracking-[-0.2px] leading-[28px] font-black mq450:text-base mq450:leading-[22px]">
                                  Toyota Tundra 2017
                                </div>
                              </div>
                              <div className="flex flex-row items-start justify-start py-0 pr-[22px] pl-0 gap-[2.1px] text-base-4">
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
                                <div className="flex flex-col items-start justify-start pt-1 pb-0 pr-[4.2px] pl-0">
                                  <div className="relative leading-[24px] inline-block min-w-[64px]">
                                    (17 trips)
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
                          <div className="flex flex-row items-start justify-start py-0 pr-5 pl-0 gap-[4px] text-xs-4">
                            <img
                              className="h-4 w-4 relative overflow-hidden shrink-0 mix-blend-normal min-h-[16px]"
                              alt=""
                              src="/icon-121.svg"
                            />
                            <div className="relative leading-[16px] font-medium inline-block min-w-[51px]">
                              Salisbury
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[129.5px] flex flex-col items-start justify-start text-base-6">
                        <div className="self-stretch flex flex-row items-start justify-end">
                          <div className="relative leading-[20px] font-black inline-block min-w-[71px]">
                            $85/day
                          </div>
                        </div>
                        <div className="relative text-xs-1 [text-decoration:underline] leading-[24px] inline-block min-w-[122px]">{`$255 excl. taxes & fees`}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="self-stretch rounded-xl bg-white box-border overflow-hidden flex flex-row items-start justify-start py-0 px-px gap-[16px] mix-blend-normal max-w-full cursor-pointer text-base-6 border-[1px] border-solid border-gainsboro-100 mq750:flex-wrap"
                  onClick={onLinkCss1o9ktlContainer2Click}
                >
                  <div className="w-[291px] rounded-tl-xl rounded-tr-none rounded-br-none rounded-bl-xl overflow-hidden shrink-0 flex flex-row items-start justify-start mix-blend-normal min-w-[291px] mq750:flex-1">
                    <div className="h-44 flex-1 rounded-t-xl rounded-b-none bg-gainsboro-200 flex flex-row items-start justify-start relative mix-blend-normal z-[1]">
                      <div className="h-16 w-[291px] absolute !m-[0] right-[-291px] bottom-[48px] [background:linear-gradient(0deg,_rgba(0,_0,_0,_0.6),_rgba(0,_0,_0,_0))] opacity-[0.72] mix-blend-normal" />
                      <img
                        className="h-44 w-[291px] relative overflow-hidden shrink-0 object-cover hidden mix-blend-normal z-[1]"
                        alt=""
                        src="/image-csszolci0styledimage@2x.png"
                      />
                      <div className="self-stretch w-[291px] relative rounded-t-xl rounded-b-none bg-gainsboro-200 hidden mix-blend-normal z-[2]" />
                    </div>
                  </div>
                  <div className="w-[456.7px] flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border min-w-[456.6999999999998px] max-w-full mq750:flex-1 mq750:min-w-full">
                    <div className="self-stretch flex flex-col items-end justify-start gap-[46px] max-w-full mq450:gap-[23px]">
                      <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[4.7px] pl-0 box-border max-w-full">
                        <MakeModel
                          hondaCivic2021="Kia Telluride 2023"
                          trip="(6 trips)"
                          salisbury="Delmar"
                          propAlignSelf="unset"
                          propPadding="unset"
                          propFlex="1"
                          propMinWidth="58px"
                          propPadding1="0px 20px 0px 0px"
                          propMinWidth1="39px"
                        />
                      </div>
                      <div className="w-[130.8px] flex flex-col items-start justify-start">
                        <div className="self-stretch flex flex-row items-start justify-end">
                          <div className="relative leading-[20px] font-black inline-block min-w-[72px]">
                            $88/day
                          </div>
                        </div>
                        <div className="relative text-xs-1 [text-decoration:underline] leading-[24px] inline-block min-w-[123px]">{`$264 excl. taxes & fees`}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch rounded bg-white box-border flex flex-row items-start justify-start py-[23px] px-[17px] gap-[12px] mix-blend-normal max-w-full text-base-4 border-[1px] border-solid border-gainsboro-100 mq750:flex-wrap">
                  <img
                    className="h-11 w-11 relative overflow-hidden shrink-0 object-contain mix-blend-normal"
                    loading="lazy"
                    alt=""
                    src="/image-cssc7q9vhstyledimage@2x.png"
                  />
                  <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0 box-border max-w-full">
                    <div className="relative leading-[24px]">
                      Don’t stress: you can cancel your trip for free, up to 24
                      hours before it starts.
                    </div>
                  </div>
                </div>
                <div
                  className="self-stretch rounded-xl bg-white box-border overflow-hidden flex flex-row items-start justify-start py-0 px-px gap-[16px] mix-blend-normal max-w-full cursor-pointer border-[1px] border-solid border-gainsboro-100 mq750:flex-wrap"
                  onClick={onLinkCss1o9ktlContainer3Click}
                >
                  <div className="w-[291px] rounded-tl-xl rounded-tr-none rounded-br-none rounded-bl-xl overflow-hidden shrink-0 flex flex-row items-start justify-start mix-blend-normal min-w-[291px] mq750:flex-1">
                    <div className="h-44 flex-1 rounded-t-xl rounded-b-none bg-gainsboro-200 flex flex-row items-start justify-start relative mix-blend-normal z-[1]">
                      <div className="h-16 w-[291px] absolute !m-[0] right-[-291px] bottom-[48px] [background:linear-gradient(0deg,_rgba(0,_0,_0,_0.6),_rgba(0,_0,_0,_0))] opacity-[0.72] mix-blend-normal" />
                      <img
                        className="h-44 w-[291px] relative overflow-hidden shrink-0 object-cover hidden mix-blend-normal z-[1]"
                        alt=""
                        src="/image-csszolci0styledimage@2x.png"
                      />
                      <div className="self-stretch w-[291px] relative rounded-t-xl rounded-b-none bg-gainsboro-200 hidden mix-blend-normal z-[2]" />
                    </div>
                  </div>
                  <div className="w-[456.7px] flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border min-w-[456.6999999999998px] max-w-full mq750:flex-1 mq750:min-w-full">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[34px] max-w-full mq450:gap-[17px]">
                      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[5px] pl-0 box-border gap-[4px] max-w-full mq450:flex-wrap">
                        <div className="flex-1 flex flex-col items-start justify-start gap-[2px] min-w-[265px] max-w-full">
                          <div className="self-stretch overflow-hidden flex flex-row items-end justify-start pt-0 px-0 pb-[0.5px] mix-blend-normal">
                            <div className="relative tracking-[-0.2px] leading-[28px] font-black mq450:text-base mq450:leading-[22px]">
                              Jeep Cherokee 2019
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
                                  (29 trips)
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
                              <div className="relative leading-[16px] font-medium inline-block min-w-[49px]">
                                Fruitland
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
                      <div className="self-stretch flex flex-row items-start justify-between gap-[20px] text-base-4 text-gray-100 mq450:flex-wrap">
                        <button className="cursor-pointer [border:none] py-1 px-2 bg-mintcream rounded-sm flex flex-row items-start justify-start gap-[4px] mix-blend-normal">
                          <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                            <img
                              className="w-3 h-3 relative overflow-hidden shrink-0 mix-blend-normal"
                              alt=""
                              src="/icon-13.svg"
                            />
                          </div>
                          <div className="relative text-xs-4 leading-[16px] font-medium font-inter text-seagreen text-left inline-block min-w-[51px]">
                            Save $57
                          </div>
                        </button>
                        <div className="flex flex-col items-start justify-start">
                          <div className="flex flex-row items-start justify-start py-0 pr-0 pl-[10.7px]">
                            <div className="flex flex-row items-start justify-start gap-[3px]">
                              <div className="relative [text-decoration:line-through] leading-[24px] inline-block min-w-[36px] whitespace-nowrap">
                                $128
                              </div>
                              <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0 text-base-6 text-gray-300">
                                <div className="relative leading-[20px] font-black inline-block min-w-[81px]">
                                  $109/day
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="relative text-xs-1 [text-decoration:underline] leading-[24px] text-gray-300 inline-block min-w-[123px]">{`$326 excl. taxes & fees`}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img
              className="w-[607px] relative max-h-full object-cover max-w-full lg:flex-1"
              alt=""
              src="/map@2x.png"
            />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Destinations;
