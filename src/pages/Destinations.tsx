import { FunctionComponent, useCallback } from "react";
import {
  Select,
  InputLabel,
  FormHelperText,
  FormControl,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import SearchComponent from "../components/SearchComponent";
import MakeModel from "../components/MakeModel";
import Footer from "../components/FooterDesktop";
import HeaderDesktop from "../components/HeaderDesktop";

const Destinations: FunctionComponent = () => {
  const navigate = useNavigate();

  

  return (
    <div className="w-full relative bg-darkslategray-200 flex flex-col items-center justify-center pt-px px-0 pb-[0.3px] box-border gap-[0.5px] mix-blend-normal leading-[normal] tracking-[normal]">
      <div className="self-stretch flex flex-col items-end justify-start py-0 px-0 box-border max-w-full">
      <HeaderDesktop />
        <main className="self-stretch bg-white overflow-y-auto flex flex-col items-end justify-start pt-0 px-0 pb-[20px] box-border mix-blend-normal max-w-full mt-[-0.5px] text-left text-smi-7 text-gray-200 font-inter lg:pb-[641px] lg:box-border mq450:pb-[271px] mq450:box-border mq1050:h-auto mq1050:pb-[417px] mq1050:box-border">
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
                      <div className="flex flex-row items-start justify-start py-0 pr-0 pl-[23px] box-border gap-[17.5px] shrink-0 max-w-full mt-[-20.5px] text-xl-2 text-gray-300 lg:flex-wrap">
                        <div className="w-2/5 flex flex-col items-start justify-start pt-[36.5px] px-0 pb-0 box-border min-w-[505px] max-w-full mq750:min-w-full">
                          <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full">
                           <div className="relative tracking-[-0.2px] leading-[28px] font-black mq450:text-base mq450:leading-[22px]">
                            5 cars available
                           </div>

                        <MakeModel
                          model="Volkswagen Golf 7"
                          trip="(1 trip)"
                          location="Sarajevo"
                          price="50KM"                     
                          discount="6KM"
                          img="../public/golf7.jpeg"
                          
                          />

                          <MakeModel
                          model="Toyota Rav4 2010"
                          trip="(170 trip)"
                          location="Sarajevo"
                          price="130KM"
                          discount="20KM"
                          img="../public/toyotarav4.jpeg"
                          />

                          <MakeModel
                          model="Peugeot 308 2011"
                          trip="(663 trip)"
                          location="Sarajevo"
                          price="80KM"
                          discount="20KM"
                          img="../public/peugoet308.jpeg"
                          />

                          <MakeModel
                          model="Audi A7 2011"
                          trip="(97 trip)"
                          location="Sarajevo"
                          price="255KM"
                          discount="43KM"
                          img="../public/audia7.jpg"
                          />

                          <MakeModel
                          model="Škoda Fabia 2002"
                          trip="(964 trip)"
                          location="Sarajevo"
                          price="40KM"
                          discount="15KM"
                          img="../public/skodafabia.jpeg"
                          />
                      </div>
                    </div>
                  
                
              
                    <div className="w-3/5 pt-[80px] overflow-hidden self-stretch flex flex-row items-start justify-start">
                    <img
                      className="h-[950px] w-[100%] object-cover"
                      alt=""
                      src="/maps.png"
                    />
                  </div>
                </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Destinations;
