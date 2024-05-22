import { FunctionComponent } from "react";

const ContactForm: FunctionComponent = () => {
  return (
    <div className="flex flex-row items-start justify-between max-w-full text-left text-17xl text-white font-noto-sans">
      {/* Left Section */}
      <div className="w-[60%] flex flex-row items-start justify-start  max-w-full -right-[40px] mt-[9px] relative z-[1]">
       {/* Added styling with TailwindCSS added shadow, flex alignment and placing the div under the contact form div */}
        <div className="w-[368.4px] shadow-lg shadow-black/70 rounded-8xs bg-orange-100 flex flex-col items-start justify-start pt-[30px] pb-[30px] pr-[27.6px] pl-11 box-border gap-[35px] max-w-full z-[1]">
          <div className="flex flex-col items-start justify-start gap-[20px] max-w-full">
            {/* Header text */}
            <h2 className="text-3xl font-black">Let's talk with us</h2>
            <div className="text-xl leading-[32px] font-body1">
              {/* Paragraph text */}
              Questions, comments, or suggestions? Simply fill in the form and we’ll be in touch shortly.
            </div>
          </div>
          <div className="w-full flex flex-col items-start justify-start text-lg gap-[15px]">
            {/* Icons and texts section under the paragraph */}
            <div className="flex flex-col items-start justify-start gap-[15px] max-w-full">
              {/* Location */}
              <div className="flex flex-row items-center gap-[15px]">
                <img className="h-6 w-[18.4px]" loading="lazy" alt="" src="/group-3893.svg" />
                <div className="flex-1 font-black text-base">Džemala Bijedića 160j, 7100 Sarajevo</div>
              </div>
              {/* Phone number */}
              <div className="flex flex-row items-center gap-[15px]">
                <img className="w-6 h-6" loading="lazy" alt="" src="/noun-phone-3612570-1.svg" />
                <div className="flex-1 font-black text-base">+387 61 111 111</div>
                {/* Email */}
              </div>
              <div className="flex flex-row items-center gap-[15px]">
                <img className="h-[26px] w-[26px]" loading="lazy" alt="" src="/noun-email-247564-1.svg" />
                <div className="font-black text-base">contact@kimi.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Contact Form Section */}
      <div className="w-[60%] bg-white shadow-2xl shadow-black/80 rounded-lg py-12 px-10 flex flex-col items-center z-[2]">
        
        <div className="w-full flex flex-col items-center justify-center py-2 px-8 gap-4 max-w-full text-base text-gray-700 font-body1">
          <div className="w-full flex flex-row flex-wrap mb-2 gap-4">
            {/* Input for first name */}
            <div className="flex-1 w-1/2">
              <input className="w-full p-3 border rounded-md" placeholder="First Name*" type="text" />
            </div>
            {/* Input for last name */}
            <div className="flex-1 w-1/2">
              <input className="w-full p-3 border rounded-md" placeholder="Last Name*" type="text" />
            </div>
          </div>
          {/* Input for email */}
          <div className="w-full flex flex-col mb-2">
            <input className="w-full p-3 border rounded-md" placeholder="Email*" type="email" />
          </div>
          {/* Input for phone number */}
          <div className="w-full flex flex-col mb-2">
            <input className="w-full p-3 border rounded-md" placeholder="Phone Number*" type="tel" />
          </div>
          {/* Input for message */}
          <div className="w-full flex flex-col mb-2">
            <textarea className="w-full p-3 border rounded-md" placeholder="Your message..." rows={4} />
          </div>
          {/* Submit Button */}
          <button className="cursor-pointer py-2 px-5 bg-kimi-yellow w-[465px] rounded-3xl box-border flex items-center justify-center whitespace-nowrap max-w-full border border-kimi-yellow hover:bg-darkgoldenrod-100">
            <div className="relative text-lg font-semibold text-white">Send Message</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
