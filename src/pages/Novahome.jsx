
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