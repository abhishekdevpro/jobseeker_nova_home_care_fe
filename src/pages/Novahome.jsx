// import Header from '../Components/Home/Header'
// import HeroSection from '../Components/Home/Hero-section'
// // import ServiceGrid from '../Components/Home/Care'
// // import HomeCarePage from '../Components/Home/HomeCarepage'
// import ElderlyManagement from '../Components/Home/Management'
// import ExtensiveServices from '../Components/Home/Services'
// import ServicesComponent from '../Components/Home/Services2'
// import JoinNovaHomeCare from '../Components/Home/Homecare'
// import FaqSection from '../Components/Home/Faq'
// // import Counter from '../Components/Home/Counter'
// import ContactForm from '../Components/Home/Contact'
// import AppointmentBooking from '../Components/Home/Appointment'
// import Footer from '../Components/Home/Footer'
// import Navbar from '../Components/Home/Navbar'

import AppointmentBooking from "./NovaHome/Appointment"
import ContactForm from "./NovaHome/Contact"
import FaqSection from "./NovaHome/Faq"
import Footer from "./NovaHome/Footer"
import Header from "./NovaHome/Header"
import HeroSection from "./NovaHome/Hero-section"
import ElderlyManagement from "./NovaHome/Management"
import Navbar from "./NovaHome/Navbar"
import ExtensiveServices from "./NovaHome/Services"
import ServicesComponent from "./NovaHome/Services2"
import JoinNovaHomeCare from './NovaHome/Homecare'


const Home = () => {
  return (
    <div>
      <Navbar />
       <Header />
       <HeroSection />
       {/* <ServiceGrid /> */}
       {/* <HomeCarePage /> */}
            <ExtensiveServices />
            <AppointmentBooking />
            <ServicesComponent />
       <ElderlyManagement />
            <JoinNovaHomeCare />
            <FaqSection />
            {/* <Counter /> */}
            <ContactForm/>
            <Footer />
    </div>
  )
}

export default Home