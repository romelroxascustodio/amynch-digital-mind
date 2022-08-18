import { Link } from 'react-router-dom';
import HomeBannerVideo from '../../assets/video/amynch-home-banner-video.mp4';

const HomeBanner = () => {
     return ( 
          <section className="home-banner relative w-full h-[300px] sm:h-[400px] lg:h-[600px] md:h-[450px]">

               <div className="home-banner-container relative w-full h-full">

                    <div className="home-banner-row flex h-full w-full">

                         <div className="home-banner-column w-full h-full">

                              <div className="home-banner-content flex items-center justify-center sm:justify-start mx-auto w-full h-full container">

                                   <div className="home-banner-content-wrapper relative z-20 self-center my-auto text-center sm:text-left">

                                        <div className="home-banner-content-heading text-2xl leading-tight tracking-tight font-extrabold text-white sm:text-[48px] md:w-[500px] mb-4">Grow your business online with us</div>

                                        <div className="home-banner-content-paragraph text-base font-normal text-white md:w-[600px] mb-8">Satisfaction of our customer is our fulfillment.</div>

                                        <Link to="/contact" className="home-banner-content-button inline-flex items-center justify-center bg-primary text-white font-semibold tracking-tight rounded min-h-[3.5rem] px-8 hover:bg-secondary transition-all duration-300 ease-in">Get Started</Link>

                                   </div>

                                   <div className="home-banner-content-background z-10 top-0 left-0 h-full w-4/5 absolute bg-gradient-to-r from-[#00138e]/60 via-[#0c5adb]/60 to-transparent"></div>

                              </div>

                         </div>
                         
                         <div className="home-banner-column xl:basis-3/5 right-0 overflow-hidden absolute flex flex-nowrap h-full">

                              <div className="home-banner-video-wrapper d-block w-full">

                                   <video className="home-banner-video w-full min-h-full object-cover" playsInline autoPlay loop muted>

                                        <source src={HomeBannerVideo} type="video/mp4" />;

                                   </video>

                              </div>

                         </div>
                         
                    </div>

               </div>

          </section>
     );
};

export default HomeBanner;
