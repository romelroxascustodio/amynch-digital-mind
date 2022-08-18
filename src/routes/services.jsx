import { Link } from 'react-router-dom';

const importAll = (r) => {
     let servicesImage = {};
     r.keys().map(item => { servicesImage[item.replace('./', '')] = r(item); });
     return servicesImage;
}
   
const servicesImage = importAll(require.context('../assets/img/services', false, /\.svg/));

const services = () => {
     return (
          <main className="services">

               <section className="services-banner py-32 relative bg-cover bg-top bg-no-repeat">

                    <div className="container mx-auto">

                         <div className="flex flex-col">

                              <div className="relative z-20 text-white">

                                   <div className="text-[24px] sm:text-[48px] tracking-tighter font-bold">We drive customer satisfaction</div>

                                   <div className="text-base">Explore to learn more to our services!</div>

                              </div>

                              <div className="home-banner-content-background z-10 top-0 left-0 h-full w-10/12 absolute bg-gradient-to-r from-[#00138e]/60 via-[#0c5adb]/60 to-transparent"></div>

                         </div>

                    </div>

               </section>

               <section className="relative py-20">

                    <div className="container mx-auto">

                         <div className="flex flex-col md:flex-row items-center">

                              <div className="w-full md:w-6/12">

                                   <div className="services-image-wrapper">

                                        <img src={servicesImage['web-development.svg']} className="services-image" alt="..." />

                                   </div>

                              </div>

                              <div className="w-full md:w-6/12">

                                   <div className="services-content-wrapper">

                                        <div className="services-content-heading">Web Development</div>

                                        <div className="services-content-paragraph">We design and build modern results-driven and stunning business websites which reflect your style and industry. Our mighty team brings over 15 years of international experience in building sites of different industries around the globe.</div>

                                        <Link to="/services/web-development" className="services-content-button">Learn More</Link>

                                   </div>

                              </div>

                         </div>

                    </div>

               </section>

               <section className="relative bg-[#f8f8fc] py-20">

                    <div className="container mx-auto">

                         <div className="flex flex-col md:flex-row items-center">

                              <div className="w-full md:w-6/12 md:order-12">

                                   <div className="services-image-wrapper">

                                        <img src={servicesImage['search-engine-optimization.svg']} className="services-image" alt="..." />

                                   </div>

                              </div>

                              <div className="w-full md:w-6/12">

                                   <div className="services-content-wrapper">

                                        <div className="services-content-heading">Search Engine Optimization (SEO)</div>

                                        <div className="services-content-paragraph">Be visible and get the maximum exposure of your business on the web with our SEO services.</div>

                                        <div className="services-content-paragraph">We will increase your website traffic by implementing the on-page and off-page optimization using white hat technique religiously.</div>

                                        <Link to="/services/search-engine-optimization" className="services-content-button">Learn More</Link>

                                   </div>

                              </div>

                         </div>

                    </div>

               </section>

               <section className="relative py-20">

                    <div className="container mx-auto">

                         <div className="flex flex-col md:flex-row items-center">

                              <div className="w-full md:w-6/12">

                                   <div className="services-image-wrapper">

                                        <img src={servicesImage['accounting.svg']} className="services-image" alt="..." />

                                   </div>

                              </div>

                              <div className="w-full md:w-6/12">

                                   <div className="services-content-wrapper">

                                        <div className="services-content-heading">Accounting Services</div>

                                        <div className="services-content-paragraph">We offer financial services adapted to international market requirements. We are your partner for successful business. Raporting. Consulting. Accounting. Bookkeeping.</div>

                                        <Link to="/services/accounting" className="services-content-button">Learn More</Link>

                                   </div>

                              </div>

                         </div>

                    </div>

               </section>

               <section className="relative bg-[#f8f8fc] py-20">

                    <div className="container mx-auto">

                         <div className="flex flex-col md:flex-row items-center">

                              <div className="w-full md:w-6/12 md:order-12">

                                   <div className="services-image-wrapper">

                                        <img src={servicesImage['virtual-assistant.svg']} className="services-image" alt="..." />

                                   </div>

                              </div>

                              <div className="w-full md:w-6/12">

                                   <div className="services-content-wrapper">

                                        <div className="services-content-heading">Virtual Assistant</div>

                                        <div className="services-content-paragraph">A virtual assistant is an administrative professional who works remotely for a client or set of clients, handling appointment setting, inbound and outbound phone calls, scheduling, travel arrangements, email, typing, light bookkeeping, and more. Virtual assistants may be used by both small businesses and large corporations.</div>

                                        <Link to="/services/virtual-assistant" className="services-content-button">Learn More</Link>

                                   </div>

                              </div>

                         </div>

                    </div>

               </section>

          </main>
     )
}

export default services
