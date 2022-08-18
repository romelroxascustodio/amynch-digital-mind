import HomeBanner from "../components/home/HomeBanner";
import HomeServices from "../components/home/HomeServices";
import HomeAbout from "../components/home/HomeAbout";
import HomeContact from "../components/home/HomeContact";

const home = () => {
     return (
          <main className="home">

               <HomeBanner />

               <HomeServices />

               <HomeAbout />

               <HomeContact />

          </main>
     )
}

export default home
