import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import SubheroSection from "../components/SubheroSection";
import Footer from "../components/FooterDesktop";
import HeaderDesktop from "../components/HeaderDesktop";
import Button from "../components/Button";

const About: FunctionComponent = () => {
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

  const onJoinTheTeamLinkSeoPagesClick = useCallback(() => {
    navigate("/rent-your-car");
  }, [navigate]);

  return (
    <div className="w-full relative bg-darkslategray-200 flex flex-col items-end justify-start pt-0 px-0 pb-[21.3px] box-border gap-[99px] mix-blend-normal leading-[normal] tracking-[normal] mq450:gap-[25px] mq925:gap-[49px]">
      <HeaderDesktop />
      <section className="self-stretch flex flex-col items-end justify-start pt-0 px-0 pb-[14.5px] box-border gap-[84px] max-w-full text-left text-base-4 text-white font-inter mq450:gap-[21px] mq925:gap-[42px]">
        <div className="w-[1254px] flex flex-row items-start justify-center pt-0 px-5 pb-[18.5px] box-border max-w-full text-left text-54xl-7 text-gray-300 font-noto-serif">
      {/* Header image */}
      <div className="w-[872px] flex flex-row items-start justify-start relative max-w-full">
        <img
          className="h-[326px] w-[588px] absolute !m-[0] top-[-65px] left-[-177px] object-cover z-[1]"
          loading="lazy"
          alt=""
          src="/picture-kimi-about-us@2x.png"
        />
        {/* Header white box */}
        <div className="flex-1 bg-white flex flex-col items-center justify-start pt-6 pb-[42px] pr-5 pl-[328px] box-border gap-[15px] max-w-full mq450:pl-5 mq450:box-border mq700:pl-[164px] mq700:box-borde">
          <img
            className="w-[872px] h-[309px] relative hidden max-w-full"
            alt=""
            src="/hero-section.svg"
          />
          {/* Header title text */}
          <div className="w-[324px] flex flex-row items-start justify-start py-0 px-2 box-border max-w-full">
            <div className="flex-1 relative tracking-[-1px] leading-[90px] font-black z-[1] mq450:text-25xl mq450:leading-[54px] mq925:text-40xl mq925:leading-[72px]">
              ABOUT KIMI
            </div>
          </div>
          {/* Header paragraph text */}
          <div className="w-[324px] h-12 relative max-w-full text-base-4 text-black font-inter">
            <div className="absolute top-[10px] left-[0px] bg-orange-400 w-[316px] h-8 mix-blend-normal z-[1]" />
            <div className="absolute top-[0px] left-[9px] leading-[24px] whitespace-pre-wrap flex items-center w-[315px] z-[2]">
              Take a look under the hood of the hood of the world’s best car
              sharing marketplace
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Subheader title  and CSS styiling for it*/}
        <div className="w-[1397px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <div className="flex flex-col items-start justify-start gap-[12px] max-w-full">
            <div className="flex flex-col items-start justify-start max-w-full">
              <div className="w-[414px] flex flex-col items-start justify-start pt-0 px-0 pb-1.5 box-border gap-[6.5px] max-w-full text-22xl-6 font-noto-serif">
                <div className="relative tracking-[-0.5px] leading-[56px] font-black inline-block max-w-full mq450:text-6xl mq450:leading-[34px] mq925:text-14xl mq925:leading-[45px]">
                  Find your drive
                </div>
                <div className="self-stretch h-1 relative bg-orange-400 mix-blend-normal" />
              </div>
              {/* Subheader paragraph and CSS styling for it */}
              <div className="relative leading-[24px] inline-block max-w-full">
                Kimi is the world’s best car sharing marketplace, where you can book the perfect car for <br />
                wherever you’re going from a vibrant community of trusted hosts across the US, UK, Canada,<br />
                Australia, and France. Flying in from afar or looking for a car down the street, searching for a<br />
                rugged truck or something smooth and swanky, you can skip the rental car counter and<br />
                choose from an extraordinary, totally unique selection of nearby vehicles shared by local<br />
                hosts. Entrepreneurs can take the wheel of their futures by becoming hosts and building car<br />
                sharing businesses on Kimi, leveraging our established platform to scale their businesses to <br />
                meet their goals. <br /><br />
                With an unwavering mission of putting the world’s cars to better use, Kimi unlocks <br />
                seat.
                 </div>
              </div>
          </div>
        </div>
        {/* Calling the SubheroSection component */}
        <SubheroSection />
      </section>

      {/* CSS Styling of the section using TailwindCSS */}
      <section className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-xl-5 text-white font-inter">
        {/* CSS Styling of the section elements eg. Padding, Flex positioning and font size using TailwindCSS */}
      <div className="w-[939px] flex flex-col items-start justify-start gap-[79.3px] max-w-full mq950:gap-[40px] mq700:gap-[20px]">
        {/* CSS Styling of the text inside of this section */}
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 text-22xl-6 font-noto-serif">
          {/* CSS Styling of the header text of this section */}
          <div className="relative tracking-[-0.5px] leading-[56px] font-black mq450:text-6xl mq450:leading-[34px] mq925:text-14xl mq925:leading-[45px]">
            Want to dive deeper?
          </div>
        </div>
        {/* CSS styling of the image on the left side */}
        <div className="w-[928px] flex flex-row items-start justify-center gap-[60px] max-w-full mq925:flex-wrap mq925:gap-[30px]">
          <div className="flex-1 flex flex-row items-start justify-start relative min-w-[328px] max-w-full">
            {/* Inserting the image on the left side */}
            <img
              className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover mix-blend-normal"
              alt=""
              src="/image-eiig1vx0-12@2x.png"
            />
            {/* Orange overlay on the image on the lift side */}
            <div className="h-[283px] flex-1 relative bg-orange-500 mix-blend-normal max-w-full z-[1]" />
            </div>
            
            {/* CSS styling of the text section on the right side */}
          <div className="w-[364px] flex flex-col items-start justify-start pt-[30px] px-0 pb-0 box-border min-w-[364px] max-w-full mq450:min-w-full mq925:flex-1">
            <div className="self-stretch flex flex-col items-start justify-start gap-[12.5px] max-w-full">
              {/* Adding and CSS Styling of the header of the text on the right side */}
              <div className="relative tracking-[-0.2px] leading-[28px] font-black mq450:text-base mq450:leading-[22px]">
                Join the team
              </div>
              {/* Adding and CSS styling of the paragraph of the text on the right side */}
              <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[11.5px] box-border gap-[12px] max-w-full text-base-4">
                <div className="self-stretch flex flex-col items-start justify-start max-w-full">
                  <div className="relative leading-[24px] inline-block max-w-full">
                    Recognized as A Great Place to Work®, Kimi <br />
                    prides itself on creating a supportive, down-to- <br />
                    earth, pioneering, and efficient work environment. <br />
                    Review open positions and come join us!
                  </div>
                  
              </div>
              {/* Calling the button component and providing the text, routing and color for it */}
              <Button 
                text="Join our team"
                route={"/rent-your-car"}
                color={"rgb(251 188 4 / var(--tw-bg-opacity))"} />
            </div>
            </div>
          </div>
        </div>
        
        {/* CSS adjustment using TailwindCSS for the placement of text and the photo */}
        <div className="self-stretch flex flex-row items-start justify-center gap-[62px] max-w-full mq950:gap-[31px] mq700:gap-[15px] mq925:flex-wrap">
          {/* CSS adjustment using TailwindCSS for the placement of text and the photo for the first section */}
          <div className="flex flex-col items-start justify-start pt-9 px-0 pb-0 box-border min-w-[373px] max-w-full mq450:min-w-full mq925:flex-1">
            {/* CSS adjustment between the text and the button */}
            <div className="flex flex-col items-start justify-start gap-[12.5px] max-w-full">
              {/* CSS adjustment for the header text */}
              <div className="relative tracking-[-0.2px] leading-[28px] font-black inline-block min-w-[122px] mq450:text-base mq450:leading-[22px]">
                Get in touch
              </div>
              
              {/* CSS adjustment using TailwindCSS for the placement of text and the photo for the second section */}
              <div className="flex flex-col items-start justify-start pt-0 px-0 pb-[11.5px] box-border max-w-full text-base-4">
                <div className="relative leading-[24px]">
                  Reach out to the Kimi newsdesk for press inquiries, <br />
                  the Kimi press kit, influencer outreach, investor <br />
                  relations information, and any other corporate <br />
                  inquiries you may have.
                  </div>
              </div>
             {/* Calling the button component and providing the text, routing and color for it */}
              <Button 
                text="Contact us"
                route={"/contact-us"}
                color={"rgb(251 188 4 / var(--tw-bg-opacity))"} />
            </div>

          </div>
          {/* Adding the image on the right side and aplying CSS to it*/}
          <div className="flex-1 flex flex-row items-start justify-start relative min-w-[328px] max-w-full">
            <img
              className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover mix-blend-normal"
              alt=""
              src="/image-eiig1vx0-22@2x.png"
            />
            {/* Adding the orange color overlay over the photo */}
            <div className="h-[283px] flex-1 relative bg-orange-500 mix-blend-normal max-w-full z-[1]" />
          </div>
        </div>
      </div>
      
    </section>
      {/* Calling the footer component */}
      <Footer />
    </div>
  );
};

export default About;
