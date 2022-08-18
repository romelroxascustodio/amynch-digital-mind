import { useState } from 'react';
import WhoWeAre from '../assets/img/about/who-we-are.jpg';
import WhyChooseUsAccordionData from '../components/about/WhyChooseUsAccordionData';
import WhyChooseUsAccordionDataTwo from '../components/about/WhyChooseUsAccordionDataTwo';

const about = () => {
  const [toggleAccordion, setToggleAccordion] = useState(false);
  const [toggleAccordionTwo, setToggleAccordionTwo] = useState(false);

  const toggle = index => {
    if(toggleAccordion === index) {
      return setToggleAccordion(null);
    }
    setToggleAccordion(index);
  }

  const toggleTwo = index => {
    if(toggleAccordionTwo === index) {
      return setToggleAccordionTwo(null);
    }
    setToggleAccordionTwo(index);
  }

  return (
    <main className="about">

      <section className="about-banner py-32 relative bg-cover bg-top bg-no-repeat">

        <div className="container mx-auto">

          <div className="flex flex-col">

            <div className="relative z-20 text-white">

              <div className="text-[24px] sm:text-[48px] tracking-tighter font-bold">Why Amynch Digital Mind?</div>

              <div className="text-base">Explore to learn more about us!</div>

            </div>

            <div className="home-banner-content-background z-10 top-0 left-0 h-full w-7/12 absolute bg-gradient-to-r from-[#00138e]/60 via-[#0c5adb]/60 to-transparent"></div>

          </div>

        </div>

      </section>

      <section className="relative py-20">

        <div className="container mx-auto">

          <div className="flex flex-col lg:flex-row w-full items-center">

            <div className="w-full lg:w-6/12 p-4">

              <div>

                <img src={WhoWeAre} className="max-w-full h-auto rounded-tl-[5rem] rounded-br-[5rem] sm:rounded-tl-[10rem] rounded-tr-3xl sm:rounded-br-[10rem] rounded-bl-3xl" alt="..." />

              </div>

            </div>

            <div className="w-full lg:w-6/12 p-4">
              
            <div className="text-primary font-semibold text-base uppercase">Who we are</div>

            <div className="text-gray-800 font-bold text-[24px] tracking-tight leading-snug sm:text-[40px] mb-6">We are a Dynamic Team of Creatives People of Web Development, SEO, Accounting & Virtual Assistant.</div>

            {/* <div className="text-gray-900 font-normal leading-loose text-[16px] sm:text-[20px] mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt ut labore et dolore magna aliqua.enim ad minim veniam quis nostrud.</div> */}

            </div>

          </div>

        </div>

      </section>

      <section className="relative bg-[#f8f8fc] py-20">

        <div className="container mx-auto">

          <div className="flex flex-col lg:flex-row w-full justify-start">

            <div className="w-full lg:w-6/12 text-left mb-12">

              <div className="text-gray-800 text-[24px] font-extrabold tracking-tight leading-snug md:text-[36px] mb-4">Why Amynch Digital Mind is the right choice for you?</div>

              <div className="text-gray-900 text-[16px] font-normal leading-loose mb-4">Expertise in website development and SEO Services that will help your business get the maximum exposure on the web so you can be found by your potential customers</div>

              <div className="text-gray-900 text-[16px] font-normal leading-loose mb-4">The world is online now. Website is the best tool to showcase your products or services.</div>

              <div className="text-gray-900 text-[16px] font-normal leading-loose mb-4">We design and developed websites using high-end clean coding to make it indexable by Google and other search engines.</div>

              <div className="text-gray-900 text-[16px] font-normal leading-loose mb-4">Our web designers and developers are highly experienced in this field together with our SEO strategists.</div>

              <div className="text-gray-900 text-[16px] font-normal leading-loose mb-4">Presently, we have hundreds of satisfied clients from different industries Tree services and landscaping, construction/home builders, restaurants, spa, house painting service, signs and graphics, driving schools, party rentals, weddings and photography, heating and air conditioning and many others.</div>
              
              <div className="text-gray-900 text-[16px] font-normal leading-loose mb-4">Be found by your potential customers now. Hire us!</div>

            </div>

            <div className="w-full lg:w-6/12 px-4">

              {WhyChooseUsAccordionData.map((item, index) => (

                <div key={item + index} onClick={() => toggle(index)} className={toggleAccordion === index ? "why-choose-us-accordion-card active" : "why-choose-us-accordion-card"}>

                  <div className="why-choose-us-accordion-card-header">

                      <div className="why-choose-us-accordion-card-header-heading">{item.title}</div>

                      <i className="why-choose-us-accordion-card-header-icon fas fa-plus"></i>

                  </div>

                  <div className="why-choose-us-accordion-card-body">{item.content}</div>

                </div>

              ))}

              {WhyChooseUsAccordionDataTwo.map((item, index) => (

                <div key={item + index} onClick={() => toggleTwo(index)} className={toggleAccordionTwo === index ? "why-choose-us-accordion-card active" : "why-choose-us-accordion-card"}>

                  <div className="why-choose-us-accordion-card-header">

                      <div className="why-choose-us-accordion-card-header-heading">{item.title}</div>

                      <i className="why-choose-us-accordion-card-header-icon fas fa-plus"></i>

                  </div>

                  <div className="why-choose-us-accordion-card-body">{item.content}</div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

    </main>
  );
};

export default about;
