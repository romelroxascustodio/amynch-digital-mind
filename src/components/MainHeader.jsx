import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/img/amynch-digital-mind-logo.png';
import * as Icon from 'react-icons/fa';
import TopHeaderSocialData from './topheader/TopHeaderSocialData';
import TopHeaderSocialItem from './topheader/TopHeaderSocialItem';
import NavbarMenuData from './navbar/NavbarMenuData';
import NavbarMenuItem from './navbar/NavbarMenuItem';
import NavbarMobileMenuData from './navbar/NavbarMobileMenuData';
import NavbarMobileMenuItem from './navbar/NavbarMobileMenuItem';

// const MobileMenuButton = () => {
//      const [toggleMenu, setToggleMenu] = useState(false);
//      return (
//           <>
//           </>
//      );
// };
   
const MainHeader = () => {

     const [toggleMenu, setToggleMenu] = useState(false);

     const handleToggleMenu = () => {
          setToggleMenu(!toggleMenu);
          document.body.classList.toggle('toggleActive');
     };

     const hideToggleMenu = () => {
          setToggleMenu(false);
          document.body.classList.remove('toggleActive');
     }

     return (
          <header className="header">

               <div className="top-header hidden lg:block">

                    <div className="top-header-container container mx-auto">

                         <div className="top-header-row">

                              <div className="top-header-column lg:basis-7/12">

                                   <div className="top-header-contact">

                                        <div className="top-header-contact-wrapper">

                                             <div className="top-header-contact-item">

                                                  <div className="top-header-contact-left">

                                                       <Icon.FaEnvelopeOpenText className="top-header-contact-icon mr-2" />

                                                  </div>

                                                  <div className="top-header-contact-right">

                                                       <a href="mailto:info@amynchdigitalmind.com" className="top-header-contact-link">info@amynchdigitalmind.com</a>

                                                       <div className="top-header-contact-paragraph">Email Us For More Info</div>

                                                  </div>

                                             </div>

                                             <div className="top-header-contact-item">

                                                  <div className="top-header-contact-left">

                                                       <Icon.FaMobileAlt className="top-header-contact-icon" />

                                                  </div>

                                                  <div className="top-header-contact-right">

                                                       <a href="tel:+63-927-458-1117" className="top-header-contact-link">+63 927 458 1117</a>

                                                       <div className="top-header-contact-paragraph">Call Us For More Info</div>

                                                  </div>

                                             </div>

                                        </div>

                                   </div>

                              </div>

                              <div className="top-header-column lg:basis-5/12">

                                   <div className="top-header-social">

                                        <div className="top-header-social-wrapper">

                                             {TopHeaderSocialData.map((item, index) => (
                                                  <TopHeaderSocialItem key={item + index} path={item.path} icon={item.icon} />
                                             ))}

                                        </div>

                                   </div>

                              </div>

                         </div>

                    </div>

               </div>

               <nav className="navbar z-40 relative bg-white">

                    <div className="navbar-container container">

                         <div className="navbar-row">

                              <div className="navbar-logo mr-auto self-center">

                                   <div className="navbar-logo-item">

                                        <NavLink onClick={hideToggleMenu} className="navbar-logo-link" to="/">

                                             <img src={Logo} className="navbar-logo-image w-56" alt="..." />

                                        </NavLink>

                                   </div>

                              </div>

                              <div className="navbar-menu hidden lg:flex">

                                   {NavbarMenuData.map((item, index) => (
                                        <NavbarMenuItem key={item + index} path={item.path} title={item.title} />
                                   ))}

                                   <div className="navbar-menu-item px-5 py-5">

                                        <NavLink className="navbar-menu-link" to="/contact">Contact Us</NavLink>

                                   </div>

                              </div>

                              <div className="navbar-mobile-menu lg:hidden">

                                   <button type="button" onClick={handleToggleMenu} className={toggleMenu ? "navbar-mobile-menu-button active" : "navbar-mobile-menu-button"}>

                                        <div className="navbar-mobile-menu-button-wrapper">
                                             <span></span>
                                             <span></span>
                                             <span></span>
                                        </div>

                                   </button>

                              </div>

                         </div>

                    </div>

               </nav>

               {toggleMenu && (

                    <section className="navbar-mobile-menu lg:hidden bg-white z-30 relative top-0 right-0 p-3 w-full h-screen">

                         <div className="navbar-mobile-menu-container container w-full mx-auto flex flex-col justify-start items-start">

                              {NavbarMobileMenuData.map((item, index) => (
                                   <NavbarMobileMenuItem hide={hideToggleMenu} key={item + index} path={item.path} title={item.title} />
                              ))}

                              <div className="navbar-mobile-menu-item">

                                   <NavLink to="/contact" onClick={hideToggleMenu} className="navbar-mobile-menu-link">Contact Us</NavLink>
                                   
                              </div>

                         </div>

                    </section>

               )}

          </header>
     );
}

export default MainHeader
