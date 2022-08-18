import { NavLink } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaFacebookMessenger, FaSkype, FaWhatsapp, FaMobileAlt, FaEnvelopeOpenText } from 'react-icons/fa';

const footer = () => {
  return (
       <footer className="footer relative">

          <section className="footer-top">

               <div className="footer-top-container container mx-auto">

                    <div className="footer-top-row">

                         <div className="footer-top-column lg:basis-7/12 px-4">

                              <div className="footer-about mb-6">

                                   <div className="footer-about-wrapper">

                                        <div className="footer-about-paragraph text-white text-base leading-loose">Looking for a Trustworthy Website Development and an SEO company to manage your services Online? You have come to the right place! We develop and optimize websites to boost your online presence.</div>

                                   </div>

                              </div>

                              <div className="footer-contact mb-12">

                                   <div className="footer-contact-wrapper block sm:flex">

                                        <div className="footer-contact-item mb-8 sm:mb-0">

                                             <div className="footer-contact-left">

                                                  <FaEnvelopeOpenText className="footer-contact-icon mr-2" />

                                             </div>

                                             <div className="footer-contact-right">

                                                  <a href="mailto:info@amynchdigitalmind.com" className="footer-contact-link">info@amynchdigitalmind.com</a>

                                                  <div className="footer-contact-paragraph">Email Us For More Info</div>

                                             </div>

                                        </div>

                                        <div className="footer-contact-item">

                                             <div className="footer-contact-left">

                                                  <FaMobileAlt className="footer-contact-icon" />

                                             </div>

                                             <div className="footer-contact-right">

                                                  <a href="tel:+63-927-458-1117" className="footer-contact-link">+63 927 458 1117</a>

                                                  <div className="footer-contact-paragraph">Call Us For More Info</div>

                                             </div>

                                        </div>

                                   </div>

                              </div>

                         </div>

                         <div className="footer-top-column basis-full mb-12 sm:mb-0 sm:basis-6/12 lg:basis-2/12 px-4">
                              
                              <div className="footer-menu">

                                   <div className="footer-menu-heading text-white text-base tracking-tight font-bold capitalize mb-3">Useful Link</div>

                                   <div className="footer-menu-wrapper">

                                        <div className="footer-menu-item">

                                             <NavLink to="/why-amynch" className="footer-menu-link">Why Amynch?</NavLink>

                                        </div>

                                        <div className="footer-menu-item">

                                             <NavLink to="/services" className="footer-menu-link">Services</NavLink>

                                        </div>

                                        <div className="footer-menu-item">

                                             <NavLink to="/careers" className="footer-menu-link">Careers</NavLink>

                                        </div>

                                        <div className="footer-menu-item">

                                             <NavLink to="/blogs" className="footer-menu-link">Blogs</NavLink>

                                        </div>

                                        <div className="footer-menu-item">

                                             <NavLink to="/contact" className="footer-menu-link">Contact Us</NavLink>

                                        </div>

                                   </div>

                              </div>

                         </div>

                         <div className="footer-top-column basis-full sm:basis-6/12 lg:basis-3/12 px-4">
                              
                              <div className="footer-services">

                                   <div className="footer-services-heading text-white text-base tracking-tight font-bold capitalize mb-3">Our Services</div>

                                   <div className="footer-services-wrapper">

                                        <div className="footer-services-item">

                                             <NavLink to="/services/web-development" className="footer-services-link">Web Development</NavLink>
                                             
                                        </div>

                                        <div className="footer-services-item">

                                             <NavLink to="/services/search-engine-optimization" className="footer-services-link">Search Engine Optimization</NavLink>
                                             
                                        </div>

                                        <div className="footer-services-item">

                                             <NavLink to="/services/accounting" className="footer-services-link">Accounting</NavLink>
                                             
                                        </div>

                                        <div className="footer-services-item">

                                             <NavLink to="/services/virtual-assistant" className="footer-services-link">Virtual Assistant</NavLink>
                                             
                                        </div>

                                   </div>

                              </div>

                         </div>

                    </div>

               </div>

          </section>

          <section className="footer-bottom">

               <div className="footer-bottom-container container mx-auto">

                    <div className="footer-bottom-row md:flex md:items-center md:flex-wrap md:justify-between">

                         <div className="footer-bottom-column">

                              <div className="footer-bottom-copyright text-center mb-4 md:mb-0">

                                   <div className="footer-bottom-copyright-wrapper">

                                        <div className="footer-bottom-copyright-paragraph text-white text-sm">Copyright &copy; {(new Date().getFullYear())} Amynch Digital Mind</div>

                                   </div>

                              </div>

                         </div>

                         <div className="footer-bottom-column">

                              <div className="footer-bottom-social">

                                   <div className="footer-bottom-social-wrapper flex justify-center md:items-center md:flex-wrap md:justify-between">

                                        <div className="footer-bottom-social-item">

                                             <a href="https://web.facebook.com/Amynch-Digital-Mind-108296655091021" rel="noreferrer" target="_blank" className="footer-bottom-social-link">

                                                  <FaFacebookF className="footer-bottom-social-icon" />

                                             </a>

                                        </div>

                                        <div className="footer-bottom-social-item">

                                             <a href="#" rel="noreferrer" target="_blank" className="footer-bottom-social-link">

                                                  <FaTwitter className="footer-bottom-social-icon" />

                                             </a>

                                        </div>

                                        <div className="footer-bottom-social-item">

                                             <a href="#" rel="noreferrer" target="_blank" className="footer-bottom-social-link">

                                                  <FaInstagram className="footer-bottom-social-icon" />

                                             </a>

                                        </div>

                                        <div className="footer-bottom-social-item">

                                             <a href="http://m.me/108296655091021" rel="noreferrer" target="_blank" className="footer-bottom-social-link">

                                                  <FaFacebookMessenger className="footer-bottom-social-icon" />

                                             </a>

                                        </div>

                                        <div className="footer-bottom-social-item">

                                             <a href="#" rel="noreferrer" target="_blank" className="footer-bottom-social-link">

                                                  <FaSkype className="footer-bottom-social-icon" />

                                             </a>

                                        </div>

                                        <div className="footer-bottom-social-item">

                                             <a href="#" rel="noreferrer" target="_blank" className="footer-bottom-social-link">

                                                  <FaWhatsapp className="footer-bottom-social-icon" />

                                             </a>

                                        </div>

                                   </div>

                              </div>

                         </div>
                         
                    </div>

               </div>

          </section>

       </footer>
  );
};

export default footer;
