import { Routes, Route } from "react-router-dom";
// import { MessengerChat } from 'react-messenger-chat-plugin';
import MainHeader from './components/MainHeader';
import Footer from './components/footer';
import Home from "./routes/home";
import About from "./routes/about";
import Services from "./routes/services";
// import Careers from "./routes/careers";
// import Blogs from "./routes/blogs";
import Contact from "./routes/contact";
import NotFound from "./routes/NotFound";
import UnderMaintenance from "./routes/UnderMaintenance";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <>
      <ScrollToTop>
      <MainHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/why-amynch" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/careers" element={<UnderMaintenance />} />
        <Route path="/blogs" element={<UnderMaintenance />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      </ScrollToTop>
      {/* <MessengerChat
        pageId='108296655091021'
        language='en_US'
        themeColor={'#0c5adb'}
        height={24}
        loggedInGreeting='Hello logged in user!'
        loggedOutGreeting='Hello stranger!'
        autoExpand={true}
        debugMode={false}
        onMessengerShow={() => {console.log('onMessengerShow')}}
        onMessengerHide={() => {console.log('onMessengerHide')}}
        onMessengerDialogShow={() => {console.log('onMessengerDialogShow')}}
        onMessengerDialogHide={() => {console.log('onMessengerDialogHide')}}
      /> */}
    </>
  );
}

export default App;
