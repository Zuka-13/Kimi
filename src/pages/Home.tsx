import { FunctionComponent, useCallback } from "react";
import HeaderDesktop from "../components/HeaderDesktop";
import HeroSection from "../components/HeroSection";
import Button from "../components/Button";
import DestinationBrowse from "../components/DestinationBrowse";
import DestinationCardTwo from "../components/DestinationCardTwo";
import GiftCard from "../components/GiftCard";
import ReviewSection from "../components/ReviewSection";
import CTABubble from "../components/CTABubble";
import FrequentlyAskedQuestions from "../components/FrequentlyAskedQuestions";
import FooterDesktop from "../components/FooterDesktop";

const Home: FunctionComponent = () => {

 

  return (
    <div className="w-full relative bg-darkslategray-200 flex flex-col items-center justify-center pt-0 px-0 pb-[19.3px] box-border mix-blend-normal leading-[normal] tracking-[normal]">
      <div className="w-[376px] h-7 absolute !m-[0] right-[489px] bottom-[659px] bg-orange-200 mix-blend-normal" />
      {/* Header Section */} 
      <HeaderDesktop />
      {/* Hero Section - Where the search bar is to search for destinations to find cars */}
      <HeroSection />
      {/* Section with CSS code via TailwindCSS for the "Find your ride" H1 tag */}
      <div className="w-[376px] h-7 absolute !m-[0] top-[2026px] right-[521px] bg-orange-300 mix-blend-normal" />
      <section className="self-stretch flex flex-row items-start justify-center pt-0 pb-[102.4px] pr-[27px] pl-5 box-border max-w-full text-left text-54xl-7 text-white font-noto-serif">
        <div className="w-[588.3px] flex flex-col items-start justify-start gap-[23.8px] max-w-full shrink-0">
          <div className="self-stretch relative tracking-[-1px] leading-[90px] font-black shrink-0 [debug_commit:1de1738] mq450:text-25xl mq450:leading-[54px] mq800:text-40xl mq800:leading-[72px]">
            Find your ride
          </div>
          {/* Section with CSS code via TailwindCSS for the "Car rentals from trusted, local hosts" H2 tag */}
          <div className="flex flex-row items-start justify-start py-0 pr-[52px] pl-[59px] box-border max-w-full shrink-0 text-8xl font-inter mq800:pl-[29px] mq800:pr-[26px] mq800:box-border">
            <div className="flex flex-row items-start justify-start relative max-w-full">
              <div className="h-8 w-[640px] absolute !m-[0] bottom-[-15px] left-[-81.1px] bg-orange-400 mix-blend-normal" />
              <div className="relative tracking-[-0.2px] leading-[32px] font-black shrink-0 [debug_commit:1de1738] z-[1] mq450:text-3xl mq450:leading-[26px]">
                Car rentals from trusted, local hosts
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Calling the component DestinationBrowse where we have 4 cards which represent 4 cities that are available to rent cars from */}
      <DestinationBrowse />
      {/* Calling the component DestinationBrowse which is a CTA to the destinations page where the user can search available cars from each region */}
      <DestinationCardTwo />
      <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[110.5px] box-border max-w-full text-left text-8xl text-gray-300 font-inter mq800:pb-[72px] mq800:box-border">
        <div className="flex-1 [background:linear-gradient(90deg,_#fbf9f6_50%,_rgba(0,_0,_0,_0)_50%)] flex flex-row items-end justify-start pt-12 px-[196.5px] pb-[62.2px] box-border gap-[75.5px] mix-blend-normal max-w-full mq450:pt-[31px] mq450:px-5 mq450:pb-10 mq450:box-border mq800:gap-[19px] mq800:pl-[49px] mq800:pr-[49px] mq800:box-border mq1325:flex-wrap mq1325:gap-[38px] mq1325:justify-center mq1325:pl-[98px] mq1325:pr-[98px] mq1325:box-border">
          <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[33.3px] box-border min-w-[474px] max-w-full mq1125:min-w-full mq1325:flex-1">
            <div className="flex flex-col items-start justify-start gap-[40.4px] max-w-full mq800:gap-[20px]">
              <div className="flex flex-col items-start justify-start gap-[16px] max-w-full">
                {/* Title text of the rent-out-car section */}
                <div className="relative tracking-[-0.2px] leading-[32px] font-black mq450:text-3xl mq450:leading-[26px]">
                  Want to make money with your car?
                </div>
                {/* Next two div tags are for the paragraph text and they are applying styling via TailwindCSS */}
                <div className="flex flex-col items-start justify-start max-w-full text-base-4">
                 {/* Text of the paragraph */}
                  <div className="relative leading-[24px]">
                    Rent out your car on our carsharing platform and secure<br/>
                    a passive stream of income and leave the rest to us!
                  </div>
                </div>
              </div>
              {/* CTA button routing to the rent your car page providing text, route and color */}
                <Button 
                text={"Start making money"} 
                route={"/rent-your-car"} 
                color={"#85bb65"} />
            </div>
          </div>
          {/* Image of the rent-out-car section */}
          <img
            className="w-[448.9px] relative max-h-full overflow-hidden shrink-0 object-cover mix-blend-normal max-w-full mq1325:flex-1"
            alt="Close up photo of two people exchanging car keys for a stack of money"
            src="/image-eiig1vx0-1@2x.png"
          />
        </div>
      </section>
      {/* Calling the Gift Card component */}
      <GiftCard />
      {/* Calling the Review component */}
      <ReviewSection />
      {/* Calling the CTABubble component */}
      <CTABubble />
      {/* Calling the FAQ component */}
      <FrequentlyAskedQuestions />
      {/* Calling the footer component */}
      <FooterDesktop />
    </div>
  );
};

export default Home;
