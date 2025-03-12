
import AppointmentBooking from "./NovaHome/NovaLanding/Appointment"
import ContactForm from "./NovaHome/NovaLanding/Contact"
import FaqSection from "./NovaHome/NovaLanding/Faq"
import Footer from "./NovaHome/Footer/Footer"
import Header from "./NovaHome/Header/Header"
import HeroSection from "./NovaHome/NovaLanding/Hero-section"
import ElderlyManagement from "./NovaHome/NovaLanding/Management"
import Navbar from "./NovaHome/Header/Navbar"
import ExtensiveServices from "./NovaHome/NovaLanding/Services"
import ServicesComponent from "./NovaHome/NovaLanding/Services2"
import JoinNovaHomeCare from './NovaHome/NovaLanding/Homecare'
import CareerAdvisorPage from "./NovaHome/NovaLanding/HeroSection"
import JobPortalSection from "./NovaHome/NovaLanding/JobPortalSection"
import WhyChooseUsSection from "./NovaHome/NovaLanding/WhyChooseUs"
import PDFManagement from "./NovaHome/NovaLanding/PdfManagementSection"


const Home = () => {
  return (
    <div>
      <Navbar />
       {/* <Header /> */}
       <CareerAdvisorPage />
       <JobPortalSection />
       <WhyChooseUsSection />
       <PDFManagement />
       {/* <HeroSection /> */}
       {/* <ServiceGrid /> */}
       {/* <HomeCarePage /> */}
            <ExtensiveServices />
            {/* <AppointmentBooking /> */}
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