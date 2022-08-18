import { Link } from 'react-router-dom';
import HomeAboutVideo from '../../assets/video/amynch-home-about-video.mp4';

const HomeAbout = () => {
     return (
          <section className="home-about relative lg:h-[600px] bg-gradient-to-r from-secondary via-primary to-blue-500">

               <div className="home-about-container container-fluid p-0 h-full">

                    <div className="home-about-row relative h-full flex flex-col lg:flex-row justify-end items-center">

                         <div className="home-about-column w-full lg:w-6/12 left-0 overflow-hidden relative flex h-full">

                              <div className="home-about-video-wrapper d-block w-full">

                                   <video className="home-about-video w-full min-h-full object-cover" playsInline autoPlay loop muted>

                                        <source src={HomeAboutVideo} type="video/mp4" />;

                                   </video>

                              </div>
                              
                         </div>

                         <div className="home-about-column w-full lg:w-6/12">

                              <div className="home-about-content px-8 py-12 lg:p-12">

                                   <div className="home-about-content-wrapper my-auto">

                                        <div className="home-about-content-heading text-[24px] md:text-[48px] font-extrabold tracking-tight text-white mb-6">Who We Are</div>

                                        <div className="home-about-content-paragraph text-sm sm:text-[20px] text-white leading-loose font-normal mb-6">We help you gain valuable insight on your customers. We provide Web Design and Development, SEO Services, Accounting Services and Virtual Assistant.</div>

                                        <Link to="/about" className="home-about-content-button inline-flex items-center justify-center bg-secondary/50 text-white font-semibold tracking-tight rounded min-h-[3.5rem] px-8 hover:bg-secondary transition-all duration-300 ease-in">Learn More</Link>

                                   </div>

                              </div>

                         </div>

                    </div>

               </div>

          </section>
     );
};

export default HomeAbout;
