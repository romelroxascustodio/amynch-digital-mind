import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const importAll = (r) => {
     let services = {};
     r.keys().map(item => { services[item.replace('./', '')] = r(item); });
     return services;
}
   
const services = importAll(require.context('../../assets/img/services', false, /\.svg/));

const HomeServices = () => {
     return (
          <section className="home-services relative bg-white py-20">

               <div className="home-services-container container mx-auto">

                    <div className="home-services-row flex flex-wrap">

                         <div className="home-services-column w-full">

                              <div className="home-services-header mb-12">

                                   <div className="home-services-header-heading text-[30px] sm:text-[48px] font-extrabold tracking-tight text-center text-primary mb-6">High Quality Solutions and Services</div>

                                   <div className="home-services-header-paragraph text-xl text-center">We provide high quality solution that deliver the best possible customer experiences.</div>

                              </div>

                         </div>

                         <div className="home-services-column w-full">
                              
                              <Tabs className="home-services-tabs">

                                   <TabList className="home-services-tablist flex-col md:flex-row divide-y sm:divide-x divide-gray-200">

                                        <Tab className="home-services-tab rounded-t-lg md:rounded-l-lg md:rounded-tr-none">Web Development</Tab>

                                        <Tab className="home-services-tab">Search Engine Optimization</Tab>

                                        <Tab className="home-services-tab">Accounting</Tab>

                                        <Tab className="home-services-tab rounded-b-lg md:rounded-r-lg md:rounded-bl-none">Virtual Assistant</Tab>

                                   </TabList>

                                   <TabPanel className="home-services-tabpanel">
                                        
                                        <div className="home-services-tabpanel-row flex flex-wrap items-center">

                                             <div className="home-services-tabpanel-column w-full md:w-6/12 px-4">

                                                  <div className="home-services-tabpanel-image-wrapper mb-4 md:mb-0">

                                                       <img src={services['web-development.svg']} className="home-services-tabpanel-image" alt="..." />

                                                  </div>

                                             </div>

                                             <div className="home-services-tabpanel-column w-full md:w-6/12 px-4">

                                                  <div className="home-services-tabpanel-content">

                                                       <div className="home-services-tabpanel-content-wrapper text-center md:text-left">

                                                            <div className="home-services-tabpanel-content-heading">Web Development</div>

                                                            <div className="home-services-tabpanel-content-paragraph">We design and build modern results-driven and stunning business websites which reflect your style and industry. Our mighty team brings over 15 years of international experience in building sites of different industries around the globe.</div>

                                                            <Link to="/services/web-development" className="home-services-tabpanel-content-button">Learn More</Link>
                                                            
                                                       </div>
                                                       
                                                  </div>

                                             </div>
                                   
                                        </div>

                                   </TabPanel>

                                   <TabPanel className="home-services-tabpanel">
                                        
                                        <div className="home-services-tabpanel-row flex flex-wrap items-center">

                                             <div className="home-services-tabpanel-column w-full md:w-6/12 px-4">

                                                  <div className="home-services-tabpanel-image-wrapper mb-4 md:mb-0">

                                                       <img src={services['search-engine-optimization.svg']} className="home-services-tabpanel-image" alt="..." />

                                                  </div>

                                             </div>

                                             <div className="home-services-tabpanel-column w-full md:w-6/12 px-4">

                                                  <div className="home-services-tabpanel-content">

                                                       <div className="home-services-tabpanel-content-wrapper text-center md:text-left">

                                                            <div className="home-services-tabpanel-content-heading">Search Engine Optimization (SEO)</div>

                                                            <div className="home-services-tabpanel-content-paragraph">Be visible and get the maximum exposure of your business on the web with our SEO services.</div>
                                                            
                                                            <div className="home-services-tabpanel-content-paragraph">We will increase your website traffic by implementing the on-page and off-page optimization using white hat technique religiously.</div>

                                                            <Link to="/services/search-engine-optimization" className="home-services-tabpanel-content-button">Learn More</Link>
                                                            
                                                       </div>
                                                       
                                                  </div>

                                             </div>

                                        </div>

                                   </TabPanel>

                                   <TabPanel className="home-services-tabpanel">
                                        
                                        <div className="home-services-tabpanel-row flex flex-wrap items-center">

                                             <div className="home-services-tabpanel-column w-full md:w-6/12 px-4">

                                                  <div className="home-services-tabpanel-image-wrapper mb-4 md:mb-0">

                                                       <img src={services['accounting.svg']} className="home-services-tabpanel-image" alt="..." />

                                                  </div>

                                             </div>

                                             <div className="home-services-tabpanel-column w-full md:w-6/12 px-4">

                                                  <div className="home-services-tabpanel-content">

                                                       <div className="home-services-tabpanel-content-wrapper text-center md:text-left">

                                                            <div className="home-services-tabpanel-content-heading">Accounting Services</div>

                                                            <div className="home-services-tabpanel-content-paragraph">We offer financial services adapted to international market requirements. We are your partner for successful business. Raporting. Consulting. Accounting. Bookkeeping.</div>

                                                            <Link to="/services/accounting" className="home-services-tabpanel-content-button">Learn More</Link>
                                                            
                                                       </div>
                                                       
                                                  </div>

                                             </div>

                                        </div>

                                   </TabPanel>

                                   <TabPanel className="home-services-tabpanel">

                                        <div className="home-services-tabpanel-row flex flex-wrap items-center">

                                             <div className="home-services-tabpanel-column w-full md:w-6/12 px-4">

                                                  <div className="home-services-tabpanel-image-wrapper mb-4 md:mb-0">

                                                       <img src={services['virtual-assistant.svg']} className="home-services-tabpanel-image" alt="..." />

                                                  </div>

                                             </div>

                                             <div className="home-services-tabpanel-column w-full md:w-6/12 px-4">

                                                  <div className="home-services-tabpanel-content">

                                                       <div className="home-services-tabpanel-content-wrapper text-center md:text-left">

                                                            <div className="home-services-tabpanel-content-heading">Virtual Assistant</div>

                                                            <div className="home-services-tabpanel-content-paragraph">A virtual assistant is an administrative professional who works remotely for a client or set of clients, handling appointment setting, inbound and outbound phone calls, scheduling, travel arrangements, email, typing, light bookkeeping, and more. Virtual assistants may be used by both small businesses and large corporations.</div>

                                                            <Link to="/services/virtual-assistant" className="home-services-tabpanel-content-button">Learn More</Link>
                                                            
                                                       </div>
                                                       
                                                  </div>

                                             </div>

                                        </div>

                                   </TabPanel>

                              </Tabs>

                         </div>

                    </div>

               </div>

          </section>
     );
};

export default HomeServices;
