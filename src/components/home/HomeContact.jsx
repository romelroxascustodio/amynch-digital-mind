import { Link } from 'react-router-dom';
import HomeContactPhoto from '../../assets/img/home-contact.jpg';

const HomeContact = () => {
     return (
          <section className="home-contact relative bg-white py-20">
               
               <div className="home-contact-container container mx-auto">

                    <div className="home-contact-row relative flex flex-col lg:flex-row items-center min-h-[600px]">

                         <div className="home-contact-column relative z-10 w-full flex justify-start mb-8 lg:mb-0">

                              <div className="home-contact-content flex flex-col w-full lg:w-[550px] shadow-2xl">

                                   <div className="home-contact-content-wrapper px-8 py-12 bg-white block flex-col">

                                        <div className="home-contact-content-heading text-primary text-[24px] md:text-[48px] leading-normal font-extrabold tracking-tight mb-4">Let's connect and start a conversation</div>

                                        <div className="home-contact-content-paragraph leading-loose text-sm sm:text-[20px] mb-8">We Love to be Part of your Success Story! Get started to your project and scale your business.</div>

                                        <Link to="/contact" className="home-contact-content-button inline-flex items-center justify-center bg-primary text-white font-semibold tracking-tight rounded min-h-[3.5rem] px-8 hover:bg-secondary transition-all duration-300 ease-in">Get Started</Link>

                                   </div>

                              </div>

                         </div>

                         <div className="home-contact-column relative lg:absolute z-0 right-0 flex w-full lg:w-[70%] justify-center items-center">

                              <div className="home-contact-image">

                                   <div className="home-contact-image-wrapper">

                                        <img src={HomeContactPhoto} className="max-w-full h-auto rounded-xl" alt="..." />
                                        
                                   </div>

                              </div>

                         </div>

                    </div>

               </div>

          </section>
     );
};

export default HomeContact;
