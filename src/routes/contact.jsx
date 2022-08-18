import * as Icon from 'react-icons/fa';
import ContactForm from '../components/contact/contactForm';

const contact = () => {
     return (
          <main className="contact relative">

               <section className="contact-banner py-32 relative bg-cover bg-top bg-no-repeat">

                    <div className="container mx-auto">

                         <div className="flex flex-col">

                              <div className="relative z-20 text-white">

                                   <div className="text-[24px] sm:text-[48px] tracking-tighter font-bold">Get in touch with us</div>

                                   <div className="text-base">Looking for a digital expert? Connect with us!</div>

                              </div>

                              <div className="home-banner-content-background z-10 top-0 left-0 h-full w-7/12 absolute bg-gradient-to-r from-[#00138e]/60 via-[#0c5adb]/60 to-transparent"></div>

                         </div>

                    </div>

               </section>
               
               <section className="relative py-20">

                    <div className="sm:px-4 md:container-fluid md:px-4 lg:px-8 xl:px-0 xl:container mx-auto">

                         <div className="flex flex-col md:flex-row w-full">

                              <div className="w-full px-4 mb-8 md:w-6/12 md:mb-0">

                                   <div className="text-primary font-semibold text-base uppercase">Contact Us</div>

                                   <div className="text-gray-800 font-bold tracking-tight text-[40px] mb-2">How can we help you?</div>

                                   <div className="text-gray-500 font-normal leading-loose text-base mb-8">Talk to us by filling out the form and we will get back to you shortly.</div>

                                   <div className="mb-4"><a href="mailto:info@amynchdigitalmind.com" className="text-gray-600 inline-flex items-center justify-start border border-slate-300 p-4 hover:bg-primary hover:text-white transition-all duration-300 ease-in">
                                        <Icon.FaEnvelopeOpenText icon="FaEnvelopeOpenText" className="mr-2" />
                                        <span>info@amynchdigitalmind.com</span>
                                   </a></div>

                                   <div><a href="tel:+63-927-458-1117" className="text-gray-600 inline-flex items-center justify-start border border-slate-300 p-4 hover:bg-primary hover:text-white transition-all duration-300 ease-in">
                                        <Icon.FaMobileAlt className="mr-2" />
                                        <span>+63 927 458 1117</span>
                                   </a></div>

                              </div>

                              <div className="w-full md:w-6/12 px-4">

                                   <ContactForm />

                              </div>

                         </div>

                    </div>

               </section>

          </main>
     )
}

export default contact
